import React from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import { View, Assets, Text, Image, Colors } from 'react-native-ui-lib'
import { useRoute, useNavigation } from '@react-navigation/native'
import NavBar from 'components/NavBar'
import Article, { ArticleProps } from 'components/Article'
import { width, shadow } from 'config/scaleAccordingToDevice'
import Routes from 'config/Routes'
import { TYPE } from 'screens/FilterScreen'

const DATA: ArticleProps[] = [
    {
        name: 'Agnes Ingram',
        avatar: require('../../images/img_avatar.png'),
        thumbnail: require('../../images/thumbnail_12.png'),
        title: 'The Luxury Of Traveling With Yacht Charter Companies',
        comments: '243',
        views: '15.2K',
        likes: '3',
        isTrending: false,
        dateTime: 'APR 23, 2018'
    },
    {
        name: 'Harold Kelley',
        avatar: require('../../images/img_avatar.png'),
        thumbnail: require('../../images/thumbnail_13.png'),
        title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
        comments: '1K',
        views: '15.2K',
        likes: '2',
        isTrending: false,
        dateTime: 'APR 23, 2018'
    },
    {
        name: 'James Ross',
        avatar: require('../../images/img_avatar.png'),
        thumbnail: require('../../images/thumbnail_14.png'),
        title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
        comments: '1K',
        views: '15.2K',
        likes: '20',
        isTrending: false,
        dateTime: 'APR 23, 2018'
    },
    {
        name: 'James Ross',
        avatar: require('../../images/img_avatar.png'),
        thumbnail: require('../../images/thumbnail_15.png'),
        title: 'Will The Democrats Be Able To Reverse The Online Gambling Ban',
        comments: '1K',
        views: '15.2K',
        likes: '20',
        isTrending: false,
        dateTime: 'APR 23, 2018'
    },
]

const TravelActivitiesDetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { title } = route.params;

    const onGoBack = () => navigation.goBack();

    const onNavigateFilter = () => navigation.navigate(Routes.Filter, {
        type: TYPE.TRIP
    })

    return (
        <View flex>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title={title} leftIcon='back' onLeftClick={onGoBack} rightIcon={Assets.icons.ic_article_share} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {DATA.map((item: ArticleProps, idx: number) => {
                    const length = DATA.length;
                    const zIndex = length - idx;
                    return <Article
                        key={idx}
                        {...item}
                        isLast={idx === (length - 1)}
                        style={{ zIndex }}
                    />
                })}
            </ScrollView>
            <View absB width={width} style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={onNavigateFilter}>
                    <View row paddingV-12 centerV paddingH-small backgroundColor={Colors.white} style={styles.btnFilter}>
                        <Text V14 c35 marginR-8>Filter</Text>
                        <Image source={Assets.icons.ic_filter} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TravelActivitiesDetailScreen

const styles = StyleSheet.create({
    btnFilter: {
        ...shadow,
        borderRadius: 100,
        bottom: 24
    }
})
