import {useNavigation} from '@react-navigation/core';
import NavBar from 'components/NavBar';
import React, {useState, useEffect, useCallback} from 'react';
import {
  ScrollView,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Assets, Image, View, Colors, Text} from 'react-native-ui-lib';
import Geolocation, {
  AccuracyAndroid,
  AccuracyIOS,
} from 'react-native-geolocation-service';
import ItemNearPlace from './ItemNearPlace';
import SearchPlaceName from './SearchPlaceName';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import {darkStyle} from 'config/scaleAccordingToDevice';

interface GpsAccuracy {
  accuracy: Accuracy;
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
  distanceFilter: number;
}

interface Accuracy {
  android: AccuracyAndroid;
  ios: AccuracyIOS;
}

const AddPlace = React.memo(() => {
  const {goBack, addListener} = useNavigation();
  const currentLocation = {
    lat: 0,
    lng: 0,
  };

  let mapRegion = {
    lat: 21.0302816,
    lng: 105.815348,
  };

  const [region, setRegion] = useState(mapRegion);

  const gpsAccuracy: GpsAccuracy = {
    accuracy: {
      android: 'high',
      ios: 'best',
    },
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 10000,
    distanceFilter: 0,
  };

  useEffect(() => {
    const willFocusSubscription = addListener('focus', async () => {
      requestAuthorization();
    });

    return willFocusSubscription;
  }, []);

  const requestAuthorization = async () => {
    let status: string;
    if (Platform.OS === 'ios') {
      status = await Geolocation.requestAuthorization('whenInUse');
      if (status === 'granted') {
        getCurrentLocation();
      }
    } else {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (hasPermission) {
        console.log('click 1');

        getCurrentLocation();
      } else {
        console.log('click 2');

        status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (status === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        }
      }
    }
  };

  const getCurrentLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        currentLocation.lat = position?.coords?.latitude;
        currentLocation.lng = position?.coords?.longitude;
        mapRegion = currentLocation;
        setRegion(mapRegion);
      },
      error => {
        console.log(error);
      },
      gpsAccuracy,
    );
  };

  const onPressMap = useCallback(
    (e: {nativeEvent: {coordinate: {latitude: number; longitude: number}}}) => {
      setRegion({
        lat: e.nativeEvent.coordinate.latitude,
        lng: e.nativeEvent.coordinate.longitude,
      });
    },
    [region],
  );

  const renderMapView = useCallback(
    () => (
      <View flex-3 backgroundColor="black">
        <MapView
          provider={
            Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
          }
          style={styles.map}
          region={{
            latitude: region.lat,
            longitude: region.lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          customMapStyle={darkStyle}
          onPress={onPressMap}>
          <Marker
            coordinate={{
              latitude: region.lat,
              longitude: region.lng,
            }}
            image={Assets.icons.ic_pin_on_map2}></Marker>
        </MapView>
        <SearchPlaceName />
        <View absB width={48} style={{bottom: 24, zIndex: 99, right: 24}}>
          <TouchableOpacity onPress={requestAuthorization} activeOpacity={0.6}>
            <View
              width={48}
              height={48}
              backgroundColor="white"
              center
              style={{borderRadius: 24}}>
              <Image source={Assets.icons.ic_my_location} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    ),
    [region],
  );

  return (
    <View flex>
      <NavBar title="Add Place" leftIcon="back" onLeftClick={goBack} />
      {renderMapView()}
      <View flex-2>
        <View
          row
          paddingV-12
          paddingH-24
          backgroundColor={Colors.white}
          centerV>
          <Image source={Assets.icons.ic_pin_on_map_24} marginR-24 />
          <View flex>
            <Text M14 c59 marginB-4>
              Current location
            </Text>
            <Text M15 c35>
              {`${Number(region.lat).toFixed(4)};${Number(region.lng).toFixed(
                4,
              )}`}
            </Text>
          </View>
          <Text B14 c04>
            Select this place
          </Text>
        </View>
        <Text uppercase B14 c59 marginT-24 marginB-16 marginL-24>
          nearby places
        </Text>
        <ScrollView>
          <ItemNearPlace
            name="Central Park"
            des="5th Avenue, New York City, NY 10022"
          />
          <ItemNearPlace
            name="Delacorte Theater"
            des="5th Avenue, New York City, NY 10022"
          />
        </ScrollView>
      </View>
    </View>
  );
});
export default AddPlace;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
