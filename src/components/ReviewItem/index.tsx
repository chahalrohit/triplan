import React, { useState, useCallback } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text, Image, Assets, Colors } from 'react-native-ui-lib';

export interface ReviewProps {
    avatar: string;
    name: string;
    comment: string;
}

const NUMBER_OF_LINES = 3;

const ReviewItem: React.FC<ReviewProps> = ({
    avatar,
    name,
    comment
}) => {
    const [fullLength, setFullLength] = useState<number>(NUMBER_OF_LINES);
    const [numberOflines, setNumberOflines] = useState<number>(NUMBER_OF_LINES);
    const [isShowMore, setIsShowMore] = useState<boolean>(false);

    const onPressShowMore = useCallback(() => {
        setNumberOflines(value => value === NUMBER_OF_LINES ? fullLength : NUMBER_OF_LINES);
        setIsShowMore(value => !value)
    }, [isShowMore, numberOflines, fullLength])

    return (
        <View row paddingH-medium backgroundColor={Colors.white} paddingV-small>
            <View top>
                <Image source={Assets.images[avatar]} width={32} height={32} />
            </View>
            <View flex paddingL-small>
                <Text B14 c04>{name}</Text>
                <Text M14 c35
                    numberOfLines={numberOflines}
                    onTextLayout={({ nativeEvent: { lines } }) =>
                        setFullLength(lines?.length)
                    }
                >
                    {comment}
                </Text>
                {
                    fullLength !== NUMBER_OF_LINES &&
                    <View right marginT-small>
                        <TouchableOpacity onPress={onPressShowMore}>
                            <Text B13 c04 uppercase> {isShowMore ? 'Show Less Review' : 'Show Full Review'}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

export default ReviewItem;

const styles = StyleSheet.create({})
