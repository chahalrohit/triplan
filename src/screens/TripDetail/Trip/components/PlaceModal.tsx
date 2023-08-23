import React from 'react'
import { StyleSheet, Modal, TouchableOpacity, FlatList } from 'react-native'
import { View, Text, Assets, Image, Colors } from 'react-native-ui-lib'
import { height } from 'config/scaleAccordingToDevice'

interface IPlaceModal {
    modalVisible: boolean,
    onClose: () => void;
    places: any,
    onPressItem: () => void;
}

const PlaceModal: React.FC<IPlaceModal> = ({
    modalVisible,
    onClose,
    places,
    onPressItem
}) => {
    const renderItem = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => {
            onPressItem();
            onClose();
        }}>
            <View paddingV-12 paddingH-20 marginB-small row centerV backgroundColor='white' style={{ borderRadius: 4 }}>
                <Image source={Assets.icons.ic_article_place} tintColor={Colors.cf15} />
                <View marginL-20>
                    <Text B16 c35>{item.name}</Text>
                    <Text M14 c83>{item.address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <View flex>
                <TouchableOpacity onPress={onClose} activeOpacity={1}>
                    <View backgroundColor={Colors.cmodal} padding-medium height={height * 0.5} />
                </TouchableOpacity>
                <View backgroundColor={Colors.cf7} padding-medium height={height * 0.5}>
                    <Text B14 c59 uppercase marginB-small>PLACES VISITED (6)</Text>
                    <FlatList
                        data={places}
                        renderItem={renderItem}
                        extraData={places}
                        keyExtractor={(_, idx) => `item_${idx}`}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default PlaceModal

const styles = StyleSheet.create({})
