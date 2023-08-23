import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Colors } from 'react-native-ui-lib'
import DraftItem from 'components/DraftItem'

interface Props {
    data: any[],
}

const DraftList: React.FC<Props> = ({
    data
}) => {

    const renderDraftItem = (item: any, idx: number) => {
        return (
            <DraftItem {...item} key={idx} />
        )
    }

    return (
        <View flex backgroundColor={Colors.cf7}>
            <View flex>
                {data.map(renderDraftItem)}
            </View>
        </View>
    )
}

export default DraftList

const styles = StyleSheet.create({})
