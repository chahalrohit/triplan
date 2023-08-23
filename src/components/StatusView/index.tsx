import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib';
import BaseButton from 'components/BaseButton';

interface Props {
    type: STATUS
    onChangeType: (type: STATUS) => void;
}

export enum STATUS {
    FIRST_TIME,
    DRAFT,
    CHOOSE_LOCATION
}

const StatusView: React.FC<Props> = ({
    type,
    onChangeType
}) => {

    const FirstTimeView = () => {
        return (
            <Pressable onPress={() => onChangeType(STATUS.DRAFT)}>
                <View centerV row paddingL-medium paddingR-28 paddingV-medium spread>
                    <Text B14 c04>Awesome You! Let's Tell the World!</Text>
                    <Image source={Assets.icons.ic_go} />
                </View>
            </Pressable>
        )
    }

    const DraftView = () => {
        return (
            <View>
                <View paddingH-small paddingV-8>
                    <Text B13 c35>Lastest draft travel story</Text>
                </View>
                <View height={1} backgroundColor={Colors.cef} />
                <View paddingH-small paddingB-small paddingT-8>
                    <Text M14 c83>It S Hurricane Season But We Are Visiting Hilton Head Island</Text>
                </View>
                <View height={1} backgroundColor={Colors.cef} />
                <View centerV spread row paddingV-12 paddingH-small>
                    <Text M13 cd1>Last open: APR 9, 2018</Text>
                    <BaseButton secondary small label='edit story' onPress={() => onChangeType(STATUS.CHOOSE_LOCATION)} />
                </View>
            </View>
        )
    }

    const ChooseLocationView = () => {
        return (
            <View>
                <View paddingH-small paddingV-8>
                    <View row centerV spread marginB-4>
                        <Text B13 c35>Enter your home location</Text>
                        <Pressable onPress={() => onChangeType(STATUS.FIRST_TIME)}>
                            <Image source={Assets.icons.ic_close_16} />
                        </Pressable>
                    </View>
                    <Text M13 c59>So we can show you the best local content</Text>
                </View>
                <View height={1} backgroundColor={Colors.cef} />
                <View padding-small row centerV spread>
                    <Text M14 c83>Tap to select your home location</Text>
                    <Image source={Assets.icons.ic_home_location} />
                </View>
            </View>
        )
    }

    return (
        <View marginH-small marginB-medium style={styles.container}>
            {type === STATUS.FIRST_TIME && <FirstTimeView />}
            {type === STATUS.DRAFT && <DraftView />}
            {type === STATUS.CHOOSE_LOCATION && <ChooseLocationView />}
        </View>
    )
}

export default StatusView

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        backgroundColor: Colors.white,
    }
})
