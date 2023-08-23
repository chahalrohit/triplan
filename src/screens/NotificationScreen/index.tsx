import React from 'react';
import { StyleSheet, FlatList, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Colors, Assets, Avatar } from 'react-native-ui-lib';
import NavBar from 'components/NavBar';
import DATA from './data';

export interface NotificationItemProps {
    user: string,
    action: string,
    comment?: string,
    time: string,
    avatar: any,
    isNotRead: boolean,
}

const NotificationItem: React.FC<NotificationItemProps> = ({
    user,
    action,
    comment,
    time,
    avatar,
    isNotRead
}) => {
    return (
        <View paddingV-small backgroundColor={isNotRead ? Colors.cf7 : Colors.white}>
            <View row marginB-8>
                <View flex centerH top row>
                    <View width={4} height={4} marginT-14 marginR-10 backgroundColor={isNotRead ? Colors.cfe : 'transparent'} />
                    <Avatar source={avatar} size={32} />
                </View>
                <View flex-5 >
                    <View row marginB-8>
                        <Text B14 c35>{user} </Text>
                        <Text M14 c35>{action}</Text>
                    </View>
                    {comment && <Text M14 c35 marginB-8>{comment}</Text>}
                    <Text M12 c83>{time}</Text>
                </View>
            </View>
        </View>
    )
}

const NotificationScreen = () => {
    const navigation = useNavigation();

    const onGoBack = () => navigation.goBack();
    const renderItemNoti = ({ item }: { item: NotificationItemProps }) => {
        return (
            <NotificationItem {...item} />
        )
    }

    return (
        <View flex backgroundColor={Colors.white}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title='Notifications' leftIcon='back' onLeftClick={onGoBack} rightIcon={Assets.icons.ic_post_menu_black} />
            <View flex>
                <FlatList
                    data={DATA}
                    renderItem={renderItemNoti}
                    keyExtractor={(_, idx) => `item_${idx}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default NotificationScreen;

const styles = StyleSheet.create({})
