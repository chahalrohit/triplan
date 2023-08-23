import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Assets, Image, Colors } from 'react-native-ui-lib';
import BaseButton from 'components/BaseButton';
import StatusView, { STATUS } from '../../components/StatusView';
import { width, height } from 'config/scaleAccordingToDevice';
import NavBar from 'components/NavBar';
import { FocusAwareStatusBar } from 'components/FocusAwareStatusBar';

interface Props {

}

const OfflineView: React.FC<Props> = () => {
    const [countdown, setCountDown] = useState(60);

    useEffect(() => {
        const time = setInterval(() => {
            setCountDown(count => count !== 0 ? count - 1 : count);
        }, 1000)
        return () => {
            clearInterval(time);
        }
    }, []);

    return (
        <View flex>
            <FocusAwareStatusBar barStyle='light-content' translucent backgroundColor="transparent" />
            <NavBar title='News Feed' titleColor={Colors.white} style={{ backgroundColor: 'transparent' }} />
            <Image width={width} height={height * 0.6} source={Assets.images.bg} style={styles.background} />
            <View flex>
                <StatusView type={STATUS.DRAFT} onChangeType={() => { }} />
            </View>
            <View flex-3 center>
                <Text B48 cf15 marginB-40>Oops!</Text>
                <Text B16 c04 marginB-8>Your connection was lost for some reason.</Text>
                <Text B48M14 c83 marginB-26>{`We'll try to reconnect in ${countdown} seconds...`}</Text>
                <BaseButton primary small label='Reconnect Now' onPress={() => { }} />
            </View>
        </View>
    )
}

export default OfflineView

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: -30,
        left: 0,
        zIndex: -1
    },
})
