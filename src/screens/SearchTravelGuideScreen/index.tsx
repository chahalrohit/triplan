import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList, SectionList, StatusBar } from 'react-native'
import { View, Text, Colors, Image, Assets } from 'react-native-ui-lib'
import { statusBarHeight } from 'config/scaleAccordingToDevice'
import { FONTS } from 'config/FoundationConfig'
import { DATA_RECENT, Search, DATA, SECTION_DATA, DATA_RECENT_2 } from './data'
import { useRoute, useNavigation } from '@react-navigation/native'
import Routes from 'config/Routes'
import { FocusAwareStatusBar } from 'components/FocusAwareStatusBar'

const SearchTravelGuideScreen = () => {
    const [search, setSearch] = useState<string>('');
    const route = useRoute();
    const navigation = useNavigation();

    const onChangeSearch = (text: string) => {
        setSearch(text);
    }

    const onClearSearch = () => {
        setSearch('');
    }

    const onNavigateResultScreen = (title: string) => navigation.navigate(Routes.SearchTravelResult, {
        title
    });

    const renderHeader = () => (
        <View backgroundColor={Colors.cef} paddingB-medium paddingH-medium style={{ paddingTop: statusBarHeight + 24 }}>
            <View row centerV paddingV-11 paddingH-18 backgroundColor={Colors.white} style={styles.searchInputWrap}>
                <Image source={Assets.icons.ic_search_24} width={16} height={16} />
                <TextInput
                    style={styles.searchInput}
                    value={search}
                    onChangeText={onChangeSearch}
                    placeholder='Search for destinations or activities…'
                    placeholderTextColor={Colors.cd1}
                    textAlignVertical='center'
                />
                {
                    search !== '' &&
                    <TouchableOpacity onPress={onClearSearch}>
                        <Image source={Assets.icons.ic_close_16} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )

    const renderRecentItem = (item: string, idx: number) => (
        <TouchableOpacity key={idx} onPress={() => onNavigateResultScreen(item)}>
            <View row centerV paddingV-small key={`${item}_${idx}`}>
                <Image source={Assets.icons.ic_history_search} />
                <Text marginL-18 M14 c35>{item}</Text>
            </View>
        </TouchableOpacity>
    )

    const renderRecentSearch = () => (
        <View flex>
            <View row spread centerV padding-medium>
                <View>
                    <Text B16 c35>Search nearby me</Text>
                    <Text M14 c83>{route.name === Routes.SearchTravelGuide ? 'Boston' : 'New York'}</Text>
                </View>
                <Image source={Assets.icons.ic_home_location} />
            </View>
            <ScrollView contentContainerStyle={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View flex padding-medium>
                    <Text B14 c83 uppercase marginB-10>recent searches</Text>
                    {route.name === Routes.SearchTravelGuide
                        ? DATA_RECENT.map((item, idx) => renderRecentItem(item, idx))
                        : DATA_RECENT_2.map((item, idx) => renderRecentItem(item, idx))
                    }
                </View>
            </ScrollView>
        </View>
    )

    const renderSearchItem = ({ item }: { item: Search }) => (
        <View paddingV-small paddingH-medium backgroundColor={Colors.white} style={{ borderBottomColor: Colors.cef, borderBottomWidth: 1 }}>
            <Text B16 c35>{item.name}</Text>
            <View row marginT-8>
                <Text M13 c83>{item.type1}</Text>
                <Text M13 c83 marginH-8>*</Text>
                <Text M13 c83>{item.type2}</Text>
            </View>
        </View>
    )

    const renderSearch = () => (
        <FlatList
            data={DATA}
            renderItem={renderSearchItem}
            keyExtractor={(_, idx) => `item_${idx}`}
            showsVerticalScrollIndicator={false}
        />
    )

    const renderSearchSection = () => (
        <View flex padding-medium>
            <SectionList
                sections={SECTION_DATA}
                renderItem={({ item }) => (
                    <View row centerV marginB-28>
                        <Image source={Assets.icons[item.icon]} marginR-20 />
                        <Text M14 c35>{item.searchVal}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    title !== '' ? <Text B14 c83 uppercase marginB-medium>{title}</Text> : null
                )}
                keyExtractor={(_, idx) => `item_${idx}`}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )

    const renderSearchByScreen = () => {
        if (route.name === Routes.Search) {
            return renderSearchSection();
        } else if (route.name === Routes.SearchTravelGuide) {
            return renderSearch();
        }
    }

    return (
        <View flex backgroundColor={Colors.white}>
            <FocusAwareStatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            {renderHeader()}
            {search === ''
                ? renderRecentSearch()
                : renderSearchByScreen()
            }
        </View>
    )
}

export default SearchTravelGuideScreen

const styles = StyleSheet.create({
    searchInput: {
        flex: 1,
        paddingVertical: 0,
        paddingLeft: 18,
        fontFamily: FONTS.medium,
        color: Colors.c35
    },
    searchInputWrap: {
        borderRadius: 100,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})
