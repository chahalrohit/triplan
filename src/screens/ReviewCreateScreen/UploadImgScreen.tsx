import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text, Assets, Colors, Image } from 'react-native-ui-lib'
import NavBar from 'components/NavBar';
import { width, height } from 'config/scaleAccordingToDevice';
import BaseButton from 'components/BaseButton';

interface IProps {
    onBackPreviosScreen: () => void,
    setUri: (text: string) => void,
    setImg: (text: string) => void,
    img: string
    title: string,
    uri: string,
    onGoUploadTripCover: () => void,
    setScreen: (index: number) => void,
}

const UploadImgScreen = React.memo<IProps>(({ onBackPreviosScreen, setUri, setImg, img, title, onGoUploadTripCover, uri, setScreen }) => {
    console.log('img :>> ', img);
    return (
        <View style={styles.container}>
            <NavBar
                leftIcon={'back'}
                onLeftClick={() => {
                    onBackPreviosScreen();
                    setUri('');
                    setImg('');
                }}
                rightIcon={Assets.icons.ic_article_menu}
                subRightIcon='save'
                style={{ backgroundColor: 'transparent' }}
            />
            <View flex paddingT-32 paddingH-medium>
                <Text B14 c59 uppercase marginB-small>0 Place</Text>
                <Text M30 c35>
                    {title}
                </Text>
                <View flex center style={{ justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={onGoUploadTripCover}>
                        <View center padding-50 style={{ borderWidth: 1, borderRadius: 10, borderColor: Colors.cd1 }}>
                            <Image source={Assets.icons.ic_upload_cover_black} />
                            <Text M14 c59>Upload Cover</Text>
                        </View>
                    </TouchableOpacity>
                    <BaseButton disable={uri === '' && img === ''} primary label='Next to Step 3/3' onPress={() => setScreen(2)} />
                </View>
            </View>
            <View absT width={width} height={height} style={{ zIndex: -1 }}>
                {
                    (uri !== '' || img !== '') && <Image source={uri ? { uri } : img} width={width} height={height} />
                }
            </View>
        </View>
    )
})

export default UploadImgScreen

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
})
