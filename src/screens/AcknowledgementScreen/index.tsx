import React, { useEffect } from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { View, Text, Image, Assets, Colors } from 'react-native-ui-lib';
import BaseButton from 'components/BaseButton';
import { useNavigation } from '@react-navigation/native';
import Routes from 'config/Routes';
import { width } from 'config/scaleAccordingToDevice';
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withRepeat } from 'react-native-reanimated';

const ANGLE = 20;

const AcknowledgementScreen = () => {
    const navigation = useNavigation();
    const rotation = useSharedValue(0);

    const navigateLogin = () => navigation.navigate(Routes.Login);

    useEffect(() => {
        rotation.value = withSequence(
            withTiming(-10, { duration: 50 }),
            withRepeat(withTiming(ANGLE, { duration: 100 }), 6, true),
            withTiming(0, { duration: 50 })
        );
    }, [])


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }],
        };
    });


    return (
        <View flex center paddingH-medium backgroundColor={Colors.white}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <Animated.View style={animatedStyle}>
                <Image source={Assets.icons.ic_success} />
            </Animated.View>
            <Text B30 c35 center marginT-60>{`Password change \n successful`}</Text>
            <Text M16 c59 center marginT-small marginB-60>{`You have successfully change password. Please use your new password when \nlogging in.`}</Text>
            <BaseButton primary label='Log In' onPress={navigateLogin} style={styles.button} />
        </View>
    )
}

export default AcknowledgementScreen;

const styles = StyleSheet.create({
    button: {
        width: width * 0.57,
    }
})
