import { StyleSheet, Dimensions, ViewStyle } from 'react-native';
import { Colors } from 'react-native-ui-lib';
import { PRIMARY, SECONDARY, OUTLINE } from './inteface';
import { shadow } from 'config/scaleAccordingToDevice';

const { width } = Dimensions.get('window');

type Styles = {
    wrapper: ViewStyle,
    primary: ViewStyle,
    secondary: ViewStyle,
    disable: ViewStyle,
    outline: ViewStyle,
    small: ViewStyle,
    badge: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    wrapper: {
        ...shadow,
        height: 50,
        width: width * 0.88,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.black,
        borderRadius: 100,
    },
    primary: {
        backgroundColor: PRIMARY.light
    },
    secondary: {
        backgroundColor: SECONDARY.light
    },
    disable: {
        backgroundColor: Colors.cef,
        elevation: 0,
        shadowOpacity: 0,
    },
    outline: {
        backgroundColor: OUTLINE.light,
        borderWidth: 1,
        borderColor: OUTLINE.dark
    },
    small: {
        height: 'auto',
        width: 'auto',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    badge: { borderRadius: 9, right: -8, top: -8 }
})

export default styles;