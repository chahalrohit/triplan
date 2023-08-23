import React from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'

interface Props {
    item: string,
    selected: boolean,
    onPressItem: (value: string) => void,
    index: number
}

const SelectionItem: React.FC<Props> = ({
    item,
    selected,
    onPressItem,
    index
}) => {
    const onPress = () => {
        onPressItem(item)
    }

    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={onPress}>
            <View row paddingV-19 centerV spread paddingH-medium style={[styles.wrapper, index === 0 && { borderTopWidth: 1 }]}>
                <Text M14 c35>{item}</Text>
                <Image source={Assets.icons.ic_uncheck} style={{ tintColor: selected ? Colors.c04 : Colors.grey50 }} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SelectionItem

const styles = StyleSheet.create({
    wrapper: {
        borderBottomWidth: 1,
        borderColor: Colors.cef
    }
})
