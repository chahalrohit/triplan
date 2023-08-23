import {useNavigation} from '@react-navigation/native';
import CalendarsList from 'components/CalendarsList';
import NavBar from 'components/NavBar';
import {FONTS} from 'config/FoundationConfig';
import {height, width} from 'config/scaleAccordingToDevice';
import React, {memo} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {View, Text, Assets, Colors, Image} from 'react-native-ui-lib';
import moment from 'moment';
import BaseButton from 'components/BaseButton';
import Routes from 'config/Routes';
const PublicTripStep1 = memo(() => {
  const {goBack, navigate} = useNavigation();
  const [title, setTitle] = React.useState('');
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const tripDuration = React.useMemo(() => {
    if (!from || !to) {
      return '';
    }
    let fromString = moment(from, 'YYYY-MM-DD').format('MMM DD');
    let toString = moment(to, 'YYYY-MM-DD').format('MMM DD, YYYY');
    return `${fromString} - ${toString}`;
  }, [from, to]);
  const [topCurrent, setTopCurrent] = React.useState(0);
  const transY = useSharedValue(height);
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(transY.value, {
            duration: 350,
            easing: Easing.linear,
          }),
        },
      ],
    };
  });

  const onOpenCalendar = React.useCallback(() => {
    Keyboard.dismiss();
    if (!transY.value) {
      transY.value = height;
    } else {
      transY.value = 0;
    }
  }, []);
  const onGoStep2 = React.useCallback(() => {
    navigate(Routes.PublicTripStep2, {
      title,
    });
  }, [title]);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        transY.value = height;
      }}>
      <View flex backgroundColor={Colors.white}>
        <NavBar
          title=""
          leftIcon="close"
          onLeftClick={goBack}
          rightIcon={Assets.icons.ic_post_menu_black}
          subRightIcon={'ic_save_post_black'}
        />
        <View marginT-40 marginH-24>
          <Text uppercase B14 c59>
            trip title
          </Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Give you trip title"
            placeholderTextColor={Colors.cd1}
            style={styles.inputTitle}
            multiline={true}
            numberOfLines={4}
            textAlignVertical={'top'}
            onFocus={() => {
              transY.value = height;
            }}
          />
        </View>
        <View marginT-40 marginH-24>
          <Text uppercase B14 c59>
            trip duration
          </Text>
          <Pressable
            onLayout={e => {
              e.target.measure((x, y, width, height, pageX, pageY) => {
                setTopCurrent(pageY);
              });
            }}
            onPress={onOpenCalendar}>
            {!!tripDuration ? (
              <Text M30 c35 marginT-16>
                {tripDuration}
              </Text>
            ) : (
              <Text M30 cd1 marginT-16>
                From…To
              </Text>
            )}
          </Pressable>
        </View>
        <View flex />
        <View center marginB-16>
          <BaseButton primary label="Next to Step 2/3" onPress={onGoStep2} />
        </View>
        {!!topCurrent && (
          <Animated.View
            style={[
              {
                width: width,
                height: height - topCurrent,
                position: 'absolute',
                top: topCurrent + getStatusBarHeight() + 20,
                zIndex: -1,
              },
              style,
            ]}>
            <Image
              source={Assets.icons.arr_up}
              style={{marginLeft: 48, marginTop: 4}}
            />
            <View height={2} backgroundColor={Colors.c04} />
            <View row paddingV-8 backgroundColor={Colors.cf7}>
              {day.map(name => (
                <View flex key={name} center>
                  <Text M14 color59 uppercase>
                    {name}
                  </Text>
                </View>
              ))}
            </View>
            <CalendarsList
              onChangeEndDate={setTo}
              onChangeStartDate={setFrom}
            />
          </Animated.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
});
const day = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
export default PublicTripStep1;

const styles = StyleSheet.create({
  inputTitle: {
    fontFamily: FONTS.medium,
    fontSize: 30,
    paddingLeft: 0,
    textAlign: 'left',
  },
});
