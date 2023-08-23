import React, { useCallback } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { useNavigation, useRoute } from '@react-navigation/native'
import HotelItem from './HotelItem'
import { DATA, Hotel } from './constant'
import { height, width, shadow } from 'config/scaleAccordingToDevice'
import { TYPE } from 'screens/FilterScreen'
import Routes from 'config/Routes'


const HotelList = () => {
    const navigation = useNavigation();
    const routes = useRoute();

    const { title } = routes?.params ?? { title: '' };

    const onGoBack = useCallback(() => navigation.goBack(), []);

    const onNavigateFilter = useCallback(() => navigation.navigate(Routes.Filter, {
        type: TYPE.HOTEL
    }), []);

    return (
        <View flex backgroundColor={Colors.cf7}>
            <NavBar title={`Hotel Around ${title}`} leftIcon='close' onLeftClick={onGoBack} />
            <ScrollView>
                {
                    DATA.map((item: Hotel, idx: number) => <HotelItem key={idx} item={item} thumbnailStyle={{ height: height * 0.3 }} style={{ marginBottom: 16 }} />)
                }
            </ScrollView>
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

export default HotelList

const styles = StyleSheet.create({
    btnFilter: {
        ...shadow,
        borderRadius: 100,
        bottom: 24
    }
})
