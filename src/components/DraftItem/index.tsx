import React from 'react';
import { View, Image, Colors, Assets, Text } from 'react-native-ui-lib';
import { shadow } from 'config/scaleAccordingToDevice';

interface Item {
    thumbnail: any,
    title: string,
    time: string
}

const DraftItem : React.FC<Item> = ({
    thumbnail,
    title,
    time
}) => (
    <View paddingV-small marginB-small backgroundColor={Colors.white} style={{...shadow}}>
        <View>
            <Image source={thumbnail} cover/>
            <View absR style={{ marginTop: 18, marginRight: 17 }}>
                <Image source={Assets.icons.ic_delete_draft}/>
            </View>
        </View>
        <View paddingH-small marginT-8>
            <Text B16 c35>{title}</Text>
            <Text M13 cd1>{time}</Text>
        </View>
    </View>
)

export default DraftItem;