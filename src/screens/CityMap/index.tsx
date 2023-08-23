import React, { useState, useCallback } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import { width, shadow, darkStyle } from 'config/scaleAccordingToDevice'
import NavBar from 'components/NavBar';
import { useNavigation } from '@react-navigation/native';
import Routes from 'config/Routes';
import MapView, { PROVIDER_GOOGLE, Marker, PROVIDER_DEFAULT } from 'react-native-maps'
import { DATA_MAP, Place, BUTTON } from './constant';

interface Props {
    title: string
}

const Markers = React.memo(({ markers, setIsShowDetail, setSelectedPlace, selectedPlace, setRegion }: any) => {
    return markers.map((item: Place, index: number) => {
        return (
            <Marker
                key={index}
                coordinate={{
                    latitude: item.lat,
                    longitude: item.lng,
                }}
                onPress={() => {
                    setIsShowDetail(true);
                    setSelectedPlace(item);
                    setRegion({
                        lat: item.lat,
                        lng: item.lng
                    })
                }}
                icon={(item.lat === selectedPlace?.lat && item.lng === selectedPlace?.lng)
                    ? Assets.icons.ic_pin_sleep_active
                    : Assets.icons[item.icon]}
            >
            </Marker>
        )
    });
})

const CityMap: React.FC<Props> = ({
    title
}) => {
    const navigation = useNavigation();
    const [region, setRegion] = useState<any>({
        lat: 21.0302816,
        lng: 105.815348
    });
    const [selected, setSelected] = useState<string>('All');
    const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
    const [places, setPlaces] = useState<Place[]>(DATA_MAP);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    const onGoBack = useCallback(() => navigation.goBack(), [])

    const onNavigateListPlace = useCallback(() => navigation.navigate(Routes.CityListPlace, {
        title: selected,
        places: places
    }), [selectedPlace, selected]);

    const onPressBtn = useCallback((item: string) => {
        setSelected(item);
        const filterPlaces = DATA_MAP.filter(place => place.type === item);
        setPlaces(item === 'All' ? DATA_MAP : filterPlaces);
    }, [selected, places]);

    const renderDetailBox = () => (
        <View absT row marginT-small marginH-small paddingL-small paddingR-14 paddingV-12 backgroundColor={Colors.white} style={styles.box}>
            <View flex-10 centerV>
                <Text marginB-8 B16 c35>Sheraton Boston Hotel</Text>
                <View row>
                    <Text M13 c83 marginR-8>Hotel </Text>
                    <View center marginH-8>
                        <View width={2} height={2} style={{ borderRadius: 1 }} backgroundColor={Colors.c83} />
                    </View>
                    <Text M13 c83>$$</Text>
                    <View center marginH-8>
                        <View width={2} height={2} style={{ borderRadius: 1 }} backgroundColor={Colors.c83} />
                    </View>
                    <Text M13 c83 marginL-8>0.5 mil</Text>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => {
                setIsShowDetail(false);
                setSelectedPlace(null)
            }}>
                <View flex centerH>
                    <Image source={Assets.icons.ic_close_16} marginT-6 />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )

    const renderBottomBtn = () => (
        <View width={width} height={48} paddingH-8 backgroundColor={Colors.white}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    BUTTON.map((item, idx) => (
                        <TouchableOpacity
                            key={`item_${idx}`}
                            onPress={() => {
                                onPressBtn(item.label)
                            }}
                        >
                            <View flex >
                                {selected === item.label && <View height={2} backgroundColor={item.color} />}
                                <View flex center paddingH-small >
                                    <Text B13 c35={selected === item.label} c83={selected !== item.label} uppercase>
                                        {item.label}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )

    return (
        <View flex backgroundColor={Colors.white}>
            <NavBar title={title} leftIcon='back' onLeftClick={onGoBack} />
            <View flex>
                {isShowDetail && renderDetailBox()}
                <MapView
                    provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                    style={styles.map}
                    region={{
                        latitude: region.lat,
                        longitude: region.lng,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                    customMapStyle={darkStyle}
                >
                    <Markers
                        markers={places}
                        setIsShowDetail={setIsShowDetail}
                        setSelectedPlace={setSelectedPlace}
                        setRegion={setRegion}
                        selectedPlace={selectedPlace}
                    />
                </MapView>
            </View>
            {isShowDetail && (
                <View center style={styles.floatBtn} backgroundColor={Colors.white} height={40} width={40}>
                    <TouchableOpacity onPress={onNavigateListPlace}>
                        <Image source={Assets.icons.ic_arr_up} />
                    </TouchableOpacity>
                </View>
            )}
            {renderBottomBtn()}
        </View>
    )
}

export default CityMap

const styles = StyleSheet.create({
    box: {
        ...shadow,
        borderRadius: 4,
        zIndex: 9
    },
    floatBtn: {
        position: 'absolute',
        bottom: 70,
        right: 16,
        borderRadius: 20
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    markerIcon: {
        width: 45,
        height: 45
    }
})
