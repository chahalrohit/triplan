import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-ui-lib'
import DraftList from './DraftList'
import ReviewList from './ReviewList'
import PublishList from './PublishList'
import WishedList from './WishedList'

interface Props {
    itemKey: string,
    data: any[],
}

const TabAction: React.FC<Props> = ({
    itemKey,
    data
}) => {
    const renderListPost = (itemKey: string, data: any[]) => {
        switch (itemKey) {
            case 'Draft':
                return <DraftList data={data} />
            case 'Reviews':
                return <ReviewList data={data} />
            case 'Published':
                return <PublishList data={data} />
            case 'Wishlisteds':
                return <WishedList data={data} />
            default:
                break;
        }
    }

    return (
        <View flex>
            {renderListPost(itemKey, data)}
        </View>
    )
}

export default TabAction;

const styles = StyleSheet.create({ });
