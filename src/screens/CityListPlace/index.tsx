import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import { useRoute, useNavigation } from '@react-navigation/native'
import { SwipeListView } from 'react-native-swipe-list-view';
import NavBar from 'components/NavBar'
import { height, shadow, width, darkStyle } from 'config/scaleAccordingToDevice'
import Routes from 'config/Routes';
import { BookmarkWhite } from 'images';
import { TYPE } from 'screens/FilterScreen';
import MapView, { PROVIDER_GOOGLE, Marker, PROVIDER_DEFAULT } from 'react-native-maps'

const DATA = [
    {
        name: 'Boston Harbor Hotel',
        type1: 'Hotel',
    },
    {
        name: 'Boston Yacht Haven',
        type1: 'Guesthouse',
    },
    {
        name: 'The Lenox',
        type1: 'Apartment',
    },
    {
        name: 'Apartment in Historic Location',
        type1: 'Apartment',
    },
    {
        name: 'Seaport Boston Hotel',
        type1: 'Hotel',
    },
    {
        name: 'Hotel Commonwealth',
        type1: 'Hotel',
    },
]

const Markers = React.memo(({ markers }: any) => {
    return markers.map((item: any, index: number) => {
        return (
            <Marker
                key={index}
                coordinate={{
                    latitude: item.lat,
                    longitude: item.lng,
                }}
                tracksViewChanges={false}
            >
                <View
                    height={10}
                    width={10}
                    style={[styles.marker, { backgroundColor: item.backgroundColor }]}
                />
            </Marker>
        )
    })
})


const CityListPlace = () => {
    let time: any | null = null;
    const navigation = useNavigation();
    const route = useRoute();
    const { title, places } = route.params ?? '';

    const [isHideDelect, setIsHideDelect] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            clearTimeout(time);
        }
    }, [])

    const onGoBack = useCallback(() => navigation.goBack(), []);

    const onNavigateFilter = useCallback(() => navigation.navigate(Routes.Filter, {
        type: TYPE.PLACE
    }), []);

    const onNavigateDetail = (item: any) => navigation.navigate(Routes.PlaceDetail, {
        title: item.name,
        selectedPlace: places[0],
    })

    const renderItem = ({ item }: { item: any }) => (
        <TouchableWithoutFeedback onPress={() => onNavigateDetail(item)}>
            <View paddingV-small paddingH-medium backgroundColor={Colors.white} style={{ borderBottomColor: Colors.cef, borderBottomWidth: 1 }}>
                <Text B16 c35>{item.name}</Text>
                <View row centerV>
                    <Text c83 M13>{item.type1}</Text>
                    <View center marginH-8>
                        <View width={2} height={2} style={{ borderRadius: 1 }} backgroundColor={Colors.c83} />
                    </View>
                    <Text c83 M13>$$$</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

    const renderHiddenItem = (data: any, rowMap: any) =>
        isHideDelect ? null : (
            <View flex right paddingR-8 backgroundColor={Colors.c04}>
                <TouchableOpacity
                    onPress={() => {
                        setIsHideDelect(true);
                        time = setTimeout(() => {
                            setIsHideDelect(false);
                        }, 300)
                    }}>
                    <View flex center>
                        <BookmarkWhite />
                        <Text M13 white marginT-8>Bookmarks</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    return (
        <View flex backgroundColor={Colors.white}>
            <NavBar title={title} leftIcon='back' onLeftClick={onGoBack} />
            <View height={height * 0.24} backgroundColor={Colors.black}>
                <MapView
                    provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                    style={styles.map}
                    region={{
                        latitude: 21.0302816,
                        longitude: 105.815348,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                    customMapStyle={darkStyle}
                >
                    <Markers markers={places}/>
                </MapView>
            </View>
            <View flex >
                <SwipeListView
                    disableRightSwipe
                    data={DATA}
                    extraData={DATA}
                    renderItem={renderItem}
                    keyExtractor={(_, idx) => `item_${idx}`}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-96}
                    useNativeDriver={false}
                    onEndReachedThreshold={0.5}
                    showsVerticalScrollIndicator={false}
                />
            </View>
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

export default CityListPlace

const styles = StyleSheet.create({
    btnFilter: {
        ...shadow,
        borderRadius: 100,
        bottom: 24
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    marker: { borderRadius: 5, borderColor: Colors.white, borderWidth: 1 }
})
