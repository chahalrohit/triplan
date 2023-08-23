import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text, Image, Assets, Colors } from 'react-native-ui-lib'

interface IRouteItem {
    type: string,
    icon: string,
    price: string,
    duration: string,
    onPressItem: () => void,
}

const RouteItem: React.FC<IRouteItem> = ({
    type,
    icon,
    price,
    duration,
    onPressItem
}) => {
    return (
        <TouchableOpacity onPress={onPressItem}>
            <View padding-medium>
                <View row spread centerV marginB-medium>
                    <View>
                        <Text B16 c35 marginB-8>{type}</Text>
                        <Image source={Assets.icons[icon]} />
                    </View>
                    <View row center>
                        <View right marginR-12>
                            <Text B14 cfe marginB-8>{price}</Text>
                            <Text M14 c35>{duration}</Text>
                        </View>
                        <Image source={Assets.icons.ic_arr_right} />
                    </View>
                </View>
                <View height={1} width='100%' backgroundColor={Colors.cef} />
            </View>
        </TouchableOpacity>
    )
}

export default RouteItem

const styles = StyleSheet.create({})
