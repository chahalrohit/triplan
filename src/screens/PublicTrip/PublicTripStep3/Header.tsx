import {heightHeader, width} from 'config/scaleAccordingToDevice';
import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {View, Image, Assets, Colors} from 'react-native-ui-lib';
import Menu, {MenuItem} from 'react-native-material-menu';
import {FONTS} from 'config/FoundationConfig';
import {useNavigation} from '@react-navigation/core';

interface Props {
  style?: ViewStyle;
}
const Header = React.memo(({style}: Props) => {
  const {goBack} = useNavigation();
  const menu = React.useRef<Menu>(null);
  return (
    <View
      backgroundColor={'transparent'}
      row
      spread
      paddingT-header
      paddingH-26
      height={heightHeader}
      style={style}>
      <View centerV flex left>
        <TouchableOpacity onPress={goBack}>
          <Image source={Assets.icons.ic_back_blue} />
        </TouchableOpacity>
      </View>
      <View centerV flex-3 />
      <View row spread flex right centerV>
        <TouchableOpacity onPress={() => {}}>
          <View center flex marginR-30>
            <Image source={Assets.icons.ic_save_post_black} />
          </View>
        </TouchableOpacity>
        <Menu
          ref={menu}
          style={{
            marginTop: 20,
          }}
          button={
            <TouchableOpacity
              onPress={() => {
                menu.current?.show();
              }}>
              <Image source={Assets.icons.ic_post_menu_black} />
            </TouchableOpacity>
          }>
          <MenuItem
            onPress={() => {}}
            style={styles.menuItem}
            textStyle={styles.txtNormal}>
            Delete Time Trip
          </MenuItem>
          <MenuItem
            onPress={() => {}}
            style={styles.menuItemReoder}
            textStyle={styles.txtNormal}>
            Reoder Day Trip
          </MenuItem>
          <MenuItem
            onPress={() => {}}
            style={styles.menuItem}
            textStyle={styles.txtDelete}>
            Delete Trip
          </MenuItem>
        </Menu>
      </View>
    </View>
  );
});

export default Header;

const styles = StyleSheet.create({
  txtDelete: {
    fontSize: 14,
    color: Colors.cfe,
    fontFamily: FONTS.medium,
  },
  txtNormal: {
    fontSize: 14,
    color: Colors.c59,
    fontFamily: FONTS.medium,
  },
  menuItem: {
    width: 240,
  },
  menuItemReoder: {
    width: 240,
    backgroundColor: Colors.cf7,
  },
});
