import React, {useCallback, useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Animated as _Animated,
  Platform,
} from 'react-native';
import {View, Colors, Image, Assets, Text} from 'react-native-ui-lib';
import NavBar from 'components/NavBar';
import {useNavigation} from '@react-navigation/native';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
  Callout,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {
  darkStyle,
  width,
  height,
  heightHeader,
} from 'config/scaleAccordingToDevice';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import ListDay from './components/ListDay';
import {ITEM_HEIGHT, CONTAINER} from './components/ListDay';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Routes from 'config/Routes';
import {GOOGLE_MAPS_APIKEY} from '../constant';

const DATA = [
  {
    day: 1,
    color: '#FE4365',
  },
  {
    day: 2,
    color: '#24DCB3',
  },
  {
    day: 3,
    color: '#3B5998',
  },
];

const DATA_ROUTE = [
  {
    des: {
      name: 'Havana Central Times Square',
      address: '44 W 63rd St, New York, NY 10023',
      lat: 21.04598953,
      lng: 105.81782593,
    },
    start: {
      name: 'Empire State Building',
      address: '44 W 63rd St, New York, NY 10023',
      lat: 21.02530911,
      lng: 105.81094048,
    },
    options: 5,
    color: '#FE4365',
  },
  {
    des: {
      name: 'Central Park',
      address: '44 W 63rd St, New York, NY 10023',
      lat: 21.01862731,
      lng: 105.80530977,
    },
    start: {
      name: 'Havana Central Times Square',
      address: '44 W 63rd St, New York, NY 10023',
      lat: 21.04598953,
      lng: 105.81782593,
    },
    options: 4,
    color: '#24DCB3',
  },
  {
    des: {
      name: 'The Empire Hotel',
      address: '44 W 63rd St, New York, NY 10023',
      lat: 21.02081248,
      lng: 105.80958679,
    },
    start: {
      name: 'Central Park',
      address: '44 W 63rd St, New York, NY 10023',
      lat: 21.01862731,
      lng: 105.80530977,
    },
    options: 2,
    color: '#3B5998',
  },
];

interface ICustomMarker {
  type: 'start' | 'end';
  coordinate: {latitude: number; longitude: number};
}

const TripRoutesScreen = () => {
  const [isOpenView, setIsOpenView] = useState<boolean>(false);
  const navigation = useNavigation();
  const widthAni = useSharedValue(width * 0.2);
  const offsetY = useRef(new _Animated.Value(0)).current;
  const [selectDay, setSelectDay] = useState<number>(0);
  const [coordinates, setCoordinates] = useState([
    {
      latitude: DATA_ROUTE[0].start.lat,
      longitude: DATA_ROUTE[0].start.lng,
    },
    {
      latitude: DATA_ROUTE[0].des.lat,
      longitude: DATA_ROUTE[0].des.lng,
    },
  ]);

  useEffect(() => {
    const coordinate = [
      {
        latitude: DATA_ROUTE[selectDay].start.lat,
        longitude: DATA_ROUTE[selectDay].start.lng,
      },
      {
        latitude: DATA_ROUTE[selectDay].des.lat,
        longitude: DATA_ROUTE[selectDay].des.lng,
      },
    ];
    setCoordinates(coordinate);
  }, [selectDay]);

  useEffect(() => {
    if (isOpenView) {
      widthAni.value = withTiming(width, {
        duration: 500,
      });
    } else {
      widthAni.value = withTiming(width * 0.2, {
        duration: 500,
      });
    }
  }, [isOpenView]);

  const onPressOpenRightSide = () => {
    setIsOpenView(!isOpenView);
  };

  const styleRightView = useAnimatedStyle(() => {
    return {
      width: widthAni.value,
      height: height - heightHeader,
    };
  });

  const onGoBack = useCallback(() => navigation.goBack(), []);
  const onNavigateRouteDetail = useCallback(
    () =>
      navigation.navigate(Routes.RouteDetail, {
        route: DATA_ROUTE[selectDay],
      }),
    [],
  );

  const CustomMarker = ({type, coordinate}: ICustomMarker) => (
    <>
      <Marker
        coordinate={coordinate}
        image={Assets.icons.ic_point}
        anchor={{x: 0.5, y: 0.5}}>
        {type === 'end' && (
          <Callout tooltip>
            <View
              paddingH-small
              paddingV-8
              backgroundColor={Colors.white}
              style={{borderRadius: 4, borderWidth: 1}}>
              <Text B14 c35>
                {DATA_ROUTE[selectDay].des.name}
              </Text>
              <Text M12 c83>
                {DATA_ROUTE[selectDay].des.address}
              </Text>
            </View>
            <View
              width={16}
              height={16}
              backgroundColor={Colors.white}
              style={{
                transform: [{rotate: '45deg'}],
                marginLeft: '50%',
                marginTop: -9,
              }}
            />
          </Callout>
        )}
      </Marker>
      {type === 'start' && (
        <Marker coordinate={coordinate} image={Assets.icons.ic_pin_on_map2} />
      )}
    </>
  );

  return (
    <View flex backgroundColor={Colors.white}>
      <NavBar title="Trip Routes" leftIcon="close" onLeftClick={onGoBack} />
      <View flex>
        <MapView
          provider={
            Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
          }
          style={styles.map}
          region={{
            latitude: 21.0302816,
            longitude: 105.815348,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          customMapStyle={darkStyle}>
          <CustomMarker type="start" coordinate={coordinates[0]} />
          <CustomMarker type="end" coordinate={coordinates[1]} />
          <Polyline
            coordinates={coordinates}
            strokeColor={DATA_ROUTE[selectDay].color}
            strokeColors={[DATA_ROUTE[selectDay].color]}
            strokeWidth={2}
          />
          <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="red"
          />
        </MapView>
      </View>
      <Animated.View style={[styles.rightView, styleRightView]}>
        <View width={width * 0.2}>
          <View flex-9>
            <ListDay
              style={{width: width * 0.2}}
              data={DATA}
              onSelectItem={setSelectDay}
              selectDay={selectDay}
            />
          </View>
          <View flex backgroundColor={Colors.cf15} center>
            <TouchableWithoutFeedback onPress={onPressOpenRightSide}>
              <Image
                source={
                  isOpenView
                    ? Assets.icons.ic_arr_open_map
                    : Assets.icons.ic_arr_open_direction
                }
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View
          flex
          paddingL-medium
          paddingT-medium
          backgroundColor={Colors.white}>
          <TouchableOpacity onPress={onNavigateRouteDetail}>
            <>
              <View row style={{flexWrap: 'wrap'}}>
                <Text B14 c04>
                  {DATA_ROUTE[selectDay].start.name}{' '}
                </Text>
                <Text M14 c35>
                  to{' '}
                </Text>
                <Text B14 c04>
                  {DATA_ROUTE[selectDay].des.name}{' '}
                </Text>
              </View>
              <Text M14 c59 marginT-8>
                {DATA_ROUTE[selectDay].options} travel options
              </Text>
              <View
                height={1}
                width={'100%'}
                marginT-medium
                backgroundColor={Colors.cef}></View>
            </>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default TripRoutesScreen;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  rightView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: Colors.cf7,
  },
  fakeList: {
    position: 'absolute',
    top: CONTAINER / 2 - ITEM_HEIGHT / 2 - 8,
    width: width * 0.2,
    height: ITEM_HEIGHT + 16,
  },
});
