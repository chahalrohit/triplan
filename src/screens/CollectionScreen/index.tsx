import React from 'react'
import { StyleSheet, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, StatusBar } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { width } from 'config/scaleAccordingToDevice';
import { useNavigation } from '@react-navigation/native';
import Routes from 'config/Routes';
import { FocusAwareStatusBar } from 'components/FocusAwareStatusBar';

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
    }
];

const DATA_OTHER = [
    {
        thumbnail: 'thumbnail_10',
        title: 'Trip To Iqaluit In Nunavut A Canadian Arctic City',
        countOfTrips: '243'
    },
    {
        thumbnail: 'thumbnail_10',
        title: 'Trip To Iqaluit In Nunavut A Canadian Arctic City',
        countOfTrips: '1.8K'
    }
]

const CollectionScreen = () => {
    const navigation = useNavigation();

    const onNavigateTravelActivitiesScreen = () => navigation.navigate(Routes.TravelActivity);
    const onNavigateDetail = (title: string) => navigation.navigate(Routes.TravelActivityDetail, {
        title
    })

    const renderTravelActivities = ({ item }: { item: any }) => {
        return (
            <View paddingL-small>
                <Image source={Assets.images[item.thumbnail]} height={180} />
                <View marginL-small marginT-8>
                    <Text B16 c35>{item.title}</Text>
                    <Text M13 c83>{`${item.countOfTrips} trips`}</Text>
                </View>
            </View>
        )
    }

    const renderOtherTravel = (item: any, idx: number) => (
        <TouchableWithoutFeedback key={`item_${idx}`} onPress={() => onNavigateDetail(item.title)}>
            <View marginB-small>
                <Image source={Assets.images[item.thumbnail]} width={width} />
                <View paddingL-small paddingT-8 paddingB-small backgroundColor={Colors.white}>
                    <Text B16 c35>{item.title}</Text>
                    <Text M13 c83>{`${item.countOfTrips} trips`}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

    return (
        <View flex backgroundColor={Colors.cf7}>
            <FocusAwareStatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title='Collection' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View flex>
                    <View paddingT-32 paddingB-small marginB-small backgroundColor={Colors.white}>
                        <View paddingH-medium marginB-medium>
                            <Text B16 c35>Travel Activities</Text>
                            <Text M14 c83>Stories curated to your interests</Text>
                        </View>
                        <FlatList
                            data={DATA_TRAVEL}
                            horizontal
                            contentContainerStyle={{ paddingRight: 16 }}
                            renderItem={renderTravelActivities}
                            keyExtractor={(_, idx) => `item_${idx}`}
                            showsHorizontalScrollIndicator={false}
                        />
                        <TouchableOpacity onPress={onNavigateTravelActivitiesScreen}>
                            <View row centerV right paddingR-small marginT-40>
                                <Text marginR-10 B13 c04 uppercase>Show All</Text>
                                <Image source={Assets.icons.ic_arr_right} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View paddingT-32 paddingB-small backgroundColor={Colors.white}>
                        <View paddingH-medium >
                            <Text B16 c35>Other Collections</Text>
                            <Text M14 c83>Stories curated to your interests</Text>
                        </View>
                    </View>
                    {DATA_OTHER.map(renderOtherTravel)}
                </View>
            </ScrollView>
        </View>
    )
}

export default CollectionScreen

const styles = StyleSheet.create({})
