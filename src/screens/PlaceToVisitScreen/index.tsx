import React, { useCallback } from 'react'
import { StyleSheet, ImageBackground, TouchableOpacity, ScrollView, FlatList, StatusBar } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useRoute, useNavigation } from '@react-navigation/native';
import NavBar from 'components/NavBar';
import { width, height, shadow } from 'config/scaleAccordingToDevice';
import { DESCRIPTION, DATA_IMAGES } from './constant';
import { Trip, Hotel, DATA, DATA_2, DATA_3 } from 'screens/SearchTravelResult/data';
import ReviewItem from 'components/ReviewItem';
import BaseButton from 'components/BaseButton';
import Routes from 'config/Routes';
import { DATA_REVIEW } from 'screens/ReviewScreen/constant';

const PlaceToVisitScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { title, address, thumbnail } = route.params ?? { title: '', address: '', thumbnail: '' };
    const heightImage = useSharedValue(height);
    const heightContent = useSharedValue(0);

    const onGoBack = useCallback(() => navigation.goBack(), []);

    const onNavigateReview = useCallback(() => navigation.navigate(Routes.ReviewScreen), []);

    const animatedStylesPreview = useAnimatedStyle(() => {
        return {
            height: heightImage.value,
            width: width
        };
    });
    const animatedStylesContent = useAnimatedStyle(() => {
        return {
            height: heightContent.value,
            width: width
        };
    });

    const onPressReadArticle = useCallback(() => {
        heightImage.value = withTiming(0, {
            duration: 500
        });
        heightContent.value = withTiming(height, {
            duration: 500
        })
    }, []);

    const onNavigateToPreview = useCallback(() => {
        heightImage.value = withTiming(height, {
            duration: 500
        });
        heightContent.value = withTiming(0, {
            duration: 500
        })
    }, []);

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
            <View>
                <Image source={item.thumbnail} style={styles.thumbnail} />
                <View absB backgroundColor={Colors.cf15} paddingH-8 paddingV-4>
                    <Text M10 white uppercase>{item.price}</Text>
                </View>
            </View>
            <View paddingH-small marginB-small paddingT-8>
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
                <TouchableOpacity onPress={() => { }}>
                    <View row centerV right paddingR-small marginT-medium>
                        <Text marginR-10 B13 c04 uppercase>Show All</Text>
                        <Image source={Assets.icons.ic_arr_right} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }, []);

    const renderListImage = (data: any) => {
        const remainLength = data?.length - 5 ?? 0;
        return (
            <View flex centerV>
                <Image source={Assets.images[data[1]]} width={width} height={height * 0.4} />
                <View row>
                    <Image source={Assets.images[data[0]]} width={width * 0.7} height={height * 0.2} />
                    <Image source={Assets.images[data[4]]} width={width * 0.3} height={height * 0.2} />
                </View>
                <View row>
                    <Image source={Assets.images[data[3]]} width={width * 0.3} height={height * 0.2} />
                    <View>
                        <Image source={Assets.images[data[4]]} width={width * 0.7} height={height * 0.2} />
                        {
                            remainLength !== 0 &&
                            <View width={width * 0.7} height={height * 0.2} backgroundColor={Colors.cmodal} absT center>
                                <Text B14 white>{`${remainLength}+ photos..`}</Text>
                            </View>
                        }
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View flex backgroundColor={Colors.white}>
            <Animated.View style={animatedStylesPreview}>
                <ImageBackground source={thumbnail} style={styles.imgBackground}>
                    <NavBar leftIcon='back' onLeftClick={onGoBack} iconColor={Colors.white} rightIcon={Assets.icons.ic_article_menu} style={{ backgroundColor: 'transparent' }} />
                    <View flex paddingH-medium>
                        <View flex centerV>
                            <Text M30 white>{title}</Text>
                            <Text M15 cef marginT-small marginB-medium>{address}</Text>
                            <Text D18 white>
                                The Empire State Building is the closest thing to heaven in the city.
                            </Text>
                        </View>
                        <View flex bottom right>
                            <TouchableOpacity onPress={onPressReadArticle}>
                                <Image source={Assets.icons.ic_read_article} marginB-medium />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </Animated.View>
            <Animated.View style={animatedStylesContent}>
                <View flex backgroundColor={Colors.white}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <NavBar
                            leftIcon='back'
                            onLeftClick={onNavigateToPreview}
                            iconColor={Colors.white}
                            rightIcon={Assets.icons.ic_place_share}
                            style={styles.header} />
                        <View flex backgroundColor={Colors.cf7}>
                            {renderListImage(DATA_IMAGES)}
                            <View flex centerV paddingH-medium paddingT-40 marginB-small backgroundColor={Colors.white}>
                                <Text D16 c35>{DESCRIPTION}</Text>
                            </View>
                            {renderSection(DATA, 'Trips for New York', 'Stories curated to your interests', 'trip')}
                            {renderSection(DATA_2, 'Place to visit', 'Stories curated to your interests', 'place')}
                            {renderSection(DATA_3, 'Where to stay', 'Stories curated to your interests', '', true)}
                            <View backgroundColor={Colors.white} paddingB-40>
                                {
                                    DATA_REVIEW.slice(0, 3).map((item) => (
                                        <ReviewItem key={item.id} {...item} />
                                    ))
                                }
                                <View right marginT-small paddingR-medium>
                                    <TouchableOpacity onPress={onNavigateReview}>
                                        <View row centerV>
                                            <Text B13 c04 marginR-10 uppercase>Show all</Text>
                                            <Image source={Assets.icons.ic_arr_right} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View row center marginT-medium style={{ justifyContent: 'space-around' }}>
                                    <BaseButton small outline label='Add a photo' onPress={() => { }} style={{ elevation: 0 }} />
                                    <BaseButton small primary label='Write a review' onPress={() => { }} style={{ elevation: 0 }} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Animated.View>
        </View>
    )
}

export default PlaceToVisitScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: width,
        zIndex: 1
    },
    thumbnail: {
        width: '100%',
        height: height * 0.22,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    imgBackground: {
        width: width,
        height: height
    }
})