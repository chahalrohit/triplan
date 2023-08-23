import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuOption: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        position: 'absolute',
        bottom: -138,
        right: 10,
        borderRadius: 10,
        zIndex: 1,
    },
    btnOption: {
        paddingVertical: 16,
        paddingLeft: 16,
    }
})

export default styles;