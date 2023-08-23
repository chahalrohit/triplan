import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import { shadow } from 'config/scaleAccordingToDevice'

interface ILocation {
    name: string,
    address: string
}

const Location: React.FC<ILocation> = ({
    name, address
}) => {
    return (
        <View marginH-medium paddingL-24 paddingR-16 paddingV-12 marginT-48 marginB-medium row center backgroundColor={Colors.c04} style={styles.container}>
            <Image source={Assets.icons.ic_pin_on_map} />
            <View marginL-20>
                <Text B16 white>{name}</Text>
                <Text M14 cdf>{address}</Text>
            </View>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(1,1,1,0.08)',
        borderRadius: 4
    },
})
