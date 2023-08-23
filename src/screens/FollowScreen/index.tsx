import React from 'react'
import { StyleSheet, TouchableOpacity, Animated, StatusBar } from 'react-native'
import { View, Colors } from 'react-native-ui-lib'
import { useNavigation } from '@react-navigation/native'
import { TabView, SceneMap } from 'react-native-tab-view';
import NavBar from 'components/NavBar'
import { width } from 'config/scaleAccordingToDevice';
import { FONTS } from 'config/FoundationConfig';
import FollowerList from './FollowerList';
import FollowingList from './FollowingList';

const DATA_FOLLOW = {
    'Followers' : '32.6M',
    'Followings' : '1266'
}

const FollowScreen = () => {
    const navigation = useNavigation();

    const onGoBack = () => navigation.goBack();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Followers' },
        { key: 'second', title: 'Followings' },
    ]);

    const renderScene = SceneMap({
        first: FollowerList,
        second: FollowingList,
    });

    const renderTabBar = (props: any) => {
        const inputRange = props.navigationState.routes.map((x: any, i: number) => i);

        return (
            <View marginB-small row>
                {props.navigationState.routes.map((route: any, i: number) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex: number) =>
                            inputIndex === i ? 1 : 0.5
                        ),
                    });

                    return (
                        <TouchableOpacity
                            key={i}
                            style={[
                                styles.tabItem,
                                index === i && {
                                    borderBottomWidth: 2,
                                    borderBottomColor: Colors.cfe
                                }]}
                            onPress={() => setIndex(i)}>
                            <Animated.Text style={{ opacity, fontFamily: FONTS.bold }}>
                                {`${route.title.toUpperCase()} - ${DATA_FOLLOW[route.title]}`}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };


    return (
        <View flex backgroundColor={Colors.white}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title='People' leftIcon='back' onLeftClick={onGoBack} />
            <View flex>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={{ width: width }}
                />
            </View>
        </View>
    )
}

export default FollowScreen

const styles = StyleSheet.create({
    tabItem: {
        alignItems: 'center',
        padding: 16,
        marginLeft: 24,
    },
})
