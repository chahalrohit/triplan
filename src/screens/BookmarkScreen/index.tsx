import React from 'react'
import { StyleSheet, FlatList, Platform } from 'react-native'
import { View, Text, Colors } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { height, darkStyle } from 'config/scaleAccordingToDevice'
import { Bookmark, DATA, DATA_MAP } from './constant';
import MapView, { PROVIDER_GOOGLE, Marker, PROVIDER_DEFAULT } from 'react-native-maps'

const BookmarkScreen = () => {

    const renderItem = ({ item }: { item: Bookmark }) => (
        <View paddingV-small paddingH-medium backgroundColor={Colors.white} style={{ borderBottomColor: Colors.cef, borderBottomWidth: 1 }}>
            <Text B16 c35>{item.name}</Text>
            <View row marginT-8>
                <Text M13 c83>{item.type1}</Text>
                <Text M13 c83 marginH-8>*</Text>
                <Text M13 c83>{item.type2}</Text>
            </View>
        </View>
    )

    return (
        <View flex>
            <NavBar title='My Bookmarks' />
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
                    {
                        DATA_MAP.map((item: any, index: number) => (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: item.lat,
                                    longitude: item.lng,
                                }}
                            >
                                <View
                                    height={10}
                                    width={10}
                                    style={[styles.marker, { backgroundColor: item.backgroundColor }]}
                                />
                            </Marker>
                        ))
                    }
                </MapView>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(_, idx) => `item_${idx}`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default BookmarkScreen

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    marker: { borderRadius: 5, borderColor: Colors.white, borderWidth: 1 }
})
