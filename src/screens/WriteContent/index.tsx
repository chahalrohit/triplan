import {useNavigation, useRoute} from '@react-navigation/core';
import {useNavigationState} from '@react-navigation/native';
import NavBar from 'components/NavBar';
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {View, Colors, Image, Text} from 'react-native-ui-lib';
import {FONTS} from 'config/FoundationConfig';
import ListFont from './ListFont';
import ListSize from './ListSize';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const WriteContent = React.memo(() => {
  const {goBack, navigate} = useNavigation();
  const show = useSharedValue(0);
  const styleBox = useAnimatedStyle(() => {
    return {
      opacity: withTiming(show.value, {duration: 300}),
      zIndex: show.value ? 1 : -1,
    };
  });
  const data = React.useMemo(() => {
    return [
      {assetName: 'ic_font'},
      {assetName: 'ic_bold'},
      {assetName: 'ic_underline'},
      {assetName: 'ic_italic'},
      {assetName: 'ic_uppercase'},
      {assetName: 'ic_align'},
      {assetName: 'ic_clear_style'},
    ];
  }, []);
  const prevName = useNavigationState(
    state => state.routes[state.index - 1].name,
  );
  const route: any = useRoute();
  const htmlContent = React.useRef<string>(route.params?.htmlContent || '');

  const onRightClick = React.useCallback(() => {
    navigate(prevName, {
      htmlContent: htmlContent.current,
      indexText: route.params?.index,
    });
  }, [route.params?.index]);
  return (
    <View flex backgroundColor={Colors.white}>
      <NavBar
        title=""
        leftIcon="close"
        onLeftClick={goBack}
        rightText="Save"
        onRightClick={onRightClick}
      />
      <View flex>
        <TextInput
          defaultValue={route.params?.htmlContent}
          placeholder="What did you do today?"
          style={styles.editor}
          multiline
          textAlignVertical="top"
          onChangeText={text => (htmlContent.current = text)}
          autoFocus
        />
      </View>
      <View flex />

      <Animated.View style={[styleBox, styles.box]}>
        <View
          height={32}
          width={208}
          row
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#046FDB',
            overflow: 'hidden',
          }}>
          <View flex backgroundColor="#046FDB" center>
            <Text M13 white>
              Font
            </Text>
          </View>
          <View flex backgroundColor="#FFFFFF" center>
            <Text M13 color="#046FDB">
              Style
            </Text>
          </View>
        </View>
        <View width={208} height={120} row marginT-14>
          <View flex>
            <ListFont />
          </View>
          <View flex>
            <ListSize />
          </View>
        </View>
      </Animated.View>
      <View row height={48} backgroundColor="#EFF0F3">
        {data.map((item, index) => {
          return (
            <View flex key={index} center>
              <TouchableOpacity
                style={{flex: 1, justifyContent: 'center'}}
                onPress={() => {
                  if (!index) {
                    !show.value ? (show.value = 1) : (show.value = 0);
                  }
                }}>
                <Image assetName={item.assetName} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
});

export default WriteContent;

const styles = StyleSheet.create({
  editor: {
    marginHorizontal: 24,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.c04,
    borderRadius: 1,
    fontFamily: 'PTSerif-Regular',
    padding: 0,
    paddingTop: 4,
    fontSize: 16,
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
  box: {
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
    marginLeft: 10,
    zIndex: -10,
    backgroundColor: '#FFF',
    width: 256,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
});
