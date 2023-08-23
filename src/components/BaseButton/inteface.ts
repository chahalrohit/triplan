import { Colors } from 'react-native-ui-lib';

export default interface Props {
    label: string,
    onPress: () => void,
    primary?: boolean,
    secondary?: boolean,
    disable?: boolean,
    small?: boolean,
    outline?: boolean,
    style?: any,
    badge?: number
}
export const PRIMARY = {
    light: Colors.c04,
    dark: Colors.c03
}

export const SECONDARY = {
    light: Colors.cf15,
    dark: Colors.cdd
}

export const OUTLINE = {
    light: Colors.white,
    dark: Colors.c04
}