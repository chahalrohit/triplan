import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { View, Text, Assets, KeyboardAwareScrollView, Colors } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { FONTS } from 'config/FoundationConfig'
import { width, height } from 'config/scaleAccordingToDevice'

interface IProps {
    onGoBack: () => void,
    title: string,
    onChangeTitle: (text: string) => void,
    setScreen: (idx: number) => void,
}

const EditTitleScreen = React.memo<IProps>(({ onGoBack, title, onChangeTitle, setScreen }) => {
    return (
        <View style={styles.container}>
            <NavBar
                leftIcon={'close'}
                onLeftClick={onGoBack}
                rightIcon={Assets.icons.ic_article_menu}
                subRightIcon='save'
            />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="interactive"
            >
                <View flex paddingT-32 paddingH-medium>
                    <Text B14 c59 uppercase marginB-small>
                        reviews title
                    </Text>
                    <View flex>
                        <TextInput
                            value={title}
                            onChangeText={onChangeTitle}
                            placeholder='Give you review title'
                            placeholderTextColor={Colors.cd15}
                            style={{
                                fontFamily: FONTS.medium,
                                fontSize: 28,
                                paddingLeft: 0,
                            }}
                            onEndEditing={() => {
                                if (title.length !== 0) setScreen(1);
                            }}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
})

export default EditTitleScreen

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
})
