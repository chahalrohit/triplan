import React from 'react';
import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import {View, Text, Colors, Image, Assets} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import NavBar from '../../components/NavBar';
import {ICWeatherSun, ICAir, ICUmbrella, ICWind} from '../../assets/images';

const DATA = [
  {
    date: 'WE',
    temperature: '84°',
    icon: 'ic_cloudly_fog',
  },
  {
    date: 'TH',
    temperature: '65°',
    icon: 'ic_weather',
  },
  {
    date: 'FR',
    temperature: '74°',
    icon: 'ic_storm',
  },
  {
    date: 'SA',
    temperature: '82°',
    icon: 'ic_strong_wind',
  },
  {
    date: 'SU',
    temperature: '78°',
    icon: 'ic_cloudy',
  },
  {
    date: 'MO',
    temperature: '69°',
    icon: 'ic_morning',
  },
  {
    date: 'TU',
    temperature: '72°',
    icon: 'ic_fog',
  },
];

const WeatherScreen = () => {
  const navigation = useNavigation();

  const onGoBack = () => navigation.goBack();

  const renderWeather = (item: any, idx: number) => (
    <View flex centerH key={idx}>
      <Text M14 c59>
        {item.date}
      </Text>
      <Image marginV-medium source={Assets.icons[item.icon]} />
      <Text M16 c35>
        {item.temperature}
      </Text>
    </View>
  );

  return (
    <View flex backgroundColor={Colors.white}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavBar title="Weather" leftIcon="close" onLeftClick={onGoBack} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex: 1}}>
        <View flex centerV paddingH-medium>
          <Text B14 c35>
            Boston, MA
          </Text>
          <Text M14 c59>
            as of 10:29 am EDT, Apr 27, 2018
          </Text>
        </View>
        <View flex row paddingH-medium>
          <View flex bottom>
            <ICWeatherSun />
          </View>
          <View flex-2 row bottom style={{justifyContent: 'space-around'}}>
            <View row>
              <ICAir />
              <Text M14 c35 marginL-8>
                20%
              </Text>
            </View>
            <View row>
              <ICWind />
              <Text M14 c35 marginL-8>
                4km/h
              </Text>
            </View>
            <View row>
              <ICUmbrella />
              <Text M14 c35 marginL-8>
                26%
              </Text>
            </View>
          </View>
        </View>
        <View flex-3 centerV row paddingH-medium>
          <View flex left>
            <View row>
              <View flex row>
                <Text M100 c35>
                  57
                </Text>
                <View row marginT-24>
                  <Text B20 c35 marginH-4>
                    o
                  </Text>
                  <Text M30 c35>
                    F
                  </Text>
                </View>
              </View>
            </View>
            <Text M30 c35 center>
              Rain
            </Text>
          </View>
          <View flex>
            <Text B14 c83 marginV-4>
              feels like 51°
            </Text>
            <Text B14 c83 marginV-4>
              H 57° / L 50°
            </Text>
            <Text B14 c83 marginV-4>
              UV Index 1 of 10
            </Text>
          </View>
        </View>
        <View row flex-3>
          {DATA.map((item, idx) => renderWeather(item, idx))}
        </View>
      </ScrollView>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({});
