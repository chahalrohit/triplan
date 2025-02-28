import React, {useCallback} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Platform,
} from 'react-native';
import {View, Text, Colors, Assets, Carousel, Image} from 'react-native-ui-lib';
import NavBar from 'components/NavBar';
import {useNavigation, useRoute} from '@react-navigation/native';
import {width, height, darkStyle} from 'config/scaleAccordingToDevice';
import {description, FACILITIES, DATA, DATA_CAROUSEL} from './data';
import {BookmarkWhite} from '../../assets/images';
import Routes from 'config/Routes';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  PROVIDER_DEFAULT,
} from 'react-native-maps';
import Swiper from 'react-native-swiper';

const PlaceDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {title, selectedPlace} = route?.params;

  const onGoBack = useCallback(() => navigation.goBack(), []);
  const onNavigateMap = useCallback(
    () =>
      navigation.navigate(Routes.Map, {
        selectedPlace: selectedPlace,
      }),
    [],
  );

  const renderDescription = useCallback(
    () => (
      <View padding-medium marginB-16 backgroundColor={Colors.white}>
        <View row centerV marginB-18>
          <View row marginR-small>
            <Text M13 c83>
              Hotel
            </Text>
            <View center marginH-8>
              <View
                width={2}
                height={2}
                style={{borderRadius: 1}}
                backgroundColor={Colors.c83}
              />
            </View>
            <Text M13 c83>
              $$$
            </Text>
          </View>
          <View paddingV-4 paddingH-8 backgroundColor={Colors.cf15}>
            <Text B10 white uppercase>
              Top Choice
            </Text>
          </View>
        </View>
        <Text M30 c35>
          {title}
        </Text>
        <Text M18 c35 marginV-40>
          Stay in the heart of Boston!
        </Text>
        <View height={2} width={32} backgroundColor={Colors.cf15} marginB-32 />
        <Text D14R c35 marginB-40>
          {description}
        </Text>
      </View>
    ),
    [],
  );

  const renderInfo = useCallback(
    () => (
      <View paddingH-medium paddingT-32>
        <Text B16 c35 uppercase marginB-32>
          Essential Infomation
        </Text>
        <Text B14 c59 uppercase marginB-medium>
          Location and Contact
        </Text>
        <View row marginB-medium centerV>
          <Image source={Assets.icons.ic_pin_16} />
          <Text M14 c35 marginL-medium>
            70 Rowes Wharf, Waterfront, Boston, MA
          </Text>
        </View>
        <View row marginB-medium centerV>
          <Image source={Assets.icons.ic_email_16} />
          <Text M14 c04 marginL-medium>
            concierge@bhh.com
          </Text>
        </View>
        <View row marginB-medium centerV>
          <Image source={Assets.icons.ic_phone_number} />
          <Text M14 c35 marginL-medium>
            +1 617-439-7000
          </Text>
        </View>
        <View row marginB-medium centerV>
          <Image source={Assets.icons.ic_web_16} />
          <Text M14 c04 marginL-medium>
            www.bhh.com
          </Text>
        </View>
      </View>
    ),
    [],
  );

  const renderFacilitiesItem = (item: any, idx: number) => (
    <View
      key={`${item.name}_${idx}`}
      row
      centerV
      marginB-medium
      width={(width - 48) * 0.4}>
      <Image source={Assets.icons[item.icon]} />
      <Text B14 c59 marginL-small style={{flex: 1, flexWrap: 'wrap'}}>
        {item.name}
      </Text>
    </View>
  );

  const renderFacilities = () => (
    <View paddingH-medium paddingT-32>
      <Text B14 c59 uppercase marginB-medium>
        Most popular facilities
      </Text>
      <View style={styles.Grid} spread>
        {FACILITIES.map(renderFacilitiesItem)}
      </View>
    </View>
  );

  const renderRelativeInfo = useCallback(
    () => (
      <View marginB-16 backgroundColor={Colors.white}>
        {renderInfo()}
        <TouchableWithoutFeedback onPress={onNavigateMap}>
          <View height={height * 0.24} backgroundColor={Colors.black}>
            <MapView
              provider={
                Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
              }
              style={styles.map}
              region={{
                latitude: selectedPlace.lat,
                longitude: selectedPlace.lng,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
              customMapStyle={darkStyle}>
              <Marker
                coordinate={{
                  latitude: selectedPlace.lat,
                  longitude: selectedPlace.lng,
                }}>
                <Image
                  source={Assets.icons[selectedPlace.icon]}
                  style={styles.markerIcon}
                  resizeMode="contain"
                />
              </Marker>
            </MapView>
          </View>
        </TouchableWithoutFeedback>
        {renderFacilities()}
        <View
          center
          paddingV-small
          style={{borderTopColor: Colors.cef, borderTopWidth: 1}}>
          <Text M14 c83>
            Report Issue
          </Text>
        </View>
      </View>
    ),
    [],
  );

  const renderNearBy = useCallback(
    () => (
      <View backgroundColor={Colors.white} marginB-16 paddingT-32>
        <View paddingH-medium>
          <Text B16 c35 uppercase marginB-medium>
            Near this place
          </Text>
        </View>
        <View>
          {DATA.map((item, idx) => (
            <View
              key={`${item.name}_${idx}`}
              paddingV-small
              paddingH-medium
              backgroundColor={Colors.white}
              style={{borderBottomColor: Colors.cef, borderBottomWidth: 1}}>
              <Text B16 c35>
                {item.name}
              </Text>
              <View row marginT-8>
                <Text M13 c83>
                  {item.type1}
                </Text>
                <View center marginH-8>
                  <View
                    width={2}
                    height={2}
                    style={{borderRadius: 1}}
                    backgroundColor={Colors.c83}
                  />
                </View>
                <Text M13 c83>
                  $$$
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    ),
    [],
  );

  return (
    <View flex backgroundColor={Colors.white}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View height={height * 0.4}>
          <Swiper
            loop={false}
            showsButtons={false}
            dot={<DotIndicator inactive color={'transparent'} />}
            activeDot={<DotIndicator color={Colors.white} />}
            paginationStyle={styles.dotIndicatorPosition}>
            {DATA_CAROUSEL.map((item, idx) => {
              return (
                <ImageBackground
                  key={idx}
                  source={Assets.images[item.background]}
                  style={styles.image}></ImageBackground>
              );
            })}
          </Swiper>
        </View>
        <NavBar
          leftIcon="back"
          onLeftClick={onGoBack}
          iconColor={Colors.white}
          rightIcon={Assets.icons.ic_article_share}
          style={styles.header}
        />
        <View flex backgroundColor={Colors.cf7}>
          {renderDescription()}
          {renderRelativeInfo()}
          {renderNearBy()}
        </View>
      </ScrollView>
      <View absB style={{alignSelf: 'flex-end'}}>
        <TouchableOpacity onPress={() => {}}>
          <View
            row
            width={48}
            height={48}
            center
            backgroundColor={Colors.c04}
            style={styles.btnBookmark}>
            <BookmarkWhite />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DotIndicator = ({
  color,
  inactive,
  inactiveColor,
}: {
  color: string;
  inactive?: boolean;
  inactiveColor?: string;
}) => {
  if (inactive)
    return (
      <View
        style={[
          {
            borderWidth: 1,
            borderColor: '#E6E9EE',
            opacity: 0.5,
            backgroundColor: inactiveColor,
            width: 6,
            height: 6,
            borderRadius: 3,
            marginHorizontal: 2,
          },
        ]}
      />
    );
  return <View style={[{backgroundColor: color}, styles.dotIndicator]} />;
};
export default PlaceDetailScreen;

const styles = StyleSheet.create({
  loopCarousel: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: width,
  },
  Grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btnBookmark: {
    borderRadius: 24,
    right: 24,
    bottom: 24,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerIcon: {
    width: 45,
    height: 45,
  },
  dotIndicatorPosition: {
    bottom: 16,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotIndicator: {
    width: 8,
    height: 8,
    marginHorizontal: 2,
    borderRadius: 4,
  },
});
