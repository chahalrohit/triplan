import React from 'react'
import { StyleSheet, ScrollView, TouchableWithoutFeedback, StatusBar } from 'react-native'
import { View, Text, Image, Assets, Colors } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { useNavigation } from '@react-navigation/native'
import { width, height } from 'config/scaleAccordingToDevice'
import Routes from 'config/Routes'

const DATA_TRAVEL = [
    {
        thumbnail: 'thumbnail_9',
        title: 'Adventure Travel',
        countOfTrips: '24.3K'
    },
    {
        thumbnail: 'thumbnail_11',
        title: 'Beach',
        countOfTrips: '1.8K'
    },
    {
        thumbnail: 'thumbnail_11',
        title: 'Beach',
        countOfTrips: '1.8K'
    }
];

const TravelActivitiesScreen = () => {
    const navigation = useNavigation();

    const onGoBack = () => navigation.goBack();

    const onNavigateDetail = (title: string) => navigation.navigate(Routes.TravelActivityDetail, {
        title
    })

    const renderTravelActivity = (item: any, idx: number) => (
        <TouchableWithoutFeedback key={`item_${idx}`} onPress={() => onNavigateDetail(item.title)}>
            <View marginT-small>
                <Image source={Assets.images[item.thumbnail]} height={height * 0.3} width={width} />
                <View paddingL-small paddingT-8 paddingB-small backgroundColor={Colors.white}>
                    <Text B16 c35>{item.title}</Text>
                    <Text M13 c83>{`${item.countOfTrips} trips`}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

    return (
        <View flex>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar leftIcon='back' onLeftClick={onGoBack} title="Travel Activities" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View flex>
                    {DATA_TRAVEL.map(renderTravelActivity)}
                </View>
            </ScrollView>
        </View>
    )
}

export default TravelActivitiesScreen

const styles = StyleSheet.create({})
