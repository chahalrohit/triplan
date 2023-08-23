import React from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle, ImageStyle } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import { width, height } from 'config/scaleAccordingToDevice'
import { Hotel } from './constant'

interface IHotelItem {
    item: Hotel,
    style?: ViewStyle,
    thumbnailStyle?: ImageStyle,
}

const HotelItem: React.FC<IHotelItem> = ({
    item,
    style,
    thumbnailStyle
}) => {
    return (
        <View flex backgroundColor={Colors.white} style={[{ borderRadius: 4 }, style]}>
            <View>
                <Image source={Assets.images[item.thumbnail]} style={[styles.thumbnail, thumbnailStyle]} />
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
    )
}

export default HotelItem

const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
})
