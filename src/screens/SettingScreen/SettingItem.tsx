import React, { useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { View, Text, Image, Assets, Colors, Switch } from 'react-native-ui-lib'

interface Props {
    icon: any,
    label: string,
    isSwitch?: boolean,
    isArrow?: boolean,
    onPress?: () => void,
    onChangeSwitch?: () => void,
}

const SettingItem: React.FC<Props> = ({
    icon,
    label,
    isSwitch = false,
    isArrow = true,
    onChangeSwitch,
    onPress
}) => {
    const [isOn, setIsOn] = useState<boolean>(true);

    const onChangeValue = () => {
        setIsOn(!isOn)
        onChangeSwitch && onChangeSwitch();
    }
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View paddingH-28 paddingV-small row spread centerV backgroundColor={Colors.white}>
                <View row centerV>
                    <Image source={icon} />
                    <Text B14 c35 marginL-26>{label}</Text>
                </View>
                {isSwitch
                    && <Switch
                        value={isOn}
                        onValueChange={onChangeValue}
                        offColor={Colors.c59}
                        onColor={Colors.c4d}
                    />}
                {isArrow && !isSwitch && <Image source={Assets.icons.ic_arr_right} height={16} width={16} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SettingItem

const styles = StyleSheet.create({})
