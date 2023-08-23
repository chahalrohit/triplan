import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { View, Colors, Text } from 'react-native-ui-lib'
import FollowItem, { FollowItemProps } from 'components/FlowItem'
import DATA from './data'

const FollowerList: React.FC = () => {
    
    const renderFollowerItem = ({item} : {item: FollowItemProps}) => {
        return <FollowItem {...item}/>
    }

    return (
        <View flex backgroundColor={Colors.white}>
            <View flex>
                <FlatList
                    data={DATA}
                    renderItem={renderFollowerItem}
                    keyExtractor={(_, idx) => `item_${idx}`}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                />
            </View>
        </View>
    )
}

export default FollowerList;

const styles = StyleSheet.create({})
