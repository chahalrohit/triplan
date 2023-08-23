import React, { Props } from 'react';
import { StyleSheet, FlatList, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { View, Text, Colors, Avatar, Assets } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import NavBar from 'components/NavBar';
import DATA, { Inbox } from './data';
import BaseButton from 'components/BaseButton';
import Routes from 'config/Routes';

export interface InboxItemProps extends Inbox {
    onPressNav: (user: string) => void,
}

const InboxItem: React.FC<InboxItemProps> = ({
    user,
    comment,
    time,
    avatar,
    isNotRead,
    countInbox,
    onPressNav
}) => {

    const onPressItem = () => {
        onPressNav(user);
    }

    return (
        <TouchableWithoutFeedback onPress={onPressItem}>
            <View paddingV-small backgroundColor={isNotRead ? Colors.cf7 : Colors.white}>
                <View row marginB-8>
                    <View flex center>
                        <Avatar source={avatar} size={48} />
                    </View>
                    <View flex-4 >
                        <View row marginB-8 paddingR-medium spread>
                            <Text B14 c35>{`${user}`} {countInbox && `(${countInbox})`}</Text>
                            <Text M14 c83>{time}</Text>
                        </View>
                        <Text M14 c35>{comment}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const InboxListScreen = () => {
    const navigation = useNavigation();

    const onGoBack = () => navigation.goBack();
    const onNavigateChat = (sender: string) => navigation.navigate(Routes.ChatBox, {
        sender
    })
    const renderItemInbox = ({ item }: { item: Inbox }) => {
        return (
            <InboxItem {...item} onPressNav={onNavigateChat}/>
        )
    }

    return (
        <View flex backgroundColor={Colors.white}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title='Inbox' leftIcon='back' onLeftClick={onGoBack} />
            <View flex>
                <FlatList
                    data={DATA}
                    renderItem={renderItemInbox}
                    keyExtractor={(_, idx) => `item_${idx}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View absB style={{ alignSelf: 'center', bottom: 34 }}>
                <BaseButton primary label='new message' onPress={() => { }} />
            </View>
        </View>
    )
}

export default InboxListScreen

const styles = StyleSheet.create({})
