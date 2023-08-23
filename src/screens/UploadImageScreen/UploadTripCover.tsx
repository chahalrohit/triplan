import {
  useNavigation,
  useRoute,
  useNavigationState,
} from '@react-navigation/core';
import NavBar from 'components/NavBar';
import {width} from 'config/scaleAccordingToDevice';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {View, Colors, Assets, Image, Text} from 'react-native-ui-lib';
// import { launchImageLibrary } from 'react-native-image-picker';
import Routes from 'config/Routes';
import BaseButton from 'components/BaseButton';

const widthImg = (width - 2) / 3;
const heightImg = widthImg;
const UploadTripCover = () => {
  const data = [
    {img: Assets.icons.ic_camera_48},
    {img: Assets.images.fb_album},
    {img: Assets.images.ig_album},
    {img: Assets.images.thumbnail},
    {img: Assets.images.thumbnail_1},
    {img: Assets.images.thumbnail_2},
    {img: Assets.images.thumbnail_3},
    {img: Assets.images.thumbnail_9},
    {img: Assets.images.thumbnail_10},
    {img: Assets.images.thumbnail_11},
    {img: Assets.images.thumbnail_12},
    {img: Assets.images.thumbnail_13},
    {img: Assets.images.thumbnail_14},
    {img: Assets.images.thumbnail_15},
    {img: Assets.images.thumbnail_16},
    {img: Assets.images.thumbnail_17},
    {img: Assets.images.thumbnail_18},
    {img: Assets.images.thumbnail_19},
    {img: Assets.images.thumbnail_20},
  ];
  const {goBack, navigate} = useNavigation();
  const [listImg, setlistImg] = useState<any[]>([]);
  const routes = useRoute();
  const {keyScreen, index, isBackground} = routes.params;
  const from = useNavigationState(state => state.routes[state.index - 1].name);
  const onGoTripStep2 = React.useCallback(item => {
    navigate(from, {
      uri: item.uri,
      img: item.img,
      keyScreen: keyScreen ?? 0,
    });
  }, []);

  const onGoTripStep3 = React.useCallback(() => {
    navigate(from, {
      imgs: listImg,
      index,
    });
  }, [index, listImg]);
  const openImageLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      e => {
        const uri = e?.uri ?? '';
        if (uri) {
          if (from !== Routes.PublicTripStep3 && isBackground) {
            onGoTripStep2({uri});
          } else {
            console.log('uri :>> ', uri);
            navigate(from, {
              imgs: [{uri}],
              index,
            });
          }
        }
      },
    );
  };
  const handleAddImg = (isAdded: boolean, img: any) => {
    if (isAdded) {
      const newList = [...listImg].filter(item => item !== img);
      setlistImg(newList);
    } else {
      setlistImg([...listImg, img]);
    }
  };
  const renderItem = React.useCallback(
    ({item, index}) => {
      const isAdded = index !== 0 && listImg.indexOf(item.img) !== -1;
      return (
        <TouchableOpacity
          style={styles.btnItem}
          onPress={() => {
            if (index === 0) {
              openImageLibrary();
            } else if (index !== 2 && index !== 1) {
              from !== Routes.PublicTripStep3 && isBackground
                ? onGoTripStep2(item)
                : handleAddImg(isAdded, item.img);
            }
          }}>
          {from !== Routes.PublicTripStep3 && isBackground ? (
            <Image
              source={item.img}
              style={styles.img}
              resizeMode={index ? 'cover' : 'center'}
            />
          ) : (
            <ImageBackground
              source={item.img}
              style={styles.img}
              resizeMode={index ? 'cover' : 'center'}>
              {isAdded && (
                <View
                  width={widthImg}
                  height={heightImg}
                  style={{borderWidth: 4, borderColor: Colors.c04}}>
                  <View
                    center
                    absT
                    backgroundColor={Colors.c04}
                    style={{right: 0}}
                    width={24}
                    height={24}>
                    <Text B14 white>
                      {listImg.indexOf(item.img) + 1}
                    </Text>
                  </View>
                </View>
              )}
            </ImageBackground>
          )}
        </TouchableOpacity>
      );
    },
    [listImg],
  );

  return (
    <View flex backgroundColor={Colors.white}>
      <StatusBar barStyle="dark-content" />
      <NavBar
        title={
          from === Routes.PublicTripStep3 || !isBackground
            ? 'Upload Trip Photos'
            : 'Upload Trip Cover'
        }
        leftIcon="back"
        onLeftClick={goBack}
      />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        numColumns={3}
      />
      {(from === Routes.PublicTripStep3 || !isBackground) && (
        <View absB width={width} center style={{bottom: 16}}>
          <BaseButton
            primary
            label={`Add ${listImg.length} photos`}
            onPress={onGoTripStep3}
          />
        </View>
      )}
    </View>
  );
};

export default UploadTripCover;

const styles = StyleSheet.create({
  btnItem: {
    height: width / 3,
    width: width / 3,
    backgroundColor: Colors.white,
  },
  img: {
    width: widthImg,
    height: heightImg,
  },
});
