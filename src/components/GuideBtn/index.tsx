import React from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { shadow } from 'config/scaleAccordingToDevice';

const GuideBtn = ({ icon, label, onPress }: { icon: any, label: string, onPress?: () => void }) => {
    const Icon = icon;
    return (
        <TouchableOpacity onPress={onPress} style={styles.wrapper}>
            <View center paddingV-small marginV-8 backgroundColor={Colors.white} style={styles.btn}>
                <View center>
                    <Icon width={40} height={40} />
                    <Text M13 c59 marginT-small>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default GuideBtn;

const styles = StyleSheet.create({
    wrapper: { width: '30%', height: 100 },
    btn: { ...shadow, borderRadius: 4 },
})