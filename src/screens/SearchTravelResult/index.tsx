import React, { useState, useCallback } from 'react'
import { StyleSheet, ScrollView, FlatList, TouchableOpacity, StatusBar, TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib';
import NavBar from 'components/NavBar';
import BaseButton from 'components/BaseButton';
import { height, width, shadow } from 'config/scaleAccordingToDevice';
import { ICWeatherSun, ICAir, ICUmbrella, ICWind } from 'images';
import FollowItem from "components/FlowItem";
import { Trip, Hotel, DATA_5, DATA_2, DATA_3, DATA, DATA_4, DATA_6 } from './data';
import ListPeopleView from './ListPeople';
import ListTripView from './ListTrip';
import ListPlaceView from './ListPlace';
import { FONTS } from 'config/FoundationConfig';

const SearchTravelResultScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { title } = route.params;
    const [isOpenFullPeopleView, setIsOpenFullPeopleView] = useState<boolean>(false);
    const [isOpenTripView, setIsOpenTripView] = useState<boolean>(false);
    const [isOpenPlaceView, setIsOpenPlaceView] = useState<boolean>(false);

    const onGoBack = () => navigation.goBack();

    const renderTravelActivities = useCallback(({ item }: { item: any }) => {
        return (
            <View flex margin-8 width={width * 0.85} backgroundColor={Colors.white} style={{ borderRadius: 4, ...shadow }}>
                <View flex>
                    <Image source={item.thumbnail} style={styles.thumbnail} />
                    {
                        !item.location &&
                        <View absR>
                            <Image
                                source={Assets.icons.ic_wishlist}
                                style={{ marginTop: 18, marginRight: 17 }}
                            />
                        </View>
                    }
                </View>
                <View flex paddingH-small paddingB-small paddingT-8>
                    <Text B16 c35 marginB-8>{item.title}</Text>
                    {
                        item.location
                            ?
                            <View row centerV marginB-8>
                                <Text c83 M13>{item.location} </Text>
                            </View>
                            :
                            <View row centerV marginB-small>
                                <Text c83 M13>{item.comments} comments </Text>
                                <Text c83 marginH-8>*</Text>
                                <Text c83 M13>{item.views} views </Text>
                            </View>
                    }

                </View>
            </View>
        )
    }, []);

    const renderHotelItem = useCallback(({ item }: { item: any }) => (
        <View flex margin-8 width={width * 0.85} backgroundColor={Colors.white} style={{ borderRadius: 4 }}>
            <View flex>
                <Image source={item.thumbnail} style={styles.thumbnail} />
                <View absB backgroundColor={Colors.cf15} paddingH-8 paddingV-4>
                    <Text M10 white uppercase>{item.price}</Text>
                </View>
            </View>
            <View flex paddingH-small marginB-small paddingT-8>
                <Text B16 c35 marginB-8>{item.title}</Text>
                <View row centerV>
                    <View flex-2 row>
                        <View row centerV>
                            <Image source={Assets.icons.ic_hotel_rating} />
                            <Text c83 M13 marginL-10>{item.rate} </Text>
                        </View>
                        <View row centerV marginL-medium>
                            <Image source={Assets.icons.ic_article_comment} width={14} height={14} />
                            <Text c83 marginL-10>{item.comments}</Text>
                        </View>
                    </View>
                    <Text c83 M13>{item.view}</Text>
                </View>
            </View>
            <View height={1} marginT-small backgroundColor={Colors.cef} />
            <View padding-small row spread centerV>
                <Image source={Assets.images[item.logo]} />
                <TouchableOpacity onPress={() => { }}>
                    <View paddingV-8 paddingH-14 center backgroundColor={Colors.cf15} br100>
                        <Text B13 white>Book Now</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    ), []);

    const renderSection = useCallback((data: Trip[] | Hotel[], title: string, subTitle: string, type: string, isHotelSection?: boolean) => {
        return (
            <View paddingT-32 paddingB-small marginB-small backgroundColor={Colors.white}>
                <View paddingH-medium marginB-medium>
                    <Text B16 c35 uppercase>{title}</Text>
                    <Text M14 c83>{subTitle}</Text>
                </View>
                {
                    isHotelSection
                        ? <FlatList
                            data={data}
                            horizontal
                            contentContainerStyle={{ paddingRight: 16 }}
                            renderItem={renderHotelItem}
                            keyExtractor={(_, idx) => `item_${idx}`}
                            showsHorizontalScrollIndicator={false}
                        />
                        : <FlatList
                            data={data}
                            horizontal
                            contentContainerStyle={{ paddingRight: 16 }}
                            renderItem={renderTravelActivities}
                            keyExtractor={(_, idx) => `item_${idx}`}
                            showsHorizontalScrollIndicator={false}
                        />
                }
                <TouchableOpacity onPress={() => {
                    if (type === 'trip') {
                        setIsOpenTripView(true)
                    } else if (type === 'place') {
                        setIsOpenPlaceView(true)
                    }
                }}>
                    <View row centerV right paddingR-small marginT-medium>
                        <Text marginR-10 B13 c04 uppercase>Show All</Text>
                        <Image source={Assets.icons.ic_arr_right} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }, []);

    const InputLocation = ({ label, placeholder, editable = true }: { label: string, placeholder: string, editable?: boolean }) => (
        <View marginB-small>
            <Text M14 c59 marginB-8>{label}</Text>
            <View row centerV spread paddingH-medium height={50} style={styles.input}>
                <Image source={Assets.icons.ic_pin_16} />
                <View flex paddingL-medium>
                    <TextInput
                        placeholder={placeholder}
                        style={{
                            color: '',
                            fontSize: 14,
                            fontFamily: FONTS.medium
                        }}
                        editable={editable}
                    />
                </View>
                <Image source={Assets.icons.ic_instagram_16} />
            </View>
        </View>
    )

    const renderFindWay = useCallback(() => (
        <View paddingV-32 paddingH-medium marginB-small backgroundColor={Colors.white}>
            <View row spread centerV marginB-medium >
                <View>
                    <Text B16 c35>HOW TO GET THERE</Text>
                    <Text M14 c83>Search the best routes</Text>
                </View>
                <Image source={Assets.images.logoRome} />
            </View>
            <InputLocation label='From' placeholder='Enter your location' />
            <InputLocation label='To' placeholder='New York, NY, USA' editable={false}/>
            <BaseButton primary label='Search' onPress={() => { }} style={{ marginTop: 16 }} />
        </View>
    ), []);

    const renderWeather = useCallback((item: any, idx: number) => (
        <View flex center key={idx}>
            <Text M14 c59>{item.date}</Text>
            <Image marginV-medium source={Assets.icons[item.icon]} />
            <Text M16 c35>{item.temperature}</Text>
        </View>
    ), []);

    const renderWeatherView = useCallback(() => (
        <View paddingV-32 paddingH-medium marginB-small backgroundColor={Colors.white}>
            <View marginB-medium>
                <Text B16 c35 uppercase>WEATHER</Text>
                <Text M14 c83>Plan you week ahead</Text>
            </View>
            <View marginB-medium>
                <Text B16 c35 uppercase>New York, NY</Text>
                <Text M14 c83>as of 10:29 am EDT, Apr 27, 2018</Text>
            </View>
            <View flex centerV row>
                <View flex left row>
                    <Text M100 c35>75</Text>
                    <View row marginT-24>
                        <Text B20 c35 marginH-4>o</Text>
                        <Text M30 c35>F</Text>
                    </View>
                </View>
                <View flex>
                    <ICWeatherSun />
                </View>
            </View>
            <View flex row marginB-32>
                <View row marginR-34>
                    <ICAir />
                    <Text M14 c35 marginL-8>20%</Text>
                </View>
                <View row marginR-34>
                    <ICWind />
                    <Text M14 c35 marginL-8>4km/h</Text>
                </View>
                <View row>
                    <ICUmbrella />
                    <Text M14 c35 marginL-8>26%</Text>
                </View>
            </View>
            <View row flex spread>
                {DATA_4.map((item, idx) => renderWeather(item, idx))}
            </View>
        </View>
    ), []);

    const renderPeopleBeenThere = useCallback(() => (
        <View paddingV-32 backgroundColor={Colors.white}>
            <View marginB-medium paddingH-medium >
                <Text B16 c35 uppercase>WHO HAVE BEEN HERE</Text>
                <Text M14 c83>Follow to keep up</Text>
            </View>
            {
                DATA_5.slice(0, 5).map((item, idx) => <FollowItem key={idx} {...item} isFollowing />)
            }
            <TouchableOpacity onPress={() => setIsOpenFullPeopleView(true)}>
                <View row centerV right paddingR-small marginT-medium>
                    <Text marginR-10 B13 c04 uppercase>Show All</Text>
                    <Image source={Assets.icons.ic_arr_right} />
                </View>
            </TouchableOpacity>
        </View>
    ), []);

    return (
        <View flex backgroundColor={Colors.cf7}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title={title} leftIcon='back' onLeftClick={onGoBack} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View flex>
                    {renderSection(DATA, 'Trips for New York', 'Stories curated to your interests', 'trip')}
                    {renderSection(DATA_2, 'Place to visit', 'Stories curated to your interests', 'place')}
                    {renderSection(DATA_3, 'Where to stay', 'Stories curated to your interests', '', true)}
                    {renderFindWay()}
                    {renderWeatherView()}
                    {renderPeopleBeenThere()}
                </View>
            </ScrollView>
            {isOpenFullPeopleView && <ListPeopleView data={DATA_5} onClose={() => setIsOpenFullPeopleView(false)} />}
            {isOpenTripView && <ListTripView title='Trips for New York' data={DATA_6} onClose={() => setIsOpenTripView(false)} />}
            {isOpenPlaceView && <ListPlaceView data={DATA_2} onClose={() => setIsOpenPlaceView(false)} />}
        </View>
    )
}

export default SearchTravelResultScreen;

const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        height: height * 0.22,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.cdf,
        borderRadius: 100
    }
})
