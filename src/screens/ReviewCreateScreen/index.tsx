import React, { useCallback, useState, useEffect, useRef } from 'react'
import { StyleSheet, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { View, Text, Colors, Assets, Image, KeyboardAwareScrollView } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FONTS } from 'config/FoundationConfig'
import { width, height } from 'config/scaleAccordingToDevice';
import BaseButton from 'components/BaseButton';
import Routes from 'config/Routes';
import Content from 'components/Content';
import EditTitleScreen from './EditTitleScreen'
import UploadImgScreen from './UploadImgScreen'
import ReviewInputScreen from './ReviewInputScreen'

const ReviewCreateScreen = () => {
    const navigation = useNavigation();
    const routes = useRoute();
    const [title, setTitle] = useState<string>('');
    const [overview, setOverview] = useState<string>('');
    const [screen, setScreen] = useState<number>(0);
    const [uri, setUri] = useState<string>('');
    const [img, setImg] = useState<string>('');
    const scrollViewRef = useRef();
    const onGoBack = useCallback(() => navigation.goBack(), []);
    const onBackPreviosScreen = useCallback(() => setScreen(key => key - 1), [screen]);

    useEffect(() => {
        renderScreen(screen);
    }, [screen])

    useEffect(() => {
        if (routes.params?.img) {
            setImg(routes.params?.img);
            setUri('');
        } 
        if (routes.params?.uri) {
            setUri(routes.params?.uri);
            setImg('');
        }
    }, [routes.params?.img, routes.params?.uri]);

    useEffect(() => {
        if (routes.params?.keyScreen) {
            setScreen(routes.params?.keyScreen);
        }
    }, [routes.params?.keyScreen]);

    const renderScreen = (key: number) => {
        scrollViewRef.current.scrollTo({ x: key * width, animated: true });
    }

    const onChangeTitle = (text: string) => setTitle(text);
    const onChangeOverview = (text: string) => setOverview(text);

    const onGoUploadTripCover = React.useCallback(() => {
        navigation.navigate(Routes.UploadTripCover, {
            from: Routes.CreateReview,
            keyScreen: 1,
            isBackground: true
        });
    }, []);

    return (
        <View flex backgroundColor={Colors.white}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
            >
                <EditTitleScreen onGoBack={onGoBack} title={title} onChangeTitle={onChangeTitle} setScreen={setScreen} />
                <UploadImgScreen
                    onBackPreviosScreen={onBackPreviosScreen}
                    title={title}
                    uri={uri}
                    setUri={setUri}
                    img={img}
                    setImg={setImg}
                    setScreen={setScreen}
                    onGoUploadTripCover={onGoUploadTripCover}
                />
                <ReviewInputScreen
                    overview={overview}
                    onBackPreviosScreen={onBackPreviosScreen}
                    onChangeOverview={onChangeOverview}
                    setOverview={setOverview}
                />
            </ScrollView>
            {
                screen === 2 &&
                <View width={width} height={60} row style={styles.bottom} absB backgroundColor={Colors.white}>
                    <View flex center>
                        <Image source={Assets.icons.ic_tab_public} />
                        <Text M10 c83>Public</Text>
                    </View>
                    <View flex center>
                        <Image source={Assets.icons.ic_tab_publish} />
                        <Text M10 cf15>Publish Reviews</Text>
                    </View>
                    <View flex center>
                        <Image source={Assets.icons.ic_tab_preview} />
                        <Text M10 c83>Preview</Text>
                    </View>
                </View>
            }
        </View>
    )
}

export default ReviewCreateScreen

const styles = StyleSheet.create({
    inputOverview: {
        fontFamily: FONTS.medium,
        fontSize: 18,
        paddingLeft: 0
    },
    inputReview: {
        fontFamily: FONTS.medium,
        fontSize: 16,
        paddingLeft: 0,
    },
    bottom: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    richTextBar: {
        borderStyle: 'dashed',
        borderColor: Colors.cd1,
        borderWidth: 1,
        borderRadius: 0.001
    }
})
