import { width, height } from 'config/scaleAccordingToDevice';
import React from 'react';
import { ImageSourcePropType, Pressable, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, Colors, View, Text, Assets } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import Routes from 'config/Routes';

interface Props {
  img: ImageSourcePropType;
  index: number;
  quote?: string;
  uri?: any;
}

const ItemImages = React.memo(({ img, index, quote, uri }: Props) => {
  const [visible, setVisible] = React.useState(false);
  const { navigate } = useNavigation();
  return (
    <>
      <View marginT-24>
        <Pressable
          onPress={() => {
            setVisible(prev => !prev);
          }}>
          <Image source={uri ? { uri } : img} style={[{ width: width, height: uri ? 400 : 200 }]} />
          {!!quote && <Text M13 c83 marginT-16 marginH-24>{quote}</Text>}
        </Pressable>
        {visible && (
          <View style={styles.popup}>
            <View
              flex
              row
              backgroundColor={Colors.c35}
              style={{ borderRadius: 4 }}>
              <BtnOption
                source={Assets.icons.ic_delete_photo}
                title="Delete"
                onPress={() => { }}
              />
              <BtnOption
                source={Assets.icons.ic_replace_photo}
                title="Replace"
                onPress={() => { }}
              />
              <BtnOption
                source={Assets.icons.ic_add_quote}
                title="Quote"
                onPress={() => {
                  setVisible(false);
                  navigate(Routes.ImageQuote, {
                    image: img,
                    index,
                    quote
                  })
                }}
              />
              <BtnOption
                source={Assets.icons.ic_make_grid}
                title="Collage"
                onPress={() => { }}
              />
              <BtnOption
                source={Assets.icons.ic_zoom_in}
                title="Padding"
                onPress={() => {
                  console.log('xxxxx');
                }}
              />
            </View>
            <Image
              source={Assets.icons.arr_up_down}
              tintColor={Colors.c35}
              style={{ alignSelf: 'center' }}
            />
          </View>
        )}
      </View>
    </>
  );
});

export default ItemImages;

interface PropsBtnOption {
  onPress: () => void;
  source: ImageSourcePropType;
  title: string;
}
export const BtnOption = React.memo(
  ({ onPress, source, title }: PropsBtnOption) => {
    return (
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Image source={source} marginB-8 />
        <Text M12 cd1>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
  },
  popup: {
    position: 'absolute',
    top: -77,
    height: 77,
    width: 64 * 5,
    alignSelf: 'center',
  },
});
