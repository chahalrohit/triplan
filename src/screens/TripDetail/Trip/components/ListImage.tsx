import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Image, Assets } from 'react-native-ui-lib'
import { width, height } from 'config/scaleAccordingToDevice'

interface IListImage {
    data: string[],
}

const ListImage: React.FC<IListImage> = ({
    data
}) => {
    return (
        <View flex centerV marginT-32>
            <View row>
                <Image source={Assets.images[data[0]]} width={width * 0.7} height={height * 0.2} />
                <Image source={Assets.images[data[1]]} width={width * 0.3} height={height * 0.2} />
            </View>
            <View row>
                <Image source={Assets.images[data[2]]} width={width * 0.3} height={height * 0.2} />
                <View>
                    <Image source={Assets.images[data[3]]} width={width * 0.7} height={height * 0.2} />
                </View>
            </View>
        </View>
    )
}

export default ListImage

const styles = StyleSheet.create({})
