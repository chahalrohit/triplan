import React, { useCallback } from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import { View, Colors } from 'react-native-ui-lib'
import { useNavigation, useRoute } from '@react-navigation/native';
import CoverScreen from './CoverScreen';
import Routes from 'config/Routes';

const TripDetailScreen = () => {
    const navigation = useNavigation();
    const routes = useRoute();
    const { isPreview } = routes?.params ?? { isPreview: false };

    const onGoBack = useCallback(() => navigation.goBack(), []);

    const onPressReadArticle = useCallback(() => {
        navigation.navigate(Routes.TripDetail, {
            isPreview
        });
    }, []);

    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor='transparent'
            />
            <View flex backgroundColor={Colors.white}>
                <CoverScreen onGoBack={onGoBack} onPressReadArticle={onPressReadArticle} />
            </View>
        </>
    )
}

export default TripDetailScreen

const styles = StyleSheet.create({})
