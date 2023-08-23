import {width} from 'config/scaleAccordingToDevice';
import React, {memo} from 'react';
import {Modal, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {
  View,
  Text,
  Colors,
  Image,
  Assets,
  ColorPalette,
} from 'react-native-ui-lib';
const TagDay = memo(() => {
  const [visible, setVisible] = React.useState(false);
  const [topCurrent, setTopCurrent] = React.useState(0);
  const mainColors = React.useRef([
    Colors.c04,
    Colors.cfe,
    Colors.cfd,
    Colors.cf15,
    Colors.c3b,
    Colors.c7e,
    Colors.c24,
  ]).current;
  const [color, setColor] = React.useState(mainColors[1]);

  return (
    <React.Fragment>
      <TouchableOpacity
        style={[styles.tagDay, {backgroundColor: color}]}
        onPress={() => setVisible(true)}
        onLayout={e => {
          e.target.measure((x, y, width, height, pageX, pageY) => {
            setTopCurrent(pageY);
          });
        }}>
        <Text marginL-24 B16 white uppercase>
          Day 1
        </Text>
      </TouchableOpacity>
      {!!topCurrent && (
        <Modal animationType="fade" visible={visible} transparent>
          <TouchableOpacity
            style={styles.btnOver}
            onPress={() => setVisible(false)}
          />
          <View
            style={{
              position: 'absolute',
              top:
                Platform.OS === 'android'
                  ? topCurrent - getStatusBarHeight()
                  : topCurrent,
            }}>
            <View style={[styles.tagDay, {backgroundColor: color}]}>
              <Text marginL-24 B16 white uppercase>
                Day 1
              </Text>
            </View>
            <Image
              source={Assets.icons.arr_up}
              tintColor={Colors.white}
              marginL-48
            />
            <View style={styles.contentSelectColor}>
              <Text M14 c35>
                Select Color Tag
              </Text>
              <ColorPalette
                value={color}
                onValueChange={(value: string) => {
                  setColor(value);
                  setVisible(false);
                }}
                colors={mainColors}
              />
            </View>
          </View>
        </Modal>
      )}
    </React.Fragment>
  );
});

export default TagDay;

const styles = StyleSheet.create({
  tagDay: {
    width: 125,
    height: 52,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    backgroundColor: Colors.cfe,
  },
  contentSelectColor: {
    width: width,
    backgroundColor: Colors.white,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  btnOver: {
    backgroundColor: 'rgba(53,59,72,.8)',
    ...StyleSheet.absoluteFillObject,
  },
});
