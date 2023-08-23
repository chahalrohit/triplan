import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes, { Tabs } from 'config/Routes';
import { Colors } from "react-native-ui-lib";
import MyTabBar from 'components/TabBar';
import NewsFeedScreen from 'screens/NewsFeedScreen';
import MyProfileScreen from 'screens/MyProfileScreen';
import TravelGuideScreen from 'screens/TravelGuideScreen';
import CollectionScreen from 'screens/CollectionScreen';
import SearchTravelGuideScreen from 'screens/SearchTravelGuideScreen';

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={Routes.NewsFeed}
            tabBarOptions={{
                activeTintColor: Colors.c04,
                inactiveTintColor: Colors.c59,
            }}
            tabBar={props => <MyTabBar {...props} tabName={Tabs.MainTab} />}
        >
            <Tab.Screen name={Routes.NewsFeed} component={NewsFeedScreen} />
            <Tab.Screen name={Routes.Collection} component={CollectionScreen} />
            <Tab.Screen name={Routes.Search} component={SearchTravelGuideScreen} />
            <Tab.Screen name={Routes.Guide} component={TravelGuideScreen} />
            <Tab.Screen name={Routes.Profile} component={MyProfileScreen} />
        </Tab.Navigator>
    )
}

export default MainBottomTab;
