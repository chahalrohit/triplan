import React, { useState } from 'react'
import { StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import { View, Text, KeyboardAwareScrollView, Image, Assets, Colors } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import NavBar from 'components/NavBar';
import { width, height, heightHeader } from 'config/scaleAccordingToDevice';
import InputText from 'components/InputText';
import BaseButton from 'components/BaseButton';

interface SocialButtonProps {
    socialIcon: any,
    onPress: () => void,
    color: any
}

const SocialButton: React.FC<SocialButtonProps> = ({ socialIcon, onPress, color }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View center backgroundColor={color} height={50} width={width * 0.4} br100>
                <Image source={socialIcon} />
            </View>
        </TouchableOpacity>
    )
}

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const goBack = () => navigation.goBack();

    return (

        <>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar leftIcon='back' onLeftClick={goBack} />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="interactive"
            >
                <View paddingH-medium height={height - heightHeader} backgroundColor={Colors.white}>
                    <View marginB-10>
                        <Text c35 B40 marginB-32>Sign Up</Text>
                        <Text c59 M16>{`Sign up with Facebook or Google+ to sync \nyour travel photo.`}</Text>
                    </View>
                    <View row spread marginB-medium>
                        <SocialButton socialIcon={Assets.icons.ic_facebook} color={Colors.c3b} onPress={() => { }} />
                        <SocialButton socialIcon={Assets.icons.ic_gplus} color={Colors.cdd4} onPress={() => { }} />
                    </View>
                    <Text c59 M14 marginB-medium>Or using your email</Text>
                    <View>
                        <InputText
                            value={fullName}
                            onChange={(text) => setFullName(text)}
                            placeholder='Full Name'
                            iconLeft={Assets.icons.ic_user_16}
                            style={{ marginBottom: 16 }}
                            keyboardType='email-address'
                        />
                        <InputText
                            value={email}
                            onChange={(text) => setEmail(text)}
                            placeholder='Email'
                            iconLeft={Assets.icons.ic_email_16}
                            style={{ marginBottom: 16 }}
                            keyboardType='email-address'
                        />
                        <InputText
                            value={password}
                            onChange={(text) => setPassword(text)}
                            placeholder='Password'
                            iconLeft={Assets.icons.ic_password}
                            iconRight={Assets.icons.ic_show_pass}
                            secureTextEntry={!isShowPassword}
                            onIcRightClick={() => setIsShowPassword(!isShowPassword)}
                            style={{ marginBottom: 32 }}
                        />
                        <BaseButton primary label='Sign Up' onPress={() => { }} />
                    </View>
                    <View flex bottom paddingB-42>
                        <Text c83 M12 center>{`By tapping any of the button above, I agree to Triplan’s \n`}
                            <Text c83 M12 style={{ textDecorationLine: 'underline' }}>Term of Service</Text>
                            <Text c83 M12> and </Text>
                            <Text c83 M12 style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>
                        </Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({})
