import React from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { View, Colors, Image, Assets } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { useNavigation, useRoute } from '@react-navigation/native'
import BaseButton from 'components/BaseButton'
import Routes from 'config/Routes'
import { width, darkStyle } from 'config/scaleAccordingToDevice'
import MapView, { PROVIDER_GOOGLE, Marker, PROVIDER_DEFAULT } from 'react-native-maps'

const MapScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { selectedPlace } = route?.params;

    const onGoBack = () => navigation.goBack();
    const onNavigateFindWay = () => navigation.navigate(Routes.Find);

    return (
        <View flex backgroundColor={Colors.white}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title='Map' leftIcon='back' onLeftClick={onGoBack} />
            <View flex backgroundColor={Colors.black}>
                <MapView
                    provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                    style={styles.map}
                    region={{
                        latitude: selectedPlace.lat,
                        longitude: selectedPlace.lng,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                    customMapStyle={darkStyle}
                >

                    <Marker
                        coordinate={{
                            latitude: selectedPlace.lat,
                            longitude: selectedPlace.lng,
                        }}
                    >
                        <Image
                            source={Assets.icons[selectedPlace.icon]}
                            style={styles.markerIcon}
                            resizeMode="contain"
                        />
                    </Marker>

                </MapView>
                <View absB center width={width} style={{ bottom: 16 }}>
                    <BaseButton primary label='How to get there' onPress={onNavigateFindWay} />
                </View>
            </View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    markerIcon: {
        width: 45,
        height: 45
    }
})
