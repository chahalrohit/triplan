import React, { useCallback } from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { View, Text, Image, Colors } from 'react-native-ui-lib';
import NavBar from 'components/NavBar';
import { width, height } from 'config/scaleAccordingToDevice';
import { Trip } from './data';
import { useNavigation } from '@react-navigation/native';
import Routes from 'config/Routes';

interface Props {
    data: Trip[],
    onClose: () => void,
}

const ListPlaceView: React.FC<Props> = ({
    data,
    onClose
}) => {

    const navigation = useNavigation();

    const onNavigatePlaceToVisit = useCallback((item) => navigation.navigate(Routes.PlaceToVisit, {
        title: item.title,
        address: item.location,
        thumbnail: item.thumbnail
    }), []);

    const renderTravelActivities = useCallback(({ item }: { item: Trip }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => onNavigatePlaceToVisit(item)}>
                <View flex marginT-small backgroundColor={Colors.white}>
                    <View flex>
                        <Image source={item.thumbnail} width={width} height={height * 0.46} />
                    </View>
                    <View flex paddingH-small paddingB-small paddingT-8>
                        <Text B16 c35 marginB-8>{item.title}</Text>
                        <View row centerV>
                            <Text c83 M13>{item.location} </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }, []);

    return (
        <View absT width={width} height={height} backgroundColor={Colors.cf7}>
            <NavBar title={'Places to Visit'} leftIcon='close' onLeftClick={onClose} />
            <FlatList
                data={data}
                renderItem={renderTravelActivities}
                keyExtractor={(_, idx) => `item_${idx}`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ListPlaceView;

const styles = StyleSheet.create({})
