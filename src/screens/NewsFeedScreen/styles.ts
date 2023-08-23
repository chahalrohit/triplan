import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import { height, heightHeader, shadow } from 'config/scaleAccordingToDevice';

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: -30,
        left: 0,
        zIndex: -1
    },
    floatingBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 28,
        backgroundColor: Colors.cf15,
        width: 48,
        height: 48,
        ...shadow,
        borderRadius: 24,
        zIndex: 9
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.cmodal,
        width: '100%',
        height: (height + heightHeader)
    },
    actionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: Colors.white,
        width: 56,
        height: 56,
        ...shadow,
        borderRadius: 28,
    }
});

export default styles;