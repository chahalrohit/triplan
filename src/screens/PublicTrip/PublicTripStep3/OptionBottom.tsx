import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { View, Text, Colors, Assets, Image } from 'react-native-ui-lib';

interface Props {
  onAddDay: () => void;
  onShare: () => void;
  onPublishTrip: () => void;
  onPublic: () => void;
  onPreview: () => void;
  badge: number;
}
const OptionBottom = (props: Props) => {
  return (
    <View row style={styles.container}>
      <TouchableOpacity style={styles.btnOption} onPress={props.onAddDay}>
        <Image source={Assets.icons.ic_tab_add_day} />
        <Text M10 c83 marginT-4>
          Add Day
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOption} onPress={props.onShare}>
        <Image source={Assets.icons.ic_article_share} />
        <Text M10 c83 marginT-4>
          Share
        </Text>
        {props.badge > 0 &&
          <View
            absT
            backgroundColor={Colors.cfe}
            center
            width={20}
            height={20}
            style={styles.badge}>
            <Text B10 white>
              {props.badge}
            </Text>
          </View>
        }
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOption} onPress={props.onPublishTrip}>
        <Image source={Assets.icons.ic_tab_publish} />
        <Text M10 cf15 marginT-4>
          Publish Trip
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOption} onPress={props.onPublic}>
        <Image source={Assets.icons.ic_tab_public} />
        <Text M10 c83 marginT-4>
          Public
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOption} onPress={props.onPreview}>
        <Image source={Assets.icons.ic_tab_preview} />
        <Text M10 c83 marginT-4>
          Preview
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionBottom;

const styles = StyleSheet.create({
  container: {
    height: 50 + getBottomSpace(),
    paddingBottom: getBottomSpace(),
    elevation: 1,
    backgroundColor: Colors.white,
  },
  btnOption: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    borderRadius: 10,
    borderColor: Colors.white,
    right: 10,
    top: -4,
    borderWidth: 1,
    alignItems: 'center',
  },
});
