import React from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, TextInput } from 'react-native'
import { View, Assets, Colors } from 'react-native-ui-lib'
import { width, height } from 'config/scaleAccordingToDevice';
import NavBar from 'components/NavBar';
import { FONTS } from 'config/FoundationConfig';
import Content from 'components/Content';

interface IProps {
    onBackPreviosScreen: () => void,
    setOverview: (text: string) => void,
    overview: string,
    onChangeOverview: (text: string) => void,
}

const ReviewInputScreen = React.memo<IProps>(({ onBackPreviosScreen, setOverview, overview, onChangeOverview }) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <NavBar
                leftIcon={'back'}
                onLeftClick={() => {
                    onBackPreviosScreen();
                    setOverview('');
                }}
                rightIcon={Assets.icons.ic_article_menu}
                subRightIcon='save'
            />
            <ScrollView>
                <View paddingT-32 paddingH-medium>
                    <TextInput
                        value={overview}
                        onChangeText={onChangeOverview}
                        placeholder='Overview, about your reviews…'
                        placeholderTextColor={Colors.cd15}
                        multiline
                        textAlignVertical={'top'}
                        numberOfLines={5}
                        style={{
                            fontFamily: FONTS.medium,
                            fontSize: 18,
                            paddingLeft: 0
                        }}
                    />
                    <View height={2} width={32} backgroundColor={Colors.cfe} marginV-medium />
                </View>
                <Content />
            </ScrollView>
            <View style={{ height: 60, marginTop: 10 }} />
        </KeyboardAvoidingView>
    )
})

export default ReviewInputScreen

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
})
