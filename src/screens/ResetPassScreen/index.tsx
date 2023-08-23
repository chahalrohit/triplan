import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { View, Text, KeyboardAwareScrollView, Assets, Colors } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import NavBar from 'components/NavBar';
import InputText from 'components/InputText';
import BaseButton from 'components/BaseButton';
import Routes from 'config/Routes';
import { height, heightHeader } from 'config/scaleAccordingToDevice';

const ResetPassScreen = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const goBack = () => navigation.goBack();
    const goToAcknowledgementScreen = () => navigation.navigate(Routes.ResetSuccess);

    return (
        <>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar leftIcon='back' onLeftClick={goBack} />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="interactive"
                scrollEnabled={true}
                enableAutomaticScroll={true}
            >
                <View paddingH-medium height={height - heightHeader} backgroundColor={Colors.white}>
                    <View marginB-64>
                        <Text c35 B40>Reset</Text>
                        <Text c35 B40 marginB-medium>Password</Text>
                        <Text c59 M16>Reset code was sent to your email. Please enter the code and create new password.</Text>
                    </View>
                    <View>
                        <InputText
                            value={code}
                            onChange={(text) => setCode(text)}
                            placeholder='Reset Code'
                            iconLeft={Assets.icons.ic_reset_code}
                            style={{ marginBottom: 16 }}
                        />
                        <InputText
                            value={newPassword}
                            onChange={(text) => setNewPassword(text)}
                            placeholder='New Password'
                            iconLeft={Assets.icons.ic_password}
                            style={{ marginBottom: 16 }}
                            secureTextEntry={true}
                        />
                        <InputText
                            value={confirmPassword}
                            onChange={(text) => setConfirmPassword(text)}
                            placeholder='Confirm Password'
                            iconLeft={Assets.icons.ic_password}
                            style={{ marginBottom: 32 }}
                            secureTextEntry={true}
                        />
                        <BaseButton primary label='change password' onPress={goToAcknowledgementScreen} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </>
    )
}

export default ResetPassScreen;

const styles = StyleSheet.create({})
