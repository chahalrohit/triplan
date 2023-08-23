import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from 'config/Routes';
import CityGuideScreen from 'screens/CityGuildeScreen';
import CityMap from 'screens/CityMap';
import CityListPlace from 'screens/CityListPlace';
import PlaceDetailScreen from 'screens/PlaceDetailScreen';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

interface Props {
    headerName: string;
}

const CityStack = ({ headerName }: Props) => {
    return (
        <>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <Stack.Navigator
                initialRouteName={Routes.City}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={Routes.City} children={() => <CityGuideScreen title={headerName} />} />
                <Stack.Screen name={Routes.CityMap} children={() => <CityMap title={headerName} />} />
                <Stack.Screen name={Routes.CityListPlace} component={CityListPlace} />
                <Stack.Screen name={Routes.PlaceDetail} component={PlaceDetailScreen} />
            </Stack.Navigator>
        </>
    )
};

export default CityStack;