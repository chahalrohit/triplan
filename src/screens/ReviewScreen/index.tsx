import React, { useCallback } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { View, Colors } from 'react-native-ui-lib';
import NavBar from 'components/NavBar';
import { useNavigation } from '@react-navigation/native';
import { DATA_REVIEW } from './constant';
import ReviewItem from 'components/ReviewItem';
import BaseButton from 'components/BaseButton';
import { width } from 'config/scaleAccordingToDevice';

const ReviewScreen = () => {
    const navigation = useNavigation();

    const onGoBack = useCallback(() => navigation.goBack(), []);

    return (
        <View flex backgroundColor={Colors.white}>
            <NavBar title='Reviews' leftIcon='close' onLeftClick={onGoBack} />
            <View flex>
                <FlatList
                    data={DATA_REVIEW}
                    renderItem={({ item }) => {
                        return <ReviewItem {...item} />
                    }}
                    keyExtractor={(_, idx) => `item_${idx}`}
                    showsVerticalScrollIndicator={false}
                    extraData={DATA_REVIEW}
                />
                <View absB width={width} center style={{ bottom: 24 }}>
                    <BaseButton primary label='write a review' onPress={() => { }} />
                </View>
            </View>
        </View>
    )
}

export default ReviewScreen;

const styles = StyleSheet.create({})
