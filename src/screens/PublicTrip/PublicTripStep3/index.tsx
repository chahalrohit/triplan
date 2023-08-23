import { FONTS } from 'config/FoundationConfig';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, StatusBar } from 'react-native';
import { View, Colors } from 'react-native-ui-lib';
import Header from './Header';
import OptionBottom from './OptionBottom';
import TagDay from './TagDay';
import Content from './Content';
import { useNavigation, useRoute } from '@react-navigation/native';
import Routes from 'config/Routes';
const PublicTripStep3 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const onNavigatePreview = React.useCallback(() => {
    navigation.navigate(Routes.TripCover, {
      isPreview: true,
    });
  }, []);

  const onNavigateFriendShare = React.useCallback(() => {
    navigation.navigate(Routes.ShareToFriend);
  }, []);

  return (
    <View flex backgroundColor={Colors.white}>
      <StatusBar barStyle='dark-content'/>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View marginT-32 paddingH-24 style={{ zIndex: 0 }}>
          <TextInput
            placeholder="Overview, about your trip…"
            placeholderTextColor={Colors.cd1}
            textAlignVertical={'top'}
            numberOfLines={4}
            multiline={true}
            style={styles.inputOverView}
          />
        </View>
        <TagDay />
        <Content />
      </ScrollView>
      <OptionBottom
        onAddDay={() => { }}
        onPreview={onNavigatePreview}
        onPublic={() => { }}
        onPublishTrip={() => { }}
        onShare={onNavigateFriendShare}
        badge={route?.params?.share ?? 0}
      />
    </View>
  );
};

export default PublicTripStep3;

const styles = StyleSheet.create({
  inputOverView: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    height: 120,
    paddingLeft: 0,
  },
});
