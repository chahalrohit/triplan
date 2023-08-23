import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, ViewStyle} from 'react-native';
import {View, Text, Image, Assets, Colors} from 'react-native-ui-lib';
import {heightHeader, bottom} from 'config/scaleAccordingToDevice';

interface Props {
  leftIcon?: 'back' | 'close';
  rightIcon?: any;
  rightText?: string;
  subRightIcon?: 'noti' | 'save' | 'ic_save_post_black' | string;
  title?: string;
  titleColor?: string;
  iconColor?: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  onRightSubClick?: () => void;
  style?: ViewStyle;
  notiCount?: number;
}

const NavBar: React.FC<Props> = ({
  leftIcon,
  rightIcon,
  rightText,
  subRightIcon,
  iconColor = Colors.c35,
  title,
  titleColor,
  onLeftClick,
  onRightClick,
  onRightSubClick,
  notiCount,
  style,
}) => {
  const left = {
    back: Assets.icons.ic_back_blue,
    close: Assets.icons.ic_close_24,
  };

  const sub = {
    noti: Assets.icons.ic_notification,
    save: Assets.icons.ic_save_post_black,
    ic_save_post_black: Assets.icons.ic_save_post_black,
    ic_article_share: Assets.icons.ic_article_share,
  };
  return (
    <View
      backgroundColor={Colors.white}
      row
      spread
      paddingT-header
      paddingH-26
      height={heightHeader}
      style={style}>
      <View centerV flex left>
        {leftIcon && (
          <TouchableWithoutFeedback onPress={onLeftClick}>
            <Image source={left[leftIcon]} style={{tintColor: iconColor}} />
          </TouchableWithoutFeedback>
        )}
      </View>
      <View centerV flex-3>
        <Text c35={!titleColor} B16 center color={titleColor} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View row spread flex right>
        {subRightIcon && (
          <TouchableWithoutFeedback onPress={onRightSubClick}>
            <View center flex marginR-30 centerV>
              <Image
                source={sub[subRightIcon]}
                style={{tintColor: iconColor}}
              />
              {notiCount && subRightIcon === 'noti' && (
                <View
                  absT
                  backgroundColor={Colors.cfe}
                  center
                  width={20}
                  height={20}
                  style={styles.badge}>
                  <Text B10 white>
                    {notiCount}
                  </Text>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        )}
        {(rightIcon || rightText) && (
          <TouchableWithoutFeedback onPress={onRightClick}>
            <View right flex centerV>
              {rightIcon && (
                <Image source={rightIcon} style={{tintColor: iconColor}} />
              )}
              {rightText && (
                <Text c04 M16 marginB-4>
                  {rightText}
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  badge: {
    borderRadius: 10,
    borderColor: Colors.white,
    left: 10,
    top: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
});
