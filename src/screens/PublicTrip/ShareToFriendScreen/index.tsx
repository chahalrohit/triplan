import React, { useState, useCallback } from 'react'
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import { width } from 'config/scaleAccordingToDevice'
import BaseButton from 'components/BaseButton'
import Checkbox from 'components/Checkbox'

const DATA = [
    {
        name: 'Ruth George'
    },
    {
        name: 'Calvin Henderson'
    },
    {
        name: 'Alma Love'
    },
    {
        name: 'Jayden Mack'
    },
    {
        name: 'Sue Marsh'
    },
    {
        name: 'Darrell Bridges'
    },
    {
        name: 'Nelle Hawkins'
    },
    {
        name: 'Nelle Hawkins'
    },
    {
        name: 'Nelle Hawkins'
    },
    {
        name: 'Nelle Hawkins'
    },
]

const ShareToFriendScreen = () => {
    const { navigate } = useNavigation();
    const [listFriends, setListFriends] = useState<string[]>([]);
    const prevName = useNavigationState(
        state => state.routes[state.index - 1].name,
    );
    const goPrevScreen = React.useCallback(() => {
        navigate(prevName, {
            share: listFriends.length
        });
    }, [listFriends]);

    const onClear = useCallback(() => setListFriends([]), [listFriends]);

    const onChangeValue = useCallback((value) => {
        if (listFriends.indexOf(value) !== -1) {
            setListFriends(listFriends.filter(item => item !== value));
        } else {
            setListFriends([...listFriends, value])
        }
    }, [listFriends]);

    return (
        <View flex backgroundColor={Colors.white}>
            <NavBar title='Share to Friend' leftIcon="back" onLeftClick={goPrevScreen} />
            <View backgroundColor={Colors.cf7} paddingV-small paddingH-medium row center>
                <Image source={Assets.icons.ic_search_24} width={16} height={16} />
                <View paddingL-4 row flex style={{ flexWrap: 'wrap' }}>
                    {
                        listFriends.map((item: string, idx: number) => (
                            <View paddingV-4 paddingH-8 backgroundColor={Colors.cd1} key={idx} marginB-4 marginH-4 br100>
                                <Text M13 c59>{item}</Text>
                            </View>
                        ))
                    }
                </View>
                {
                    listFriends.length > 0 &&
                    <TouchableOpacity onPress={onClear}>
                        <Image source={Assets.icons.ic_close_16} width={16} height={16} />
                    </TouchableOpacity>
                }
            </View>
            <View flex padding-24>
                <Text B14 c59 uppercase marginB-medium>ALL FRIENDS ON FACEBOOK</Text>
                <View>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }: { item: any }) => {
                            return (
                                <View row centerV marginB-medium>
                                    <View flex-2 row centerV>
                                        <Image source={Assets.images.avatar} />
                                        <Text B16 c59 marginL-small>{item.name}</Text>
                                    </View>
                                    <View flex right>
                                        <Checkbox checked={listFriends.indexOf(item.name) !== -1} value={item.name} onValueChange={onChangeValue} />
                                    </View>
                                </View>
                            )
                        }}
                        contentContainerStyle={{ paddingBottom: 80 }}
                        keyExtractor={(_, idx) => `item_${idx}`}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View absB width={width} center style={{ bottom: 16 }}>
                    <BaseButton primary label={`share trip with ${listFriends.length} friends`} onPress={goPrevScreen} />
                </View>
            </View>
        </View>
    )
}

export default ShareToFriendScreen

const styles = StyleSheet.create({})
