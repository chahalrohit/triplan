import React, {useState} from 'react';
import {StyleSheet, TextInput, StatusBar} from 'react-native';
import {
  View,
  Text,
  Picker,
  Assets,
  Colors,
  Image,
  KeyboardAwareScrollView,
} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import NavBar from 'components/NavBar';
import {width} from 'config/scaleAccordingToDevice';
import {FONTS} from 'config/FoundationConfig';
import {ICChange} from '../../assets/images';
import {formatAmount, formatAmountOnBlur} from '../../utils';

const options = [
  {label: 'VND', value: 'VND'},
  {label: 'USA', value: 'USA'},
];

const ExchangeMoneyScreen = () => {
  const navigation = useNavigation();
  const [country, setCountry] = useState<string>('VND');
  const [countryChange, setCountryChange] = useState<string>('USA');
  const [amount, setAmount] = useState<string>('22,750,000');

  const onGoBack = () => navigation.goBack();

  const onChangeAmount = (inputAmount: string = '0') => {
    let formattedAmount = formatAmount(inputAmount);
    if (formattedAmount?.length > 22) {
      formattedAmount = formatAmount(inputAmount?.slice(0, 17));
    }
    setAmount(formattedAmount);
  };

  const onAmountInputFocus = () => {
    if (amount === '0') {
      setAmount(``);
    }
  };

  const onAmountInputBlur = () => {
    const formattedAmount: string = formatAmountOnBlur(amount || `0`);
    setAmount(formattedAmount ?? `0`);
  };

  return (
    <View flex backgroundColor={Colors.cf7}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavBar title="Exchange Rate" leftIcon="close" onLeftClick={onGoBack} />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive">
        <View flex paddingT-medium backgroundColor={Colors.white}>
          <View row centerV spread paddingV-small paddingH-medium>
            <Picker
              useNativePicker
              value={country}
              onChange={(nativePickerValue: string) =>
                setCountry(nativePickerValue)
              }
              containerStyle={{marginTop: 20, width: width * 0.3}}
              renderPicker={() => {
                return (
                  <View row centerV width={width * 0.2}>
                    <Image
                      marginR-8
                      source={
                        country === 'VND'
                          ? Assets.images.vietnam
                          : Assets.images.usa
                      }
                    />
                    <Text M16 c04 marginR-9>
                      {country}
                    </Text>
                    <Image source={Assets.icons.ic_arr_down} />
                  </View>
                );
              }}
              wheelPickerProps={{
                style: {width: 200},
                color: Colors.green30,
                labelStyle: {fontSize: 30, fontFamily: FONTS.bold},
                itemHeight: 50,
              }}
              selectLabelStyle={{color: Colors.green30}}
              cancelLabelStyle={{color: Colors.green30}}>
              {options.map(option => (
                <Picker.Item
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </Picker>
            <TextInput
              value={amount}
              onChangeText={onChangeAmount}
              onFocus={onAmountInputFocus}
              onBlur={onAmountInputBlur}
              textAlign="right"
              keyboardType="number-pad"
              style={{
                width: width * 0.6,
                fontFamily: FONTS.bold,
                fontSize: 30,
                color: Colors.c04,
                paddingVertical: 0,
              }}
            />
          </View>
          <View
            marginH-small
            style={{height: 1, backgroundColor: Colors.cef}}
          />
          <View paddingV-small row paddingH-medium spread centerV>
            <View>
              <Text M14 c35>
                1 USD = 22,750 VND
              </Text>
              <Text M14 c59>
                Update on Apr 30, 2018
              </Text>
            </View>
            <ICChange />
          </View>
          <View
            marginH-small
            style={{height: 1, backgroundColor: Colors.cef}}
          />
          <View row centerV spread paddingT-small paddingH-medium paddingB-40>
            <Picker
              useNativePicker
              value={countryChange}
              onChange={(nativePickerValue: string) =>
                setCountryChange(nativePickerValue)
              }
              containerStyle={{marginTop: 20, width: width * 0.3}}
              renderPicker={() => {
                return (
                  <View row centerV width={width * 0.2}>
                    <Image
                      marginR-8
                      source={
                        countryChange === 'VND'
                          ? Assets.images.vietnam
                          : Assets.images.usa
                      }
                    />
                    <Text M16 c04 marginR-9>
                      {countryChange}
                    </Text>
                    <Image source={Assets.icons.ic_arr_down} />
                  </View>
                );
              }}
              wheelPickerProps={{
                style: {width: 200},
                color: Colors.green30,
                labelStyle: {fontSize: 30, fontFamily: FONTS.bold},
                itemHeight: 50,
              }}
              selectLabelStyle={{color: Colors.green30}}
              cancelLabelStyle={{color: Colors.green30}}>
              {options.map(option => (
                <Picker.Item
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </Picker>
            <Text B30 c04>
              1,000.00
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ExchangeMoneyScreen;

const styles = StyleSheet.create({});
