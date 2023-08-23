import React from 'react'
import { StyleSheet, Modal, ImageBackground, TouchableOpacity } from 'react-native'
import { View, Text, Assets, Image } from 'react-native-ui-lib'

interface IImageModal {
    modalVisible: boolean,
    image: string;
    onClose: () => void;
}

const ImageModal: React.FC<IImageModal> = ({
    modalVisible,
    image,
    onClose
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <ImageBackground
                source={Assets.images[image]}
                style={styles.image}
            >
                <View flex padding-medium>
                    <View flex>
                        <TouchableOpacity onPress={onClose}>
                            <Image source={Assets.icons.ic_close_24_white} />
                        </TouchableOpacity>
                    </View>
                    <View flex bottom>
                        <Text M14 white marginB-8>2/16</Text>
                        <Text M16 white>Empire State Building and skyscrapers with lights at night in New York City</Text>
                    </View>
                </View>
            </ImageBackground>
        </Modal>
    )
}

export default ImageModal

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
})
