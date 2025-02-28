import React, {useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {View, Text, Colors, Assets, Image, Avatar} from 'react-native-ui-lib';
import {SwipeListView} from 'react-native-swipe-list-view';
import NavBar from 'components/NavBar';
import {useNavigation} from '@react-navigation/native';
import {width} from 'config/scaleAccordingToDevice';

const DATA = [
  {
    name: 'Claudia Blake',
    comment: 'Omg those lights!',
    time: '2 hours ago',
    reply: '1 Reply',
    like: '2',
    isLike: false,
  },
  {
    name: 'Cynthia Lamb',
    comment:
      'Nailed it !! Each and every line effortlessly hooked me in. Almost read this trip thrice now. Superb Job !! ',
    time: '5 hours ago',
    reply: '',
    like: '10',
    isLike: true,
  },
  {
    name: 'Rosa Richards',
    comment:
      'Enjoyable read :-) Thank you fir taking all those amazing pictures that make the narrative so much interesting. Good work! ',
    time: '2 hours ago',
    reply: '1 Reply',
    like: '2',
    isLike: false,
  },
  {
    name: 'Callie Alvarez',
    comment: `Beautifully written! I don't know why you were nervous in the first place since your English seems spot on.`,
    time: '2 hours ago',
    reply: '1 Reply',
    like: '1',
    isLike: false,
  },
  {
    name: 'Mayme Williamson',
    comment: 'Omg those lights!',
    time: '2 hours ago',
    reply: '1 Reply',
    like: '2',
    isLike: false,
  },
  {
    name: 'Claudia Blake',
    comment: 'Omg those lights!',
    time: '2 hours ago',
    reply: '1 Reply',
    like: '2',
    isLike: false,
  },
];

const TripCommentScreen = () => {
  let time: any | null = null;
  const navigation = useNavigation();
  const [isHideDelect, setIsHideDelect] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      clearTimeout(time);
    };
  }, []);

  const onGoBack = useCallback(() => navigation.goBack(), []);

  const renderChatInput = () => {
    return (
      <View
        absB
        width={width}
        paddingH-medium
        row
        centerV
        height={60}
        style={styles.wrapper}>
        <View flex marginR-small>
          <TextInput
            placeholder="Write a review"
            style={styles.chatInput}
            placeholderTextColor={Colors.cd1}
            onChangeText={text => {}}
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Image source={Assets.icons.ic_send} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}: {item: any}) => (
    <View paddingV-small paddingH-medium backgroundColor={Colors.white} row>
      <Avatar source={Assets.images.avatar} size={32} />
      <View marginL-small flex>
        <View spread row marginB-8 centerV>
          <Text B14 c04>
            {item.name}
          </Text>
          <View row center>
            <Text M12 c35>
              {item.like}{' '}
            </Text>
            <Image
              source={
                item.isLike ? Assets.icons.ic_like_active : Assets.icons.ic_like
              }
            />
          </View>
        </View>
        <Text M14 c35>
          {item.comment}
        </Text>
        <View row>
          <Text M12 c83 marginR-small>
            {item.time}
          </Text>
          {item.reply !== '' && (
            <Text M12 c83 marginR-small>
              {item.reply}
            </Text>
          )}
          <Text M12 c83>
            Reply
          </Text>
        </View>
      </View>
    </View>
  );

  const renderHiddenItem = (data: any, rowMap: any) =>
    isHideDelect ? null : (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => {
            setIsHideDelect(true);
            time = setTimeout(() => {
              setIsHideDelect(false);
            }, 300);
          }}>
          <Image source={Assets.icons.ic_reply} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => {
            setIsHideDelect(true);
            time = setTimeout(() => {
              setIsHideDelect(false);
            }, 300);
          }}>
          <Image source={Assets.icons.ic_report} />
        </TouchableOpacity>
      </View>
    );

  const renderContent = () => {
    return (
      <SwipeListView
        disableRightSwipe
        data={DATA}
        extraData={DATA}
        renderItem={renderItem}
        keyExtractor={(_, idx) => `item_${idx}`}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-150}
        useNativeDriver={false}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        recalculateHiddenLayout={true}
        style={{marginBottom: 60}}
      />
    );
  };

  return (
    <View flex backgroundColor={Colors.white}>
      <NavBar leftIcon="back" onLeftClick={onGoBack} title={'Comments - 145'} />
      <KeyboardAvoidingView style={{flex: 1}}>
        {renderContent()}
        {renderChatInput()}
      </KeyboardAvoidingView>
    </View>
  );
};

export default TripCommentScreen;

const styles = StyleSheet.create({
  chatInput: {
    height: 40,
    backgroundColor: Colors.white,
    color: Colors.black,
  },
  wrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    backgroundColor: 'white',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: Colors.cfe,
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: Colors.cfe,
    right: 0,
  },
});
