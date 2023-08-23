import {FONTS} from 'config/FoundationConfig';
import {width} from 'config/scaleAccordingToDevice';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {View, Image, Colors, Assets} from 'react-native-ui-lib';

const SearchPlaceName = React.memo(() => {
  return (
    <View style={styles.container}>
      <Image source={Assets.icons.ic_search_16} marginR-8 />
      <TextInput
        placeholder="Enter place name"
        placeholderTextColor={Colors.cd1}
        style={styles.txt}
        editable={false}
      />
    </View>
  );
});

export default SearchPlaceName;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 24,
    left: 24,
    right: 24,
    borderRadius: 100,
    height: 40,
    width: width - 48,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  txt: {
    flex: 1,
    fontFamily: FONTS.medium,
    fontSize: 14,
    lineHeight: 17,
  },
});
