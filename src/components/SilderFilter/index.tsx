import React, { useState } from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { Spacings, View, Colors, Text } from 'react-native-ui-lib'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { width } from 'config/scaleAccordingToDevice'

interface Props {
    label: string,
    subLabel: string,
    max?: number,
    min?: number,
    step?: number,
    defaultValues: number[],
    onChange: (values: number[]) => void,
    style?: ViewStyle,
    isSliderOneValue?: boolean
}

const SliderFilter: React.FC<Props> = ({
    label,
    subLabel,
    max = 100,
    min = 0,
    step = 1,
    defaultValues,
    onChange,
    style,
    isSliderOneValue,
    ...rest
}) => {
    const [multiSliderValue, setMultiSliderValue] = useState(defaultValues);
    const defaultPadding = Spacings.medium;

    const multiSliderValuesChange = (values: number[]) => {
        setMultiSliderValue(values);
        onChange(values)
    }

    return (
        <View style={style}>
            <View row centerV marginB-small>
                <Text B14 c59 uppercase>{label}</Text>
                <Text B14 cfe marginL-8>{subLabel}</Text>
            </View>
            <MultiSlider
                values={isSliderOneValue ? [multiSliderValue[0]] : [multiSliderValue[0], multiSliderValue[1]]}
                sliderLength={width - defaultPadding * 2}
                containerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                onValuesChange={multiSliderValuesChange}
                customMarker={() => {
                    return (
                        <View
                            width={32}
                            height={32}
                            backgroundColor={Colors.white}
                            style={styles.marker}
                        />
                    )
                }}
                selectedStyle={{ backgroundColor: Colors.cfe }}
                unselectedStyle={{ backgroundColor: Colors.cef }}
                trackStyle={{ height: 4 }}
                min={min}
                max={max}
                step={step}
                snapped
                {...rest}
            />
        </View>
    )
}

export default SliderFilter

const styles = StyleSheet.create({
    marker: { borderRadius: 16, borderWidth: 1, borderColor: Colors.c83 }
})
