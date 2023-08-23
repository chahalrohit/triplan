import { StyleSheet, Dimensions, ViewStyle, ImageStyle } from 'react-native';
import { FONTS } from 'config/FoundationConfig';
import { Colors } from 'react-native-ui-lib';

const { width } = Dimensions.get('window');

type Style = {
    wrapper: ViewStyle,
    focusWrapper: ViewStyle,
    input: ViewStyle,
    wrapperArea: ViewStyle
}

const styles = StyleSheet.create<Style>({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width * 0.88,
        height: 50,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#DFEFFE',
    },
    focusWrapper: {
        borderColor: '#046FDB',
    },
    input: { 
        flex: 4,
        color: Colors.c35,
        fontFamily: FONTS.medium,
        fontSize: 14,
        paddingVertical: 16,
        paddingLeft: 0,
    },
    wrapperArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#DFEFFE',
        paddingHorizontal: 24,
    },
});

export default styles;