import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
  Platform,
} from 'react-native';
import {View, Text, Colors, Image, Assets} from 'react-native-ui-lib';
import {height, width, shadow, darkStyle} from 'config/scaleAccordingToDevice';
import {useNavigation} from '@react-navigation/native';
import Routes from 'config/Routes';
import GuideBtn from 'components/GuideBtn';
import NavBar from 'components/NavBar';
import {
  ICSee,
  ICEat,
  ICDrink,
  ICEntertaiment,
  ICClub,
  ICSleep,
  ICShopping,
  ICMedical,
  ICBank,
  ICTransport,
  ICExchange,
  ICWeather,
} from '../../assets/images';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import {DATA_MAP} from './constant';

interface Trip {
  thumbnail: any;
  title: string;
  comments: string;
  views: string;
}

const DATA: Trip[] = [
  {
    thumbnail: require(''../../assets/images/thumbnail_3.png'),
    title: '‘Boston City’ in a Day – A Walking Tour',
    comments: '243',
    views: '15.2K',
  },
  {
    thumbnail: require(''../../assets/images/thumbnail_2.png'),
    title: 'One Day in Washington and Boston',
    comments: '243',
    views: '15.6K',
  },
];

interface Props {
  title: string;
}

const Markers = React.memo(({markers}: any) => {
  return markers.map((item: any, index: number) => (
    <Marker
      key={index}
      coordinate={{
        latitude: item.lat,
        longitude: item.lng,
      }}
      tracksViewChanges={false}>
      <View
        height={10}
        width={10}
        style={[styles.marker, {backgroundColor: item.backgroundColor}]}
      />
    </Marker>
  ));
});

const CityGuideScreen: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();

  const onNavigateExchangeMoney = () =>
    navigation.navigate(Routes.ExchangeMoney);
  const onNavigateWeatherScreen = () => navigation.navigate(Routes.Weather);
  const onNavigateTransportScreen = () => navigation.navigate(Routes.Transport);
  const onNavigateCityMapScreen = () => navigation.navigate(Routes.CityMap);

  const renderItem = ({item}: {item: Trip}) => {
    return (
      <View
        flex
        margin-8
        width={width * 0.85}
        backgroundColor={Colors.white}
        style={{borderRadius: 4, ...shadow}}>
        <View flex>
          <Image source={item.thumbnail} style={styles.thumbnail} />
          <View absR>
            <Image
              source={Assets.icons.ic_wishlist}
              style={{marginTop: 18, marginRight: 17}}
            />
          </View>
        </View>
        <View flex paddingH-small paddingB-small paddingT-8>
          <Text B16 c35 marginB-8 numberOfLines={1}>
            {item.title}
          </Text>
          <View row centerV>
            <Text c83 M13>
              {item.comments} comments{' '}
            </Text>
            <Text c83 marginH-8>
              *
            </Text>
            <Text c83 M13>
              {item.views} views{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View center flex backgroundColor={Colors.cf2}>
      <NavBar title={title} />
      <ScrollView
        style={{flex: 1, width: width}}
        showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={onNavigateCityMapScreen}>
          <View height={height * 0.24}>
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
              <Markers markers={DATA_MAP} />
            </MapView>
          </View>
        </TouchableWithoutFeedback>
        <View padding-medium flex>
          <Text B14 c59 uppercase>
            Place Collections
          </Text>
          <View spread marginT-small style={styles.Grid}>
            <GuideBtn label="See" icon={ICSee} />
            <GuideBtn label="Eat" icon={ICEat} />
            <GuideBtn label="Drink" icon={ICDrink} />
            <GuideBtn label="Play" icon={ICEntertaiment} />
            <GuideBtn label="Nightclub" icon={ICClub} />
            <GuideBtn label="Sleep" icon={ICSleep} />
            <GuideBtn label="Shopping" icon={ICShopping} />
            <GuideBtn label="Medical" icon={ICMedical} />
            <GuideBtn label="Bank" icon={ICBank} />
          </View>
        </View>
        <View padding-medium flex marginB-medium>
          <Text B14 c59 uppercase>
            USEFUL INFOMATION
          </Text>
          <View spread marginT-small style={styles.Grid}>
            <GuideBtn
              label="Transport"
              icon={ICTransport}
              onPress={onNavigateTransportScreen}
            />
            <GuideBtn
              label="Exchange"
              icon={ICExchange}
              onPress={onNavigateExchangeMoney}
            />
            <GuideBtn
              label="Weather"
              icon={ICWeather}
              onPress={onNavigateWeatherScreen}
            />
          </View>
        </View>
        <View
          paddingT-32
          paddingB-small
          marginB-small
          paddingL-8
          backgroundColor={Colors.white}>
          <Text B16 c35 uppercase marginL-small marginB-8>
            Top Trips
          </Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            extraData={DATA}
            keyExtractor={(_, idx) => `item_${idx}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View row flex right marginT-32 paddingR-18>
            <Text marginR-10 B13 c04>
              SHOW ALL
            </Text>
            <Image source={Assets.icons.ic_arr_right} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CityGuideScreen;

const styles = StyleSheet.create({
  Grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  thumbnail: {
    width: '100%',
    height: height * 0.22,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {borderRadius: 5, borderColor: Colors.white, borderWidth: 1},
});
