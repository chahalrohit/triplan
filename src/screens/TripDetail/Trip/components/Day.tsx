import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { View, Text, Colors } from 'react-native-ui-lib'
import { width } from 'config/scaleAccordingToDevice'

interface IDayItem {
    day: string,
    color: string,
    active: boolean,
    style?: ViewStyle
}

const DayItem: React.FC<IDayItem> = ({
    day,
    color,
    active,
    style
}) => {
    return (
        <View flex center backgroundColor={active ? color : Colors.cef} row style={style}>
            <Text B16 white={active} cd1={!active} style={{ zIndex: 1 }} marginL-small>{day}</Text>
            <View absR width={36} height={36} backgroundColor={active ? color : Colors.cef} style={{ borderRadius: 18, right: -20 }}></View>
        </View>
    )
}

interface IDay {
    dayActive: string
}

const Day: React.FC<IDay> = ({
    dayActive
}) => {
    return (
        <View width={width} height={36} backgroundColor={Colors.cef} row>
            <DayItem day={'Day 1'} color={Colors.cfe} active={dayActive === 'Day 1'} style={{ zIndex: 99 }} />
            <DayItem day={'Day 2'} color={Colors.c24} active={dayActive === 'Day 2'} style={{ zIndex: 9 }} />
            <DayItem day={'Day 3'} color={Colors.cf15} active={dayActive === 'Day 3'} style={{ zIndex: 1 }} />
        </View>
    )
}

export default Day

const styles = StyleSheet.create({})
