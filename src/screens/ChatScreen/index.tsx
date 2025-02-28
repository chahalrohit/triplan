import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  StatusBar,
} from 'react-native';
import {View, Image, Colors, Assets} from 'react-native-ui-lib';
import {useNavigation, useRoute} from '@react-navigation/native';
import NavBar from 'components/NavBar';
import {width, shadow} from 'config/scaleAccordingToDevice';
import Message, {MESSAGE_TYPES, MessageComponentDataType} from './Message';

const DATA = [
  {
    type: MESSAGE_TYPES.SENDER,
    message: "It's going well! How about you?",
    avatar: require('../../assets/images/img_avatar_5.png'),
  },
  {
    type: MESSAGE_TYPES.SENDER,
    message: 'What do you do for a living?',
    avatar: require('../../assets/images/img_avatar_5.png'),
  },
  {
    type: MESSAGE_TYPES.RECEIVER,
    message: "Hello, My name's Agnes.\nNice to meet you!",
    avatar: require('../../assets/images/img_avatar.png'),
  },
  {
    type: MESSAGE_TYPES.RECEIVER,
    message: "Hello, My name's Agnes.\nNice to meet you!",
    avatar: require('../../assets/images/img_avatar.png'),
  },
];

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {sender} = route.params ?? '';

  const onGoBack = () => navigation.goBack();

  const renderMessage = ({
    item: message,
    index,
  }: {
    item: MessageComponentDataType;
    index: number;
  }) => {
    const prevIndex = index - 1 < 0 ? 0 : index - 1;
    return (
      <Message
        message={message}
        isSame={index === 0 ? false : message.type === DATA[prevIndex].type}
      />
    );
  };

  const renderChatContent = () => {
    return (
      <View flex paddingB-70 bottom>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          inverted={true}
          renderItem={renderMessage}
          data={DATA}
        />
      </View>
    );
  };

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
            placeholder="Write a message"
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

  return (
    <View flex backgroundColor={Colors.white}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavBar
        title={sender}
        leftIcon="back"
        onLeftClick={onGoBack}
        rightIcon={Assets.icons.ic_post_menu_black}
      />
      <KeyboardAvoidingView style={{flex: 1}}>
        {renderChatContent()}
        {renderChatInput()}
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatScreen;

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
});
