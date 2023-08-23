import React, {useState, useRef, useCallback} from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';
import {View, Text, Assets, Colors, Avatar, Image} from 'react-native-ui-lib';
import NavBar from 'components/NavBar';
import {useNavigation, useRoute} from '@react-navigation/native';
import Routes from 'config/Routes';
import {width, height} from 'config/scaleAccordingToDevice';
import BaseButton from 'components/BaseButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TabAction from './TabAction';
import {PROFILE_DATA} from './contanst';
import {FocusAwareStatusBar} from 'components/FocusAwareStatusBar';

const MyProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {isAuthor} = route.params ?? {isAuthor: false};
  const [author] = useState(isAuthor);
  const [key, setKey] = useState(() => (!author ? 'Draft' : 'Reviews'));
  const scrollViewRef = useRef();

  const onGoBack = () => navigation.goBack();
  const onNavigateSettings = () => navigation.navigate(Routes.SettingStack);
  const onNavigateNotification = () => navigation.navigate(Routes.Notification);
  const onNavigateInboxList = () => navigation.navigate(Routes.InboxList);
  const onNavigateFollowScreen = () => navigation.navigate(Routes.Follow);

  const renderActionView = () => {
    if (author) {
      return (
        <View marginT-medium row>
          <View marginR-small>
            <BaseButton label="message" small outline onPress={() => {}} />
          </View>
          <BaseButton label="follow" small primary onPress={() => {}} />
        </View>
      );
    } else {
      return (
        <View marginT-medium row>
          <View marginR-small backgroundColor={Colors.white}>
            <BaseButton
              label="inbox"
              small
              outline
              onPress={onNavigateInboxList}
              badge={2}
            />
          </View>
          <BaseButton label="share triplan" small primary onPress={() => {}} />
        </View>
      );
    }
  };

  const ActivityBtn = ({label}: {label: string}) => (
    <View
      paddingH-medium
      paddingV-8
      marginL-8
      backgroundColor={Colors.cf7}
      style={styles.activityBtn}>
      <Text B13 c04 uppercase>
        {label}
      </Text>
    </View>
  );

  const SocialBtn = ({icon}: {icon: any}) => (
    <View
      marginH-8
      center
      backgroundColor={Colors.cef}
      width={32}
      height={32}
      style={styles.socialBtn}>
      <Image source={icon} />
    </View>
  );

  const renderHeaderView = () => (
    <>
      <View
        flex
        center
        marginB-small
        paddingV-32
        paddingH-medium
        backgroundColor={Colors.white}>
        <View flex center>
          <Avatar source={Assets.images.avatar11} size={120} />
          <Text B16 c35 marginT-small>
            Agnes Ingram
          </Text>
          <Text center marginT-small D14 c59>
            Fashion photographer currently based in Italy. I love to discovery
            culture and new paths | foodie | curious of the world
          </Text>
          <View row center marginT-small marginB-medium>
            <Image source={Assets.icons.ic_pin_16} />
            <Text B12 c83 marginL-10>
              New York, NY, USA
            </Text>
          </View>
        </View>
        <View
          height={2}
          width={32}
          backgroundColor={Colors.cfe}
          marginB-medium
        />
        <View flex row center>
          <SocialBtn icon={Assets.icons.ic_instagram} />
          <SocialBtn icon={Assets.icons.ic_twitter} />
          <SocialBtn icon={Assets.icons.ic_pinterest} />
          <SocialBtn icon={Assets.icons.ic_blog} />
        </View>
        <View
          width={width}
          row
          marginV-medium
          style={{justifyContent: 'space-around'}}>
          <View center>
            <Text B16 c35>
              45
            </Text>
            <Text B12 c83>
              Experiences
            </Text>
          </View>
          <TouchableOpacity onPress={onNavigateFollowScreen}>
            <View center>
              <Text B16 c35>
                32.6M
              </Text>
              <Text B12 c83>
                Followers
              </Text>
            </View>
          </TouchableOpacity>
          <View center>
            <Text B16 c35>
              1263
            </Text>
            <Text B12 c83>
              Following
            </Text>
          </View>
        </View>
        {renderActionView()}
      </View>
      <View
        flex
        paddingT-32
        paddingB-40
        paddingH-medium
        backgroundColor={Colors.white}>
        <Text B14 c59 uppercase>
          TRAVEL ACTIVITIES FAVORITES
        </Text>
        <View row marginT-small>
          <ActivityBtn label="advanture" />
          <ActivityBtn label="art & event" />
        </View>
        <View row marginT-8>
          <ActivityBtn label="culture" />
          <ActivityBtn label="beach holiday" />
        </View>
      </View>
    </>
  );

  const onPressTabHeaderItem = (routeName: string, idx: number) => {
    setKey(routeName);
    setTimeout(() => {
      scrollViewRef?.current?.scrollTo({x: idx * 32, animated: true});
    }, 300);
  };

  const renderFlatListItem = useCallback(
    ({item, index}: {item: any; index: number}) => {
      if (index === 0) {
        return (
          <ScrollView
            horizontal
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}>
            {item.map((route: any, idx: number) => {
              const focused = route.routeName === key;
              if (author && route.routeName === 'Draft') return null;
              else
                return (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => onPressTabHeaderItem(route.routeName, idx)}>
                    <View
                      paddingV-small
                      marginH-small
                      style={focused && styles.labelFocus}>
                      <Text c83={!focused} c35={focused} B13 uppercase>
                        {`${route.routeName} - ${route.count}`}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
            })}
          </ScrollView>
        );
      } else {
        if (key === Object.keys(item)[0]) {
          return <TabAction itemKey={key} data={item[key]} />;
        }
      }
    },
    [key],
  );

  return (
    <View flex backgroundColor={Colors.cf7}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavBar
        leftIcon={author && 'back'}
        onLeftClick={author && onGoBack}
        rightIcon={
          !author ? Assets.icons.ic_settings : Assets.icons.ic_post_menu_black
        }
        subRightIcon={!author ? 'noti' : 'ic_article_share'}
        notiCount={3}
        onRightClick={onNavigateSettings}
        onRightSubClick={onNavigateNotification}
      />
      <FlatList
        data={PROFILE_DATA}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderFlatListItem}
        ListHeaderComponent={renderHeaderView}
        stickyHeaderIndices={[1]}
        keyExtractor={(_, idx) => `item_${idx}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  activityBtn: {
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  socialBtn: {
    borderRadius: 16,
  },
  tabItem: {
    alignItems: 'center',
    width: 'auto',
    marginHorizontal: 12,
  },
  indicator: {
    backgroundColor: 'transparent',
  },
  labelFocus: {borderBottomWidth: 2, borderBottomColor: Colors.cfe},
  flatListContainer: {
    paddingBottom: 50,
  },
  scrollView: {backgroundColor: Colors.cf7},
});
