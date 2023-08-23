import { useNavigation, useRoute } from '@react-navigation/core';
import BaseButton from 'components/BaseButton';
import NavBar from 'components/NavBar';
import { FONTS } from 'config/FoundationConfig';
import Routes from 'config/Routes';
import { width } from 'config/scaleAccordingToDevice';
import React from 'react';
import { StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { View, Text, Assets, Colors, Image } from 'react-native-ui-lib';

const PublicTripStep2 = () => {
  const { goBack, navigate } = useNavigation();
  const route = useRoute();
  const [img, setImg] = React.useState('');
  const [uri, setUri] = React.useState('');

  React.useEffect(() => {
    if (route.params?.img) {
      setImg(route.params?.img);
      setUri('');
    }
  }, [route.params?.img]);

  React.useEffect(() => {
    if (route.params?.uri) {
      setUri(route.params?.uri);
      setImg('');
    }
  }, [route.params?.uri]);

  const onGoStep3 = React.useCallback(() => {
    navigate(Routes.PublicTripStep3);
  }, []);
  const onGoUploadTripCover = React.useCallback(() => {
    navigate(Routes.UploadTripCover, {
      from: Routes.PublicTripStep2,
      isBackground: true
    });
  }, []);
  if (!img && !uri) {
    return (
      <View flex backgroundColor={Colors.white}>
        <NavBar
          title=""
          leftIcon="close"
          onLeftClick={goBack}
          rightIcon={Assets.icons.ic_post_menu_black}
          subRightIcon={'ic_save_post_black'}
          style={{ backgroundColor: 'transparent' }}
        />
        <View marginT-40 marginH-24>
          <Text uppercase B14 c59 marginB-16>
            3 Day ・ 0 Place
          </Text>
          <Text M30 c35>
            {route?.params?.title ?? ''}
          </Text>
        </View>
        <View flex center>
          <TouchableOpacity onPress={onGoUploadTripCover}>
            <Image source={Assets.icons.btn_upload_cover} />
          </TouchableOpacity>
        </View>
        <View center marginB-16>
          <BaseButton
            primary
            label="Next to Step 3/3"
            onPress={onGoStep3}
            disable={!img && !uri}
          />
        </View>
      </View>
    );
  }
  return (
    <View flex>
      <StatusBar barStyle='light-content' />
      <NavBar
        title=""
        leftIcon="close"
        onLeftClick={goBack}
        rightIcon={Assets.icons.ic_post_menu_black}
        subRightIcon={'ic_save_post_black'}
        style={{ backgroundColor: 'transparent' }}
        iconColor={Colors.white}
      />
      <View marginT-40 marginH-24>
        <Text uppercase B14 white marginB-16>
          3 Day ・ 0 Place
        </Text>
        <Text M30 white>
          {route?.params?.title ?? ''}
        </Text>
      </View>
      <View flex center>
        <TouchableOpacity onPress={onGoUploadTripCover}>
          <Image
            source={Assets.icons.btn_upload_cover}
            style={{ tintColor: Colors.white }}
          />
        </TouchableOpacity>
      </View>
      <View center marginB-16>
        <BaseButton
          primary
          label="Next to Step 3/3"
          onPress={onGoStep3}

          disable={!img && !uri}
        />
      </View>
      <Image
        source={!!uri ? { uri } : img}
        resizeMode="cover"
        style={{
          width: width,
          height: '100%',
          position: 'absolute',
          zIndex: -1,
        }}
      />
    </View>
  );
};

export default PublicTripStep2;

const styles = StyleSheet.create({
  inputTitle: {
    fontFamily: FONTS.medium,
    fontSize: 30,
    paddingLeft: 0,
    textAlign: 'left',
  },
});
