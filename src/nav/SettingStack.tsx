import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from 'config/Routes';
import SettingScreen from 'screens/SettingScreen';
import UpdateProfileScreen from 'screens/UpdateProfileScreen';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const SettingStack = () => {
    return (
        <>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <Stack.Navigator
                initialRouteName={Routes.Setting}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={Routes.Setting}
                    component={SettingScreen}
                />
                <Stack.Screen
                    name={Routes.UpdateProfile}
                    component={UpdateProfileScreen}
                />
            </Stack.Navigator>
        </>
    )
}

export default SettingStack;