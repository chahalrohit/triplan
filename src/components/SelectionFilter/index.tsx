import React, { useState } from 'react'
import { StyleSheet, ViewStyle, TouchableOpacity } from 'react-native'
import { View, Text, Image, Assets } from 'react-native-ui-lib'
import SelectionItem from './SelectionItem'

interface Props {
    label: string,
    data: string[],
    onSelectItem: (value: string) => void,
    isShowAll?: boolean,
    style?: ViewStyle
}

const SelectionFilter: React.FC<Props> = ({
    label,
    data,
    onSelectItem,
    isShowAll = false,
    style
}) => {
    const [selected, setSelected] = useState<string>('');
    const [list, setList] = useState<any>(data.slice(0, 4));
    const [isAll, setIsAll] = useState<boolean>(false);

    const onPressItem = (value: string) => {
        setSelected(value)
        onSelectItem(value);
    };

    return (
        <View style={style}>
            <Text B14 c59 marginB-small uppercase>{label}</Text>
            {
                list.map((item, idx) => (
                    <SelectionItem
                        index={idx}
                        key={`${item}_${idx}`}
                        item={item}
                        selected={item === selected}
                        onPressItem={onPressItem} />
                ))
            }
            {isShowAll &&
                <TouchableOpacity onPress={() => {
                    setList(isAll ? data.slice(0, 4) : data);
                    setIsAll(prev => !prev)
                }}>
                    <View row right centerV marginT-32>
                        <Text B13 c04 marginR-10 uppercase>{isAll ? 'Show Less Country' : 'Show All Country'}</Text>
                        <Image source={Assets.icons.ic_arr_right} />
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

export default SelectionFilter

const styles = StyleSheet.create({})
