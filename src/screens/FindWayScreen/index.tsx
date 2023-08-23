import React from 'react'
import { StyleSheet, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { View, Text, Colors, Assets, Image } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { useNavigation } from '@react-navigation/native'
import BaseButton from 'components/BaseButton'
import { FONTS } from 'config/FoundationConfig'

const FindWayScreen = () => {
    const navigation = useNavigation();

    const onGoBack = () => navigation.goBack();

    const InputLocation = ({ label, placeholder, editable = true }: { label: string, placeholder: string, editable?: boolean }) => (
        <View marginB-small>
            <Text M14 c59 marginB-8>{label}</Text>
            <View row centerV spread paddingH-medium height={50} style={styles.input}>
                <Image source={Assets.icons.ic_pin_16} />
                <View flex paddingL-medium>
                    <TextInput
                        placeholder={placeholder}
                        style={{
                            color: '',
                            fontSize: 14,
                            fontFamily: FONTS.medium
                        }}
                        editable={editable}
                    />
                </View>
                <Image source={Assets.icons.ic_instagram_16} />
            </View>
        </View>
    )

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View flex backgroundColor={Colors.white}>
                <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
                <NavBar title='How to get there' leftIcon='close' onLeftClick={onGoBack} />
                <View flex paddingH-medium marginT-40>
                    <InputLocation label='From' placeholder='Enter your location' />
                    <InputLocation label='To' placeholder='Boston Habor Hotel' editable={false} />
                    <BaseButton primary label='Search' onPress={() => { }} style={{ marginTop: 16 }} />
                    <View flex centerH paddingT-48>
                        <Image source={Assets.images.logoRome} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FindWayScreen

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: Colors.cdf,
        borderRadius: 100
    }
})
