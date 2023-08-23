import { width } from 'config/scaleAccordingToDevice';
import React from 'react';
import { ImageSourcePropType, Pressable, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib';
import { FONTS } from 'config/FoundationConfig';

interface Props {
  name: string;
  des: string;
  index: number;
  onDelete: (index: number) => void;
}
const ItemPlace = React.memo(({ name, des, onDelete, index }: Props) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            setVisible(prev => !prev);
          }}>
          <Image
            source={Assets.icons.ic_pin_on_map_outline}
            tintColor={Colors.white}
          />
          <View marginL-16>
            <Text B16 white>
              {name}
            </Text>
            <Text M14 cdf>
              {des}
            </Text>
          </View>
        </TouchableOpacity>
        <View paddingH-24>
          <TextInput
            placeholder='Write about Central Park…'
            style={{
              fontSize: 16, 
              color: Colors.d1,
              paddingLeft: 0,
              fontFamily: FONTS.medium,
            }}
          />
        </View>
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
                onPress={() => {
                  onDelete(index);
                }}
              />
              <BtnOption
                source={Assets.icons.ic_edit_content}
                title="Edit"
                onPress={() => { }}
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

export default ItemPlace;
interface PropsBtnOption {
  onPress: () => void;
  source: ImageSourcePropType;
  title: string;
}
const BtnOption = React.memo(({ onPress, source, title }: PropsBtnOption) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Image source={source} marginB-8 />
      <Text M12 cd1>
        {title}
      </Text>
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.c04,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 40,
    marginHorizontal: 24,
    width: width - 48,
    alignSelf: 'center',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
  },
  popup: {
    position: 'absolute',
    top: -40,
    height: 77,
    width: 128,
    right: (width - 128) / 2,
  },
});
