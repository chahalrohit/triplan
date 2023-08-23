import React from 'react'
import { StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { View, Text, Colors, Assets } from 'react-native-ui-lib'
import DotIndicator from 'components/DotIndicator';
import Swiper from 'react-native-swiper';
import { height, width } from 'config/scaleAccordingToDevice';

const DATA_CAROUSEL = [
    {
        background: 'carousel_1'
    },
    {
        background: 'carousel_2'
    },
    {
        background: 'carousel_3'
    },
    {
        background: 'carousel_4'
    },
    {
        background: 'carousel_5'
    },
];

interface City {
    title: string,
    subTitle: string,
    description: string
}

const DATA_CITY: City = {
    title: 'Boston',
    subTitle: 'With our rich history, diverse neighborhoods, and legacy of arts, culture, and education, Boston has something for everyone.',
    description: "The Boston area's many colleges and universities make it an international center of higher education, including law, medicine, engineering, and business, and the city is considered to be a world leader in innovation and entrepreneurship, with nearly 2,000 start-ups. Boston's economic base also includes finance, ..."
}

const CityInfomationScreen = () => {
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <View flex backgroundColor={Colors.white}>
                <View height={height * 0.4}>
                    <Swiper
                        loop={false}
                        autoplay
                        showsButtons={false}
                        dot={<DotIndicator inactive color={'transparent'} inactiveColor={'#FFFFFF'} />}
                        activeDot={<DotIndicator color={Colors.white} />}
                        paginationStyle={styles.dotIndicatorPosition}>
                        {
                            DATA_CAROUSEL.map((item, idx) => {
                                return (
                                    <ImageBackground key={idx} source={Assets.images[item.background]} style={styles.image}>
                                    </ImageBackground>
                                )
                            })
                        }
                    </Swiper>
                </View>
                <View flex paddingH-medium>
                    <Text M30 c35 marginV-40>{DATA_CITY.title}</Text>
                    <Text M18 c35>
                        {DATA_CITY.subTitle}
                    </Text>
                    <View height={2} width={32} marginT-40 marginB-32 backgroundColor={Colors.cfe}></View>
                    <Text D14R c35 marginB-medium>
                        {DATA_CITY.description}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default CityInfomationScreen

const styles = StyleSheet.create({
    loopCarousel: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    dotIndicatorPosition: {
        top: height * 0.35,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
})
