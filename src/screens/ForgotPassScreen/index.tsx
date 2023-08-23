import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { View, Text, KeyboardAwareScrollView, Assets, Colors } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import NavBar from 'components/NavBar';
import InputText from 'components/InputText';
import Routes from 'config/Routes';
import BaseButton from 'components/BaseButton';
import { height, heightHeader } from 'config/scaleAccordingToDevice';

const ForgotPassScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>('');

    const goBack = () => navigation.goBack();
    const handleNavigateResetPassword = () => navigation.navigate(Routes.ResetPassword);

    return (
        <>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar leftIcon='back' onLeftClick={goBack} />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="interactive"
            >
                <View paddingH-medium height={height - heightHeader} backgroundColor={Colors.white}>
                    <View marginB-64>
                        <Text c35 B40>Forgot</Text>
                        <Text c35 B40 marginB-medium>Password</Text>
                        <Text c59 M16>Please enter your email below to receive your password reset instructions.</Text>
                    </View>
                    <View>
                        <InputText
                            value={email}
                            onChange={(text) => setEmail(text)}
                            placeholder='Email'
                            iconLeft={Assets.icons.ic_email_16}
                            style={{ marginBottom: 32 }}
                            keyboardType='email-address'
                        />
                        <BaseButton primary label='Send request' onPress={handleNavigateResetPassword} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </>
    )
}

export default ForgotPassScreen;

const styles = StyleSheet.create({})
