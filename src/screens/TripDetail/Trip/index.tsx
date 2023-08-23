import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { View, Text, Assets, Colors, Avatar, Image } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import Day from './components/Day'
import Location from './components/Location'
import WallImage from './components/WallImage'
import { width } from 'config/scaleAccordingToDevice'
import Description from './components/Description'
import ListImage from './components/ListImage'
import BaseButton from 'components/BaseButton'
import Article, { ArticleProps } from 'components/Article'
import ImageModal from './components/ImageModal'
import { FULL_DATA, FULL_DATA_2 } from './constant'
import PlaceModal from './components/PlaceModal'
import { useNavigation, useRoute } from '@react-navigation/native'
import Routes from 'config/Routes'

const HEADER = `
Really short family visit to New York. We usually don't do anything seriously touristy when we're in town so we tried a couple this time!
\nWe tried one of the big hop on hop off bus tours and it was a pretty great deal; under $70 for 72 hours with multiple routes.
\nEasy way to get around! We also attended a Broadway play for the first time taking in Of Mice and Men. Wonderful show!
`


const DATA_PLACE = [
    {
        name: 'Empire State Building',
        address: '350 5th Ave, New York, NY 10118'
    },
    {
        name: 'Havana Central Times Square',
        address: '151 W 46th St, New York, NY 10036'
    },
    {
        name: 'Central Park',
        address: '5th Avenue, New York City, NY 10022'
    },
    {
        name: 'The Empire Hotel',
        address: '44 W 63rd St, New York, NY 10023'
    },
    {
        name: 'Lower Manhattan',
        address: '5th Avenue, New York City, NY 10022'
    },
    {
        name: `St. Patrick's Cathedral`,
        address: '5th Ave, New York, NY 10022'
    }
]

