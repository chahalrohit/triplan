import React, { useState } from 'react'
import { StyleSheet, ScrollView, StatusBar, TouchableWithoutFeedback, ViewStyle } from 'react-native'
import { View, Colors, Text, Image, Assets } from 'react-native-ui-lib'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import NavBar from 'components/NavBar'
import TypeFilter from 'components/TypeFilter'
import SelectionFilter from 'components/SelectionFilter'
import SliderFilter from 'components/SilderFilter'
import BaseButton from 'components/BaseButton'

export enum TYPE {
    TRIP,
    PLACE,
    HOTEL
}

const FilterScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { type } = route?.params ?? { type: TYPE.HOTEL };
    const [costArr, setCostArr] = useState<Array<number>>([750, 1200]);
    const [priceArr, setPriceArr] = useState<Array<number>>([10, 250]);
    const [dayArr, setCostDay] = useState<Array<number>>([3, 4]);
    const [hotel, setHotel] = useState<string>('');
    const [rate, setRate] = useState<number>(3);
    const [distance, setDistance] = useState<Array<number>>([5]);

    const onGoBack = () => navigation.goBack();

    const ButtonHotel = ({ image, onPress, style, isActive }: { image: string, onPress: () => void, style?: ViewStyle, isActive: boolean }) => (
        <TouchableWithoutFeedback onPress={onPress}>
            <View flex paddingV-20 paddingH-40 center
                style={[
                    { borderWidth: 2, borderColor: isActive ? Colors.c04 : Colors.cef, borderRadius: 4 },
                    style
                ]}
            >
                <Image source={Assets.images[image]} />
            </View>
        </TouchableWithoutFeedback>
    )

    const HotelProvider = () => (
        <View marginB-medium>
            <Text B14 c59 uppercase marginB-small>HOTEL PROVIDER</Text>
            <View spread row marginB-small>
                <ButtonHotel image='airbnb' onPress={() => setHotel('airbnb')} style={{ marginRight: 16 }} isActive={hotel === 'airbnb'} />
                <ButtonHotel image='booking' onPress={() => setHotel('booking')} isActive={hotel === 'booking'} />
            </View>
            <View spread row>
                <ButtonHotel image='agoda' onPress={() => setHotel('agoda')} style={{ marginRight: 16 }} isActive={hotel === 'agoda'} />
                <ButtonHotel image='expedia' onPress={() => setHotel('expedia')} isActive={hotel === 'expedia'} />
            </View>
        </View>
    )

    const RateProvider = () => (
        <View marginB-medium>
            <Text B14 c59 uppercase marginB-small>Rating</Text>
            <AirbnbRating
                defaultRating={rate}
                showRating={false}
                selectedColor={Colors.cfe}
                onFinishRating={(rating: number) => setRate(rating)}
                starContainerStyle={{ paddingVertical: 16 }}
            />
        </View>
    )

    return (
        <View flex backgroundColor={Colors.white}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent" />
            <NavBar leftIcon='close' title='Filter' onLeftClick={onGoBack} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View padding-medium>
                    {
                        type === TYPE.HOTEL &&
                        <>
                            <HotelProvider />
                            <RateProvider />
                            <SliderFilter
                                label="Price"
                                subLabel={`$${priceArr[0]} - $${priceArr[1]}`}
                                defaultValues={[10, 250]}
                                max={1000}
                                min={0}
                                step={10}
                                onChange={values => setPriceArr(values)}
                                style={{ marginBottom: 40 }}
                            />
                            <SliderFilter
                                label="Distance"
                                subLabel={`${distance} mil`}
                                defaultValues={[5]}
                                isSliderOneValue
                                max={50}
                                min={0}
                                onChange={values => setDistance(values)}
                            />
                        </>
                    }
                    {
                        type === TYPE.TRIP &&
                        <>
                            <TypeFilter
                                title='Sort by'
                                list={['Relevance', 'Recent', 'Popularity']}
                                onPressValue={(value) => console.log(`value`, value)}
                                style={{ marginBottom: 40 }}
                            />
                            <SelectionFilter
                                label='Select Countries'
                                data={['Albania', 'Austria', 'Bahrain', 'Belize', 'Bahrain1', 'Belize2']}
                                onSelectItem={(value) => console.log(`value`, value)}
                                isShowAll={true}
                                style={{ marginBottom: 40 }}
                            />
                            <SliderFilter
                                label="Estimate cost trip"
                                subLabel={`$${costArr[0]} - $${costArr[1]}`}
                                defaultValues={[750, 1200]}
                                max={2500}
                                min={300}
                                step={50}
                                onChange={values => setCostArr(values)}
                                style={{ marginBottom: 40 }}
                            />
                            <SliderFilter
                                label="Trip duration"
                                subLabel={`${dayArr[0]} - ${dayArr[1]} days`}
                                defaultValues={[3, 4]}
                                max={7}
                                min={2}
                                onChange={values => setCostDay(values)}
                            />
                        </>
                    }
                    {
                        type === TYPE.PLACE &&
                        <>
                            <TypeFilter
                                title='Sort order'
                                list={['Nearby me', 'Recommended']}
                                onPressValue={(value) => console.log(`value`, value)}
                                style={{ marginBottom: 40 }}
                            />
                            <TypeFilter
                                title='Filter by price'
                                list={['Fee', '$', '$$', '$$$']}
                                onPressValue={(value) => console.log(`value`, value)}
                                style={{ marginBottom: 40 }}
                            />
                            <SelectionFilter
                                label='FILTER BY SUBCATEGORY'
                                data={['Hotel', 'Hostel', 'Guesthouse', 'Apartment', 'Boutique Hotel', 'Cabins']}
                                onSelectItem={(value) => console.log(`value`, value)}
                            />
                        </>
                    }
                </View>
                <View paddingV-small center style={{ borderTopWidth: 1, borderTopColor: Colors.cf1 }}>
                    <BaseButton primary label={`Show ${(type === TYPE.TRIP || type === TYPE.HOTEL) ? '100+' : '50+'} results`} onPress={() => { }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({})
