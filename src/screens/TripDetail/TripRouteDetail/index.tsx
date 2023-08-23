import React, { useState, useCallback } from 'react'
import { StyleSheet, FlatList, ScrollView, Platform } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline, PROVIDER_DEFAULT } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { height, darkStyle } from 'config/scaleAccordingToDevice'
import RouteItem from './RouteItem'
import { GOOGLE_MAPS_APIKEY } from '../constant'
import ROUTES from './constant'
import Route from './components/Route'

const DATA = [
    {
        type: 'Subway',
        icon: 'ic_train',
        price: '$3',
        duration: '7 mins'
    },
    {
        type: 'Line 2 subway',
        icon: 'ic_train',
        price: '$3',
        duration: '15 mins'
    },
    {
        type: 'Taxi',
        icon: 'ic_taxi',
        price: '$9 -$12',
        duration: '2 mins'
    },
    {
        type: 'Walk',
        icon: 'ic_walk',
        price: '',
        duration: '14 mins'
    },
];

interface IRoute {
    type: string,
    icon: string,
    price: string,
    duration: string,
}

const TripRouteDetail = () => {
    const navigation = useNavigation();
    const routes = useRoute();
    const { route } = routes?.params ?? { route: {} }
    const [title, setTitle] = useState<string>('Trip Routes');
    const [selectedRoute, setSelectedRoute] = useState<IRoute | null>(null);
    const [coordinates] = useState([
        {
            latitude: 21.02081248,
            longitude: 105.80958679,
        },
        {
            latitude: 21.04598953,
            longitude: 105.81782593,
        },
    ]);


    const onHandleLeftClick = useCallback(() => {
        if (title === 'Trip Routes') {
            navigation.goBack();
        } else {
            setTitle('Trip Routes');
            setSelectedRoute(null);
        }
    }, [title]);

    const onPress = (item: any) => {
        setTitle(item.type);
        setSelectedRoute(item)
    }

    const renderGuide = useCallback(() => (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View row padding-medium>
                <View flex marginT-10>
                    {
                        ROUTES.map((route: any, idx: number) => (
                            <Route {...route} key={idx} />
                        ))
                    }
                </View>
                <View flex-10 paddingL-medium>
                    {
                        ROUTES.map((route: any, idx: number) => (
                            <View height={88} backgroundColor='white' key={idx}>
                                <View centerV row spread>
                                    <Text B16 c35>{route.name}</Text>
                                    <Text B14 cfe>{route.price}</Text>
                                </View>
                                <Text M14 c59>{route.description}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    ), [])

    return (
        <View flex>
            <NavBar title={title} leftIcon='back' onLeftClick={onHandleLeftClick} />
            <View height={height * 0.3} backgroundColor='black'>
                <MapView
                    provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                    style={styles.map}
                    region={{
                        latitude: 21.0302816,
                        longitude: 105.815348,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                    customMapStyle={darkStyle}
                >
                    {
                        selectedRoute &&
                        <>
                            <Marker coordinate={coordinates[0]} image={Assets.icons.ic_pin} anchor={{ x: 0.5, y: 0.5 }} />
                            <Marker coordinate={coordinates[1]} image={Assets.icons.ic_pin} anchor={{ x: 0.5, y: 0.5 }} />
                            <Polyline
                                coordinates={coordinates}
                                strokeColor={route.color}
                                strokeColors={[route.color]}
                                strokeWidth={2}
                            />
                            <MapViewDirections
                                origin={coordinates[0]}
                                destination={coordinates[1]}
                                apikey={GOOGLE_MAPS_APIKEY}
                                strokeWidth={4}
                                strokeColor="red"
                            />
                        </>
                    }
                </MapView>
            </View>
            <View paddingV-small paddingH-medium>
                <Text B14 c04 marginB-8>{route?.start?.name ?? ''} <Text M14 c35>to </Text><Text B14 c04>{route?.des?.name ?? ''} </Text></Text>
                {
                    selectedRoute !== null
                        ? <View row spread>
                            <Text M14 c35>{selectedRoute?.duration ?? ''}</Text>
                            <Text B14 cfe>{selectedRoute?.price ?? ''}</Text>
                        </View>
                        : <Text M14 c59 marginT-8>Showing top {route?.options ?? 0} travel options</Text>
                }
            </View>
            <View flex backgroundColor={Colors.white}>
                {
                    selectedRoute !== null
                        ? renderGuide()
                        : <FlatList
                            data={DATA}
                            renderItem={({ item }) => <RouteItem {...item} onPressItem={() => onPress(item)} />}
                            keyExtractor={(_, idx) => `item_${idx}`}
                            extraData={DATA}
                            showsVerticalScrollIndicator={false}
                        />
                }
            </View>
        </View>
    )
}

export default TripRouteDetail

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
