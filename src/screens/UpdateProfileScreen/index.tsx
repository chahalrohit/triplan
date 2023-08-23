import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {View, Text, Colors, Image, Assets} from 'react-native-ui-lib';
import NavBar from 'components/NavBar';
import {useNavigation} from '@react-navigation/native';
import InputText from 'components/InputText';
import BaseButton from 'components/BaseButton';

const USER_INFOMATION = {
  name: 'Agnes Ingram',
  email: 'agnes_ingram@gmail.com',
  address: 'New York, NY, USA',
  location: 'Current Location',
  description:
    'Fashion photographer currently based in Italy. I love to discovery culture and new paths | foodie | curious of the world',
  facebook: 'facebook.com/hieu.lequang.5',
  insta: 'instagram.com/lehieuds',
  twitter: 'twitter.com/lehieudesign',
  printerest: 'pinterest.com/lehieuds',
  web: 'behance.net/lehieuds',
};

const UpdateProfileScreen = () => {
  const [user, setUser] = React.useState(USER_INFOMATION);
  const navigation = useNavigation();

  const onGoBack = () => navigation.goBack();

  const renderInfomation = () => {
    return (
      <View
        flex
        paddingT-20
        paddingB-40
        paddingH-medium
        marginB-small
        backgroundColor={Colors.white}>
        <Text B14 c59 uppercase>
          Personal Infomations
        </Text>
        <InputText
          value={user.name}
          onChange={name => setUser(prev => ({...prev, name}))}
          placeholder="Full Name"
          iconLeft={Assets.icons.ic_tab_profile}
          style={{marginTop: 24, marginBottom: 16}}
        />
        <InputText
          value={user.email}
          onChange={email => setUser(prev => ({...prev, email}))}
          placeholder="Email"
          iconLeft={Assets.icons.ic_email_16}
          style={{marginBottom: 16}}
          keyboardType="email-address"
        />
        <InputText
          value={user.address}
          onChange={address => setUser(prev => ({...prev, address}))}
          placeholder="Address"
          iconLeft={Assets.icons.ic_pin_16}
          style={{marginBottom: 16}}
        />
        <InputText
          value={user.location}
          onChange={location => setUser(prev => ({...prev, location}))}
          placeholder="Address"
          iconLeft={Assets.icons.ic_pin_16}
          style={{marginBottom: 16}}
        />
        <InputText
          value={user.description}
          onChange={description => setUser(prev => ({...prev, description}))}
          placeholder=""
          type="text-area"
        />
      </View>
    );
  };

  const renderConnections = () => {
    return (
      <View
        flex
        paddingT-20
        paddingB-40
        paddingH-medium
        marginB-small
        backgroundColor={Colors.white}>
        <Text B14 c59 uppercase>
          Connections
        </Text>
        <InputText
          value={user.facebook}
          onChange={() => {}}
          placeholder="Full Name"
          iconLeft={Assets.icons.ic_facebook_16}
          style={{marginTop: 24, marginBottom: 16}}
        />
        <InputText
          value={user.insta}
          onChange={() => {}}
          placeholder="Email"
          iconLeft={Assets.icons.ic_instagram_16}
          style={{marginBottom: 16}}
        />
        <InputText
          value={user.twitter}
          onChange={() => {}}
          placeholder="Address"
          iconLeft={Assets.icons.ic_twitter_16}
          style={{marginBottom: 16}}
        />
        <InputText
          value={user.printerest}
          onChange={() => {}}
          placeholder="Address"
          iconLeft={Assets.icons.ic_printerest_16}
          style={{marginBottom: 16}}
        />
        <InputText
          value={user.web}
          onChange={() => {}}
          placeholder="Address"
          iconLeft={Assets.icons.ic_web_16}
        />
      </View>
    );
  };

  const renderTravelActivitiesFav = () => {
    return (
      <View
        paddingV-32
        paddingH-medium
        marginB-small
        backgroundColor={Colors.white}>
        <Text B14 c59 marginB-small uppercase>
          Travel Activities Favorites
        </Text>
        <View left row style={{flexWrap: 'wrap'}}>
          {dataTravel.map(item => (
            <Button title={item} />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View flex backgroundColor={Colors.white}>
      <NavBar
        title="Update Profile"
        onLeftClick={onGoBack}
        leftIcon="back"
        rightText="Save"
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View flex backgroundColor={Colors.cf7}>
          <View centerH paddingV-20 backgroundColor={Colors.white}>
            <View width={120} height={120} br100>
              <View
                flex
                backgroundColor={Colors.c35}
                br100
                style={{opacity: 0.4}}>
                <Image source={Assets.images.avatar2} />
              </View>
              <Image
                source={Assets.icons.ic_change_avatar}
                style={{position: 'absolute', alignSelf: 'center', top: 50}}
              />
            </View>
          </View>
          {renderInfomation()}
          {renderConnections()}
          {renderTravelActivitiesFav()}
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfileScreen;

const Button = React.memo(({title}: {title: string}) => {
  const [state, setState] = React.useState(false);
  if (state) {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 20,
          backgroundColor: '#046FDB',
          marginRight: 8,
          marginBottom: 8,
        }}
        onPress={() => setState(false)}>
        <Text B13 white>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#F7F8FA',
        marginRight: 8,
        marginBottom: 8,
      }}
      onPress={() => setState(true)}>
      <Text B13 color="#8395A7">
        {title}
      </Text>
    </TouchableOpacity>
  );
});

const dataTravel = [
  'ADVANTURE',
  'ART & EVENT',
  'CULTURE',
  'BEACH HOLIDAY',
  'sport',
  'music',
];
const styles = StyleSheet.create({});
