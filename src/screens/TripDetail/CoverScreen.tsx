import React from 'react'
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import { View, Text, Colors, Assets, Image, Avatar } from 'react-native-ui-lib'
import NavBar from 'components/NavBar';
import { width, height } from 'config/scaleAccordingToDevice';
import { useRoute } from '@react-navigation/native';

interface IProps {
    onGoBack: () => void,
    onPressReadArticle: () => void,
}

const CoverScreen: React.FC<IProps> = ({
    onGoBack,
    onPressReadArticle
}) => {
    const route = useRoute();
    return (
        <ImageBackground source={Assets.images.thumbnail_21} style={styles.imgBackground}>
            <NavBar leftIcon='back' onLeftClick={onGoBack} iconColor={Colors.white} rightIcon={Assets.icons.ic_article_menu} style={{ backgroundColor: 'transparent' }} />
            <View flex paddingH-medium>
                <View row centerV marginB-medium>
                    <Text cef M13>3 Day </Text>
                    <View center marginH-8>
                        <View width={2} height={2} style={{ borderRadius: 1 }} backgroundColor={Colors.cef} />
                    </View>
                    <Text cef M13>6 Place </Text>
                    {
                        !route.params?.isPreview &&
                        <View backgroundColor={Colors.cf15} marginL-small paddingH-8 paddingV-4>
                            <Text M10 white uppercase>Trending Trip</Text>
                        </View>
                    }
                </View>
                <View flex centerV>
                    <Text M30 white>3 Days in New York City for First Time Visitors</Text>
                    <View row centerV marginT-small marginB-medium>
                        <Text cef M13>145 comments </Text>
                        <View center marginH-8>
                            <View width={2} height={2} style={{ borderRadius: 1 }} backgroundColor={Colors.cef} />
                        </View>
                        <Text cef M13>150K views </Text>
                    </View>
                    <Text D18 white>
                        The city that never sleeps. The Big Apple. Concrete jungle. New York City.
                            </Text>
                </View>
                <View flex bottom right row spread>
                    <View paddingV-12 row centerV marginB-8>
                        <Avatar source={Assets.images.avatar2} size={40} />
                        <View marginL-8>
                            <Text B14 white >Chase McGee </Text>
                            <Text white M13>Apr 1, 2018 </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={onPressReadArticle}>
                        <Image source={Assets.icons.ic_read_article} marginB-medium />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default CoverScreen;

const styles = StyleSheet.create({
    imgBackground: {
        width: width,
        height: height
    }
})
