import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { View, Text } from 'react-native-ui-lib'
import FilterButton from './FilterButton'

interface Props {
    title: string,
    list: string[],
    style?: ViewStyle,
    onPressValue: (value: string) => void,
}

const TypeFilter: React.FC<Props> = ({ title, list, style, onPressValue }) => (
    <View left style={style}>
        <Text B14 c59 uppercase marginB-small>{title}</Text>
        <FilterButton list={list} onPress={onPressValue} />
    </View>
)

export default TypeFilter

const styles = StyleSheet.create({})
