import {useNavigation} from '@react-navigation/core';
import Routes from 'config/Routes';
import {width} from 'config/scaleAccordingToDevice';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';
import {Assets, Colors, Image, View} from 'react-native-ui-lib';
import {BtnOption} from './ItemImages';

interface Props {
  index: number;
  htmlContent: string;
  onDelete: (index: number) => void;
}

const ItemHtml = React.memo(({index, htmlContent, onDelete}: Props) => {
  const {navigate} = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const goWriteContent = React.useCallback(() => {
    navigate(Routes.WriteContent, {
      htmlContent: htmlContent,
      index,
    });
  }, [htmlContent, index]);
  return (
    <>
      {visible && (
        <Pressable
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          onPress={() => setVisible(false)}
        />
      )}
      <View>
        <Pressable onPress={() => setVisible(prev => !prev)}>
          <HTML
            source={{html: htmlContent}}
            containerStyle={{
              marginHorizontal: 24,
              marginTop: 24,
            }}
            ptSize={1}
            tagsStyles={{
              p: {
                lineHeight: 26,
                fontFamily: 'PTSerif-Regular',
              },
            }}
            classesStyles={{
              'ql-font-serif': {
                fontFamily: 'PTSerif-Regular',
              },
            }}
            baseFontStyle={{
              fontFamily: 'PTSerif-Regular',
              lineHeight: 26,
            }}
          />
        </Pressable>
        {visible && (
          <View style={styles.popup}>
            <View
              flex
              row
              backgroundColor={Colors.c35}
              style={{borderRadius: 4}}>
              <BtnOption
                source={Assets.icons.ic_delete_photo}
                title="Delete"
                onPress={() => onDelete(index)}
              />
              <BtnOption
                source={Assets.icons.ic_edit_content}
                title="Edit"
                onPress={goWriteContent}
              />
            </View>
            <Image
              source={Assets.icons.arr_up_down}
              tintColor={Colors.c35}
              style={{alignSelf: 'center'}}
            />
          </View>
        )}
      </View>
    </>
  );
});

export default ItemHtml;
const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    top: -77 + 24,
    height: 77,
    width: 128,
    right: (width - 128) / 2,
  },
});
