import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Colors, Assets, Image } from 'react-native-ui-lib'
import NavBar from 'components/NavBar'
import GuideModal from './GuideModal'
import { width } from 'config/scaleAccordingToDevice'
import Routes from 'config/Routes'
import { FocusAwareStatusBar } from 'components/FocusAwareStatusBar'

export interface Country {
    city: string,
    country: string,
    thumbnail: any,
    isDownload?: boolean
}

const DATA: Country[] = [
    {
        city: 'London',
        country: 'UK',
        thumbnail: require('../../images/img_london.png')
    },
    {
        city: 'Paris',
        country: 'France',
        thumbnail: require('../../images/img_paris.png')
    },
    {
        city: 'New York',
        country: 'USA',
        thumbnail: require('../../images/img_new_york.png')
    },
    {
        city: 'Boston',
        country: 'USA',
        thumbnail: require('../../images/img_boston.png')
    },
    {
        city: 'Seoul',
        country: 'Korea',
        thumbnail: require('../../images/img_paris.png')
    },
]

const TravelGuideScreen = () => {
    const navigate = useNavigation();
    const [isShow, setIsShow] = useState<boolean>(false);
    const [selected, setSelected] = useState<Country>({
        city: '',
        country: '',
        thumbnail: ''
    });
    const [listDownload, setListDownload] = useState<Country[]>([]);
    const [list, setList] = useState<Country[]>(DATA);

    const onOpenModal = (item: Country) => {
        setSelected(item);
        setIsShow(true)
    }

    const onDownload = (item: Country) => {
        const downloadItem : Country = {
            ...item,
            isDownload: true
        }
        setListDownload([...listDownload, downloadItem]);
        const newList = list.filter(i => i.city !== item.city);
        setList(newList);
        setIsShow(false);
    }

    const navigateDetail = (item : Country) => navigate.navigate(Routes.GuideDetailTab, {
        headerName: item.city
    })

    const renderItem = (item: Country, index: number) => {
        const onPressFunc = () => {
            if(item.isDownload) {
                navigateDetail(item);
            } else {
                onOpenModal(item);
            }
        };
        return (
            <View marginV-small width={width * 0.5} key={index}>
                <TouchableOpacity onPress={onPressFunc}>
                    <View flex center>
                        <Image source={item.thumbnail} />
                    </View>
                    <View flex paddingL-32>
                        <Text B16 c35 marginT-small>{item.city}</Text>
                        <Text M12 c83>{item.country}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

    const ListHeader = ({ title }: { title: string }) => (
        <View paddingL-24 paddingT-medium>
            <Text B14 c59>{title}</Text>
        </View>
    )

    return (
        <View flex backgroundColor={Colors.cf2} >
            <FocusAwareStatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar title='Travel Guide' rightIcon={Assets.icons.ic_search_24} />
            <ScrollView style={{ flex: 1 }}>
                {
                    listDownload.length > 0 &&
                    <>
                        <ListHeader title='My city guides' />
                        <View style={styles.Grid}>
                            {listDownload.map(renderItem)}
                        </View>
                    </>
                }
                <ListHeader title='Available city' />
                <View style={styles.Grid}>
                    {list.map(renderItem)}
                </View>
            </ScrollView>
            {
                isShow &&
                <GuideModal
                    {...selected}
                    onClose={() => setIsShow(false)}
                    onDownload={onDownload}
                />
            }
        </View>
    )
}

export default TravelGuideScreen

const styles = StyleSheet.create({
    itemFake: {
        backgroundColor: 'transparent'
    },
    Grid: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})
