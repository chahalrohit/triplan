import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Image, Colors, Assets } from 'react-native-ui-lib'

interface IRoute {
    type: 'start' | 'destination',
    icon: string,
    color: string
}

const Route: React.FC<IRoute> = ({
    type,
    icon,
    color,
}) => {
    return (
        <View center>
            <View width={8} height={8} backgroundColor={Colors.white} style={styles.dot}></View>
            {
                type === 'start' &&
                <>
                    <View height={80} width={2} backgroundColor={color} />
                    <View absT style={{ top: 16 }}>
                        <Image source={Assets.icons[icon]} />
                    </View>
                </>
            }
        </View>
    )
}

export default Route

const styles = StyleSheet.create({
    dot: { borderRadius: 4, borderWidth: 2, borderColor: Colors.c04 }
})
