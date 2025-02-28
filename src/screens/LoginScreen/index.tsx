import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Linking,
} from 'react-native';
import {
  View,
  Text,
  Assets,
  Image,
  KeyboardAwareScrollView,
  Colors,
  Checkbox,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import NavBar from 'components/NavBar';
import InputText from 'components/InputText';
import BaseButton from 'components/BaseButton';
import {height, heightHeader} from 'config/scaleAccordingToDevice';
import {FaceId} from '../../assets/images';
import useToggle from 'hooks/useToggle';
import Routes from '../../config/Routes';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const [check, setCheck] = useToggle();

  const goBack = () => navigation.goBack();
  const handleNavigateForgot = () => navigation.navigate(Routes.ForgotPassword);
  const handleNavigateNewsFeed = () =>
    navigation.navigate(Routes.MainBottomTab);
  const handleNavigateSignUp = () => navigation.navigate(Routes.Signup);

  const onPolicy = () => {
    Linking.openURL('https://timivietnam.github.io/triplan/policy');
  };

  const onTerm = () => {
    Linking.openURL('https://timivietnam.github.io/triplan/term');
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavBar leftIcon="back" onLeftClick={goBack} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive">
        <View
          height={height - heightHeader}
          paddingH-medium
          backgroundColor={Colors.white}>
          <View flex>
            <Text c35 B40 marginB-medium>
              Log In
            </Text>
            <Text c59 M16>
              Welcome back!
            </Text>
          </View>
          <View flex-2 spread>
            <View flex>
              <InputText
                value={email}
                onChange={text => setEmail(text)}
                placeholder="Email"
                iconLeft={Assets.icons.ic_email_16}
                style={{marginBottom: 16}}
                keyboardType="email-address"
              />
              <InputText
                value={password}
                onChange={text => setPassword(text)}
                placeholder="Password"
                iconLeft={Assets.icons.ic_password}
                iconRight={Assets.icons.ic_show_pass}
                secureTextEntry={!isShowPassword}
                onIcRightClick={() => setIsShowPassword(!isShowPassword)}
                style={{marginBottom: 16}}
              />
              <View right>
                <TouchableOpacity onPress={handleNavigateForgot}>
                  <Text cf15 M14>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View row centerV>
              <Checkbox
                color={Colors.c04}
                value={check}
                onValueChange={setCheck}
              />
              <Text marginL-16 c35 M14>
                I Agree to
              </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={onPolicy}>
                <Text cf15 M14>
                  {' '}
                  Policy
                </Text>
              </TouchableOpacity>
              <Text c35 M14>
                {' '}
                And{' '}
              </Text>
              <TouchableOpacity activeOpacity={0.7} onPress={onTerm}>
                <Text cf15 M14>
                  Terms
                </Text>
              </TouchableOpacity>
            </View>
            <View flex center>
              <BaseButton
                disable={!check}
                primary
                label="Log in"
                onPress={handleNavigateNewsFeed}
              />
            </View>
          </View>
          <View flex centerH spread paddingB-small>
            <Text cfe M14>
              New!{' '}
              <Text c35 M14>
                Quick login use FaceId
              </Text>
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <FaceId />
            </TouchableOpacity>
            <View row center bottom>
              <Text c35 M14>
                Don't have an account?{' '}
              </Text>
              <TouchableOpacity onPress={handleNavigateSignUp}>
                <Text c04 M14>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
