import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native-ui-lib'

interface IDes {
    description: string
}

const Description: React.FC<IDes> = ({
    description
}) => {
    return (
        <View paddingH-medium marginB-small>
            <Text D16R c35>
                {description}
            </Text>
        </View>
    )
}

export default Description

const styles = StyleSheet.create({})
