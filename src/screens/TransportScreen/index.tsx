import React from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { View, Colors } from 'react-native-ui-lib'
import { useNavigation } from '@react-navigation/native';
import NavBar from 'components/NavBar';
import { width, height } from 'config/scaleAccordingToDevice';
import { TransportMap } from 'images';

const TransportScreen = () => {
    const navigation = useNavigation();

    const onGoBack = () => navigation.goBack();
    return (
        <View flex backgroundColor={Colors.white}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title='Transport Map' leftIcon='close' onLeftClick={onGoBack} />
            <TransportMap width={width} height={height} />
        </View>
    )
}

export default TransportScreen

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
})
