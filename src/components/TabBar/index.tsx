import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Routes, {Tabs} from 'config/Routes';
import {View, Colors, Text} from 'react-native-ui-lib';
import {Image, Assets} from 'react-native-ui-lib';
import ActionButton from 'react-native-action-button';
import {BlurView} from '@react-native-community/blur';
import {
  TabNewsActive,
  TabNews,
  TabCollectionActive,
  TabCollection,
  TabSearchActive,
  TabSearch,
  TabGuideActive,
  TabGuide,
  TabProfileActive,
  TabProfile,
  TabCityActive,
  TabCity,
  TabInfoActive,
  TabInfo,
  SearchCityActive,
  TabBookmarkActive,
  TabBookmark,
} from '../../assets/images';
import {useNetInfo} from '@react-native-community/netinfo';

const ICON = {
  [Tabs.MainTab]: {
    [Routes.NewsFeed]: {
      active() {
        return <TabNewsActive />;
      },
      inActive() {
        return <TabNews />;
      },
    },
    [Routes.Collection]: {
      active() {
        return <TabCollectionActive />;
      },
      inActive() {
        return <TabCollection />;
      },
    },
    [Routes.Search]: {
      active() {
        return <TabSearchActive />;
      },
      inActive() {
        return <TabSearch />;
      },
    },
    [Routes.Guide]: {
      active() {
        return <TabGuideActive />;
      },
      inActive() {
        return <TabGuide />;
      },
    },
    [Routes.Profile]: {
      active() {
        return <TabProfileActive />;
      },
      inActive() {
        return <TabProfile />;
      },
    },
  },
  [Tabs.CityGuideTab]: {
    [Routes.TravelGuide]: {
      active() {
        return <TabGuideActive />;
      },
      inActive() {
        return <TabGuide />;
      },
    },
    [Routes.CityStack]: {
      active() {
        return <TabCityActive />;
      },
      inActive() {
        return <TabCity />;
      },
    },
    [Routes.Information]: {
      active() {
        return <TabInfoActive />;
      },
      inActive() {
        return <TabInfo />;
      },
    },
    [Routes.SearchTravelGuide]: {
      active() {
        return <SearchCityActive />;
      },
      inActive() {
        return <TabSearch />;
      },
    },
    [Routes.Bookmarks]: {
      active() {
        return <TabBookmarkActive />;
      },
      inActive() {
        return <TabBookmark />;
      },
    },
  },
};

const MyTabBar = ({state, descriptors, navigation, tabName}: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const netInfo = useNetInfo();

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const renderContent = (isFocused: boolean, name: string) => {
    const iconType = ICON[tabName];
    const Icon: any = isFocused
      ? iconType[name].active
      : iconType[name].inActive;
    if (tabName === Tabs.MainTab) {
      return (
        <View
          center
          paddingV-small
          marginH-medium
          style={{
            borderBottomWidth: 2,
            borderBottomColor: isFocused ? Colors.cf15 : 'transparent',
          }}>
          <Icon />
        </View>
      );
    } else if (tabName === Tabs.CityGuideTab) {
      return (
        <View center paddingV-small>
          <Icon />
          <Text M10 c83={!isFocused} c04={isFocused} marginT-6>
            {name === Routes.SearchTravelGuide
              ? 'Search'
              : name === Routes.CityStack
                ? 'City'
                : name}
          </Text>
        </View>
      );
    }
  };

  const onNavigateReview = () => navigation.navigate(Routes.CreateReview);
  const onNavigatePublish = () => navigation.navigate(Routes.PublicTripStep1);

  return (
    <>
      <View
        row
        centerV
        spread
        paddingB-10
        backgroundColor={Colors.white}
        style={styles.tabBar}>
        {state.routes.map(
          (route: {key: React.ReactText; name: any}, index: any) => {
            const {options} = descriptors[route.key];
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                if (route.name === Routes.TravelGuide) {
                  navigation.navigate(Routes.MainBottomTab, {
                    screen: Routes.Guide,
                  });
                } else {
                  navigation.navigate(route.name);
                }
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.btnContainer}>
                {renderContent(isFocused, route.name)}
              </TouchableOpacity>
            );
          },
        )}
      </View>
      {state.index === 0 && netInfo.isConnected && (
        <ActionButton
          buttonColor={Colors.cf15}
          useNativeFeedback={false}
          activeOpacity={1}
          position="center"
          spacing={50}
          offsetY={80}
          hideShadow={false}
          shadowStyle={{borderRadius: 28}}
          backdrop={<BlurView style={styles.overlay} blurType="dark" />}>
          <ActionButton.Item
            useNativeFeedback={false}
            buttonColor={Colors.white}
            onPress={onNavigatePublish}>
            <Image source={Assets.icons.ic_new_trip} />
            <View
              style={{
                position: 'absolute',
                bottom: -30,
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text white M14>
                Publish Your Trip
              </Text>
            </View>
          </ActionButton.Item>
          <ActionButton.Item
            useNativeFeedback={false}
            buttonColor={Colors.white}
            onPress={onNavigateReview}>
            <Image source={Assets.icons.ic_write_review} />
            <View
              style={{
                position: 'absolute',
                bottom: -30,
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text white M14>
                Write a Review
              </Text>
            </View>
          </ActionButton.Item>
        </ActionButton>
      )}
    </>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1.5,
    borderTopColor: 'rgba(1,1,1,0.05)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  btnContainer: {flex: 1},
});
