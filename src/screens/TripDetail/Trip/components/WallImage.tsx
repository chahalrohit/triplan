import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import { width } from 'config/scaleAccordingToDevice'

interface IWallImage {
    image: any,
    needPadding?: boolean,
    title?: string,
    onPressImage?: () => void,
}

const WallImage: React.FC<IWallImage> = ({
    image,
    needPadding = false,
    title,
    onPressImage
}) => {
    return (
        <View marginB-32 paddingR-30>
            <TouchableOpacity onPress={onPressImage} activeOpacity={1}>
                <View paddingH-medium={needPadding}>
                    <Image source={image} width={needPadding ? width * 0.87 : width} />
                </View>
            </TouchableOpacity>
            {title && <Text M13 c83 marginT-small marginH-medium>{title}</Text>}
        </View>
    )
}

export default WallImage

const styles = StyleSheet.create({})
