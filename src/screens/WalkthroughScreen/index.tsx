import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { View, Text, Assets, Colors } from 'react-native-ui-lib';
import Swiper from 'react-native-swiper';
import { width, heightHeader, height } from 'config/scaleAccordingToDevice';
import { useNavigation } from '@react-navigation/native';
import Routes from 'config/Routes';
import DotIndicator from 'components/DotIndicator';

const DATA_CAROUSEL = [
    {
        title: 'Discover Trips Shared \nby Real Travellers',
        subTitle: 'Read real travel experience by other \ntravellers or browse our travel guides.',
        background: 'carousel_1'
    },
    {
        title: 'Create Travel Albums',
        subTitle: 'Import your Facebook album or \nGoogle Photos, auto sync and write a new \nstory so easy.',
        background: 'carousel_2'
    },
    {
        title: 'The Best Experience \nat Your Destination',
        subTitle: 'Find the best routes, top tourist spots and \nall place at your destinations.',
        background: 'carousel_3'
    },
    {
        title: 'Plan Your Next Journey',
        subTitle: 'Save you favorite trip \nand the best place for easy access later.',
        background: 'carousel_4'
    },
    {
        title: 'Offline Travel Guide',
        subTitle: 'Take it all with you anywhere, even offline.',
        background: 'carousel_5'
    },
];

const WalkthroughScreen = () => {
    const navigation = useNavigation();

    const onNavigateLogin = () => navigation.navigate(Routes.Login);
    const onNavigateSignUp = () => navigation.navigate(Routes.Signup);

    return (
        <View flex>
            <StatusBar barStyle='light-content' translucent backgroundColor="transparent" />
            <Swiper
                loop={false}
                autoplay
                showsButtons={false}
                dot={<DotIndicator inactive color={'transparent'} />}
                activeDot={<DotIndicator color={Colors.white} />}
                paginationStyle={styles.dotIndicatorPosition}>
                {
                    DATA_CAROUSEL.map((item, idx) => {
                        return (
                            <ImageBackground key={idx} source={Assets.images[item.background]} style={styles.image}>
                                <View flex bottom paddingH-24 paddingB-150>
                                    <Text center B30 white marginB-16>{item.title}</Text>
                                    <Text center M16 white>{item.subTitle}</Text>
                                </View>
                            </ImageBackground>
                        )
                    })
                }
            </Swiper>
            <View absB height={heightHeader} width={width} backgroundColor='transparent' row>
                <View flex center>
                    <TouchableOpacity onPress={onNavigateSignUp}>
                        <Text B14 white uppercase>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View flex center>
                    <TouchableOpacity onPress={onNavigateLogin}>
                        <Text B14 white uppercase>Log In </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default WalkthroughScreen

const styles = StyleSheet.create({
    loopCarousel: {
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    dotIndicatorPosition: {
        bottom: height * 0.13,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
})
