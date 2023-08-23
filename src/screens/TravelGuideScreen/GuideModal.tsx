import React from 'react'
import { StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import scaleAccordingToDevice, { width, height, shadow } from 'config/scaleAccordingToDevice'
import BaseButton from 'components/BaseButton'
import { Country } from './index';
import { BlurView } from "@react-native-community/blur";

interface Props {
    thumbnail: any,
    city: string,
    country: string,
    onClose: () => void,
    onDownload: (guide: Country) => void,
}

const IMG_HEIGHT = 350;
const IMG_WIDTH = 240;
const IMG_FRAME_HEIGHT = IMG_HEIGHT + 16;
const IMG_FRAME_WIDTH = IMG_WIDTH + 16

const GuideModal: React.FC<Props> = ({
    thumbnail,
    city,
    country,
    onClose,
    onDownload
}) => {
    const onHandleDownload = () => {
        onDownload({
            city,
            country,
            thumbnail
        })
    }
    return (
        <Modal
            transparent={true}
            visible={true}
            animationType='fade'
        >
            <BlurView style={styles.absolute} blurType='dark' blurAmount={5}>
                <View width={width} height={height} flex center backgroundColor={Colors.cmodal}>
                    <View flex-3 center>
                        <View padding-8 width={scaleAccordingToDevice(IMG_FRAME_WIDTH)} height={scaleAccordingToDevice(IMG_FRAME_HEIGHT)} backgroundColor={Colors.white}>
                            <Image source={thumbnail} width={scaleAccordingToDevice(IMG_WIDTH)} height={scaleAccordingToDevice(IMG_HEIGHT)} />
                        </View>
                        <View marginT-small center>
                            <Text B16 white>{city}</Text>
                            <Text M12 cd1>{country}</Text>
                        </View>
                    </View>
                    <View flex>
                        <View flex top centerH>
                            <BaseButton primary label='Download city guide' onPress={onHandleDownload} />
                            <Text M13 cd1 marginT-8>for using offline mode</Text>
                        </View>
                        <View flex top>
                            <TouchableWithoutFeedback onPress={onClose}>
                                <View style={styles.closeBtn}>
                                    <Image source={Assets.icons.ic_add} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </BlurView>
        </Modal>
    )
}

export default GuideModal

const styles = StyleSheet.create({
    closeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.cf15,
        width: 48,
        height: 48,
        ...shadow,
        borderRadius: 24,
        transform: [
            {
                rotate: '45deg'
            }
        ]
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})