import React, { useCallback } from 'react'
import { StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { useNavigation } from '@react-navigation/native'
import { width, height } from 'config/scaleAccordingToDevice'
import { SECTION } from './constant'
import Routes from 'config/Routes'
import HotelItem from './HotelItem'

const HotelAroundScreen = () => {
    const navigation = useNavigation();

    const onGoBack = useCallback(() => navigation.goBack(), []);

    const onNavigateList = useCallback((title: string) => navigation.navigate(Routes.HotelList, {
        title
    }), []);

    const renderHotelItem = useCallback(({ item }: { item: any }) => (
        <HotelItem item={item} style={{ margin: 8, width: width * 0.85 }} thumbnailStyle={{ height: height * 0.22 }} />
    ), []);

    const renderSection = useCallback((item: any, idx: number) => {
        return (
            <View key={idx} paddingB-small marginB-small backgroundColor={Colors.white}>
                <View paddingV-12 paddingH-20 row centerV backgroundColor='white' >
                    <Image source={Assets.icons.ic_article_place} tintColor={Colors.cf15} />
                    <View marginL-20>
                        <Text B16 c35>{item.name}</Text>
                        <Text M14 c83>{item.address}</Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={item.data}
                        horizontal
                        contentContainerStyle={{ paddingRight: 16 }}
                        renderItem={renderHotelItem}
                        keyExtractor={(_, idx) => `item_${idx}`}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <TouchableOpacity onPress={() => onNavigateList(item.name)}>
                    <View row centerV right paddingR-small>
                        <Text marginR-10 B13 c04 uppercase>Show All</Text>
                        <Image source={Assets.icons.ic_arr_right} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }, [])

    return (
        <View flex backgroundColor={Colors.cf7}>
            <NavBar title='Hotel Around Places' leftIcon='close' onLeftClick={onGoBack} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    SECTION.map((item: any, idx: number) => renderSection(item, idx))
                }
            </ScrollView>
        </View>
    )
}

export default HotelAroundScreen

const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        height: height * 0.22,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
})
