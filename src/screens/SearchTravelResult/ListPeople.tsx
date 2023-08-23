import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { View } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { width, height } from 'config/scaleAccordingToDevice'
import FollowItem, { FollowItemProps } from 'components/FlowItem'

interface Props {
    data: FollowItemProps[],
    onClose: () => void,
}

const ListPeopleView: React.FC<Props> = ({
    data,
    onClose
}) => {

    const renderFollowingItem = ({ item }: { item: FollowItemProps }) => {
        return <FollowItem {...item} isFollowing />
    }
    
    return (
        <View absT width={width} height={height} backgroundColor='white'>
            <NavBar title={'Who have been here'} leftIcon='close' onLeftClick={onClose} />
            <FlatList
                data={data}
                renderItem={renderFollowingItem}
                keyExtractor={(_, idx) => `item_${idx}`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ListPeopleView

const styles = StyleSheet.create({})