const Trip = () => {
    const navigation = useNavigation();
    const routes = useRoute();
    const { isPreview } = routes?.params ?? { isPreview: false };
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isOpenModalPlace, setIsOpenModalPlace] = useState<boolean>(false);

    const onGoBack = useCallback(() => navigation.goBack(), []);

    const onToggleModal = useCallback(() => setIsOpenModal(!isOpenModal), [isOpenModal]);
    const onToggleModalPlace = useCallback(() => setIsOpenModalPlace(!isOpenModalPlace), [isOpenModalPlace]);

    const onNavigateProfile = useCallback(() => navigation.navigate(Routes.ProfileStack, {
        isAuthor: true
    }), []);

    const onNavigateComment = useCallback(() => navigation.navigate(Routes.TripComment), []);

    const onNavigateHotelAround = useCallback(() => navigation.navigate(Routes.HotelAround), []);

    const onNavigateTripRoutes = useCallback(() => navigation.navigate(Routes.TripRoutes), []);

    const noOp = () => { };

    const renderContent = useCallback((item: any, idx: number) => {
        const { type, content, props } = item;
        switch (type) {
            case 'description':
                return <Description description={content} key={idx} />
            case 'location':
                return <Location name={content.name} address={content.address} key={idx} />
            case 'image':
                return <WallImage
                    image={Assets.images[content.image]}
                    onPressImage={props.onPressImage ? onToggleModal : noOp}
                    needPadding={props.needPadding}
                    title={content.title !== '' && content.title}
                    key={idx}
                />
            case 'list':
                return <ListImage data={content} key={idx} />
            default:
                break;
        }
    }, []);

    const renderRecommended = useCallback((data: ArticleProps[]) => {
        return (
            <ScrollView>
                {
                    data.map((item: ArticleProps, idx: number) => {
                        const length = data.length;
                        const zIndex = length - idx;
                        return <Article
                            key={idx}
                            {...item}
                            isLast={idx === (length - 1)}
                            style={{ zIndex }}
                        />
                    })
                }
            </ScrollView>
        )
    }, []);

    const renderSection = useCallback((data: any) => {
        return data.map((item: any, idx: number) => renderContent(item, idx))
    }, []);

    const BottomView = () => (
        <View width={width} height={60} absB backgroundColor={Colors.white} row>
            <TouchableOpacity style={styles.btnOption} onPress={onToggleModalPlace}>
                <Image source={Assets.icons.ic_article_place} tintColor={Colors.c59} />
                <Text M10 c83 marginT-4>
                    6
                        </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption} onPress={onNavigateHotelAround}>
                <Image source={Assets.icons.ic_article_sleep} tintColor={Colors.c59} />
                <Text M10 c83 marginT-4>
                    Sleep
                        </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption} onPress={() => { }}>
                <Image source={Assets.icons.ic_wishlisted} />
                <Text M10 cf15 marginT-4>
                    2.4K
                        </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption} onPress={onNavigateComment}>
                <Image source={Assets.icons.ic_article_comment} tintColor={Colors.c59} />
                <Text M10 c83 marginT-4>
                    145
                        </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOption} onPress={() => { }}>
                <Image source={Assets.icons.ic_article_share} tintColor={Colors.c59} />
                <Text M10 c83 marginT-4>
                    84
                        </Text>
            </TouchableOpacity>
        </View>
    )

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        switch (item.type) {
            case 'day':
                return <Day dayActive={item.data} />
            case 'content':
                return (
                    <View paddingT-32 paddingB-56>
                        {renderSection(item.data)}
                    </View>
                )
            case 'profile':
                if (isPreview) {
                    return null;
                } else {
                    return (
                        <View flex center paddingH-medium paddingB-40>
                            <TouchableOpacity onPress={onNavigateProfile}>
                                <Avatar source={Assets.images.avatar11} size={48} />
                            </TouchableOpacity>
                            <Text B16 c35 marginT-small>Agnes Ingram</Text>
                            <Text center marginT-small D14 c59>Fashion photographer currently based in Italy.
I love to discovery culture and new paths | foodie | curious of the world</Text>
                            <View marginT-medium row >
                                <View marginR-small backgroundColor={Colors.white}>
                                    <BaseButton label='Message' small outline onPress={() => { }} />
                                </View>
                                <BaseButton label='follow' small primary onPress={() => { }} />
                            </View>
                        </View>
                    )
                }
            case 'title':
                if (isPreview) {
                    return null;
                } else {
                    return (
                        <View paddingV-medium backgroundColor={Colors.cf7}>
                            <Text B14 c59 uppercase marginL-medium>recommended trip</Text>
                        </View>
                    )
                }
            case 'recommended':
                if (isPreview) {
                    return null;
                } else {
                    return (
                        <View backgroundColor={Colors.cf7}>
                            {renderRecommended(item.data)}
                        </View>
                    )
                }
            default:
                return null;
        }
    }

    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                translucent
                backgroundColor='transparent'
            />
            <View flex backgroundColor={Colors.white}>
                <NavBar
                    leftIcon='back'
                    onLeftClick={onGoBack}
                    rightIcon={Assets.icons.ic_article_menu}
                />
                <FlatList
                    data={isPreview ? FULL_DATA_2 : FULL_DATA}
                    renderItem={renderItem}
                    stickyHeaderIndices={[1, 3, 5, 8]}
                    keyExtractor={(_, idx) => `item_${idx}`}
                    scrollEventThrottle={16}
                    ListHeaderComponent={() => (
                        <View paddingH-medium>
                            <Text M18 c35>
                                {HEADER}
                            </Text>
                        </View>
                    )}
                />
                <ImageModal modalVisible={isOpenModal} image={'thumbnail_20'} onClose={onToggleModal} />
                <PlaceModal modalVisible={isOpenModalPlace} onClose={onToggleModalPlace} places={DATA_PLACE} onPressItem={onNavigateTripRoutes} />
                {
                    !isPreview &&
                    <BottomView />
                }
            </View>
        </>
    )
}

export default Trip

const styles = StyleSheet.create({
    btnOption: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
