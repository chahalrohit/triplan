import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { View, Text, Colors } from 'react-native-ui-lib'

interface Props {
    list: string[],
    onPress: (value: string) => void,
    style?: ViewStyle,
}

const FilterButton: React.FC<Props> = ({
    list,
    onPress,
    style
}) => {
    const [selectIndex, setSelectIndex] = useState<number>(0);

    const onPressItem = (idx: number) => {
        setSelectIndex(idx);
        onPress(list[idx]);
    }

    return (
        <View row height={40} backgroundColor={Colors.white} style={[styles.wrapper, style]}>
            {
                list.map((item, idx) => (
                    <TouchableOpacity style={{ flex: 1 }} key={`${item}_${idx}`} onPress={() => onPressItem(idx)}>
                        <View flex center
                            backgroundColor={idx === selectIndex
                                ? Colors.c04
                                : Colors.white}
                            style={[
                                idx === 0 && {
                                    borderTopLeftRadius: 4,
                                    borderBottomLeftRadius: 4
                                },
                                idx === list.length - 1 && {
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 4
                                },
                            ]}
                        >
                            <Text M13 c04={idx !== selectIndex} white={idx === selectIndex}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

export default FilterButton

const styles = StyleSheet.create({
    wrapper: {
        borderColor: Colors.c04,
        borderRadius: 4,
        borderWidth: 1
    }
})
