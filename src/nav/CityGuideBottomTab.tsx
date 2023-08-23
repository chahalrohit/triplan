import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from '@react-navigation/native';
import { Colors } from 'react-native-ui-lib';
import MyTabBar from 'components/TabBar';
import Routes, { Tabs } from 'config/Routes';
import CityGuideScreen from 'screens/CityGuildeScreen';
import BookmarkScreen from 'screens/BookmarkScreen';
import CityInfomationScreen from 'screens/CityInfomationScreen';
import SearchTravelGuideScreen from 'screens/SearchTravelGuideScreen';
import CityStack from './CityStack';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

const CityGuideBottomTab = () => {
    const route = useRoute();
    const { headerName } = route.params ?? '';
    return (
        <>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <Tab.Navigator
                initialRouteName={Routes.CityStack}
                tabBarOptions={{
                    activeTintColor: Colors.c04,
                    inactiveTintColor: Colors.c59,
                }}
                tabBar={props => <MyTabBar {...props} tabName={Tabs.CityGuideTab} />}
            >
                <Tab.Screen name={Routes.TravelGuide} component={CityGuideScreen} />
                <Tab.Screen name={Routes.CityStack} children={() => <CityStack headerName={headerName} />} />
                <Tab.Screen name={Routes.Information} component={CityInfomationScreen} />
                <Tab.Screen name={Routes.SearchTravelGuide} component={SearchTravelGuideScreen} />
                <Tab.Screen name={Routes.Bookmarks} component={BookmarkScreen} />
            </Tab.Navigator>
        </>
    )
}

export default CityGuideBottomTab;