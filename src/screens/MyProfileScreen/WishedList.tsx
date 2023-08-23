import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Colors } from 'react-native-ui-lib'
import Article from 'components/Article'

interface Props {
    data: any[],
}

const WishedList: React.FC<Props> = ({
    data
}) => {
    return (
        <View flex backgroundColor={Colors.cf7}>
            {data.map((item: any, idx: number) => {
                const length = data.length;
                const zIndex = length - idx;
                return <Article
                    key={idx}
                    {...item}
                    isLast={idx === (length - 1)}
                    style={{ zIndex }}
                    isWishedList
                />
            })}
        </View >
    )
}

export default WishedList

const styles = StyleSheet.create({})
