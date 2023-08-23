import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { View, Colors } from 'react-native-ui-lib';
import DATA from './data';
import FollowItem, { FollowItemProps } from 'components/FlowItem';

const FollowingList : React.FC = () => {

    const renderFollowingItem = ({item} : {item: FollowItemProps}) => {
        return <FollowItem {...item} isFollowing />
    }
    
    return (
        <View flex backgroundColor={Colors.white}>
            <View flex>
                <FlatList
                    data={DATA}
                    renderItem={renderFollowingItem}
                    keyExtractor={(_, idx) => `item_${idx}`}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                />
            </View>
        </View>
    )
}

export default FollowingList;

const styles = StyleSheet.create({})
