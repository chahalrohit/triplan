import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from 'config/Routes';
import OnboardingStack from './OnboardingStack';
import MainBottomTab from './MainBottomTab';
import SettingStack from './SettingStack';
import NotificationScreen from 'screens/NotificationScreen';
import InboxListScreen from 'screens/InboxListScreen';
import FollowScreen from 'screens/FollowScreen';
import ChatScreen from 'screens/ChatScreen';
import CityGuideBottomTab from './CityGuideBottomTab';
import ExchangeMoneyScreen from 'screens/ExchangeMoneyScreen';
import WeatherScreen from 'screens/WeatherScreen';
import TransportScreen from 'screens/TransportScreen';
import FilterScreen from 'screens/FilterScreen';
import FindWayScreen from 'screens/FindWayScreen';
import MapScreen from 'screens/PlaceDetailScreen/MapScreen';
import TravelActivitiesScreen from 'screens/TravelActivitiesScreen';
import TravelActivitiesDetailScreen from 'screens/TravelActivitiesDetailScreen';
import SearchTravelResultScreen from 'screens/SearchTravelResult';
import PlaceToVisitScreen from 'screens/PlaceToVisitScreen';
import ReviewScreen from 'screens/ReviewScreen';
import ReviewCreateScreen from 'screens/ReviewCreateScreen';
import PublicTripStep1 from 'screens/PublicTrip/PublicTripStep1';
import PublicTripStep2 from 'screens/PublicTrip/PublicTripStep2';
import UploadTripCover from 'screens/UploadImageScreen/UploadTripCover';
import PublicTripStep3 from 'screens/PublicTrip/PublicTripStep3';
import WriteContent from 'screens/WriteContent';
import TripDetailScreen from 'screens/TripDetail';
import MyProfileScreen from 'screens/MyProfileScreen';
import TripCommentScreen from 'screens/TripDetail/TripComment';
import AddPlace from 'screens/AddPlace';
import HotelAroundScreen from 'screens/TripDetail/TripHotel/HotelAroundScreen';
import HotelList from 'screens/TripDetail/TripHotel/HotelList';
import Trip from 'screens/TripDetail/Trip';
import TripRoutesScreen from 'screens/TripDetail/TripRoutes';
import TripRouteDetail from 'screens/TripDetail/TripRouteDetail';
import ShareToFriendScreen from 'screens/PublicTrip/ShareToFriendScreen';
import PublishItemImageQuotes from 'screens/PublicTrip/PublistImageQuotes';

const Stack = createStackNavigator();

const RootStack = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
    LogBox.ignoreAllLogs();
    console.warn = function () {};
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          initialRouteName={Routes.Onboarding}>
          <Stack.Screen name={Routes.Onboarding} component={OnboardingStack} />
          <Stack.Screen name={Routes.MainBottomTab} component={MainBottomTab} />
          <Stack.Screen name={Routes.SettingStack} component={SettingStack} />
          <Stack.Screen
            name={Routes.Notification}
            component={NotificationScreen}
          />
          <Stack.Screen name={Routes.InboxList} component={InboxListScreen} />
          <Stack.Screen name={Routes.ChatBox} component={ChatScreen} />
          <Stack.Screen name={Routes.Follow} component={FollowScreen} />
          <Stack.Screen
            name={Routes.GuideDetailTab}
            component={CityGuideBottomTab}
          />
          <Stack.Screen
            name={Routes.ExchangeMoney}
            component={ExchangeMoneyScreen}
          />
          <Stack.Screen name={Routes.Weather} component={WeatherScreen} />
          <Stack.Screen name={Routes.Transport} component={TransportScreen} />
          <Stack.Screen name={Routes.Filter} component={FilterScreen} />
          <Stack.Screen name={Routes.Find} component={FindWayScreen} />
          <Stack.Screen name={Routes.Map} component={MapScreen} />
          <Stack.Screen
            name={Routes.TravelActivity}
            component={TravelActivitiesScreen}
          />
          <Stack.Screen
            name={Routes.TravelActivityDetail}
            component={TravelActivitiesDetailScreen}
          />
          <Stack.Screen
            name={Routes.SearchTravelResult}
            component={SearchTravelResultScreen}
          />
          <Stack.Screen
            name={Routes.PlaceToVisit}
            component={PlaceToVisitScreen}
          />
          <Stack.Screen name={Routes.ReviewScreen} component={ReviewScreen} />
          <Stack.Screen
            name={Routes.CreateReview}
            component={ReviewCreateScreen}
          />
          <Stack.Screen
            name={Routes.PublicTripStep1}
            component={PublicTripStep1}
          />
          <Stack.Screen
            name={Routes.PublicTripStep2}
            component={PublicTripStep2}
          />
          <Stack.Screen
            name={Routes.PublicTripStep3}
            component={PublicTripStep3}
          />
          <Stack.Screen
            name={Routes.UploadTripCover}
            component={UploadTripCover}
          />
          <Stack.Screen name={Routes.WriteContent} component={WriteContent} />
          <Stack.Screen name={Routes.AddPlace} component={AddPlace} />
          
          <Stack.Screen name={Routes.TripCover} component={TripDetailScreen} />
          <Stack.Screen name={Routes.TripDetail} component={Trip} options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
          }} />
          <Stack.Screen name={Routes.ProfileStack} component={MyProfileScreen} />
          <Stack.Screen name={Routes.TripComment} component={TripCommentScreen} />
          <Stack.Screen name={Routes.HotelAround} component={HotelAroundScreen} />
          <Stack.Screen name={Routes.HotelList} component={HotelList} />
          <Stack.Screen name={Routes.TripRoutes} component={TripRoutesScreen} />
          <Stack.Screen name={Routes.RouteDetail} component={TripRouteDetail} />
          <Stack.Screen name={Routes.ShareToFriend} component={ShareToFriendScreen} />
          <Stack.Screen name={Routes.ImageQuote} component={PublishItemImageQuotes} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootStack;
