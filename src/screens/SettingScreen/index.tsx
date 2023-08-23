import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { View, Text, Colors, Assets } from 'react-native-ui-lib'
import { useNavigation } from '@react-navigation/native'
import NavBar from 'components/NavBar'
import SettingItem from './SettingItem'
import Routes from 'config/Routes'

const SettingScreen = () => {
    const navigation = useNavigation();

    const onGoBack = () => navigation.goBack();
    const onNavigateUpdateProfile = () => navigation.navigate(Routes.UpdateProfile);

    return (
        <View flex>
            <NavBar title='Settings' leftIcon='back' onLeftClick={onGoBack} />
            <ScrollView style={{ flex: 1, backgroundColor: Colors.white }} showsVerticalScrollIndicator={false}>
                <View flex backgroundColor={Colors.cf7} marginB-60>
                    <View marginB-small>
                        <SettingItem onPress={onNavigateUpdateProfile} icon={Assets.icons.ic_update_profile} label='Update Profile' />
                        <SettingItem onPress={() => { }} icon={Assets.icons.ic_notification} label='Notification Settings' />
                        <SettingItem onPress={() => { }} icon={Assets.icons.ic_article_comment} label='Send Feedback' />
                        <SettingItem onPress={() => { }} icon={Assets.icons.ic_city_info} label='How is work?' />
                        <SettingItem onChangeSwitch={() => { }} icon={Assets.icons.ic_auto_trip} label='Auto create trip' isSwitch={true} />
                        <SettingItem onChangeSwitch={() => { }} icon={Assets.icons.ic_setting_faceid} label='Quick login use FaceID' isSwitch={true} />
                        <SettingItem onPress={() => { }} icon={Assets.icons.ic_clear_history} label='Clear search history' isArrow={false} />
                    </View>
                    <View>
                        <SettingItem onPress={() => { }} icon={Assets.icons.ic_term} label='Terms of Service' />
                        <SettingItem onPress={() => { }} icon={Assets.icons.ic_policy} label='Privacy Policy' />
                        <SettingItem onPress={() => { }} icon={Assets.icons.ic_update} label='Check For Update' isArrow={false} />
                    </View>
                </View>
                <View flex paddingB-small backgroundColor={Colors.white}>
                    <Text M14 c83 center>Triplan version 2.0.0.4</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({})
