export default interface Props {
    keyboardType?: KeyboardTypeOptions;
    value?: string;
    maxLength?: number;
    returnKeyType?: ReturnKeyType;
    onChange: (txt: string) => void,
    placeholder: string,
    iconLeft?: any,
    iconRight?: any,
    style?: any,
    refs?: any,
    numberOfLines?: number,
    onIcRightClick?: () => void,
    type?: 'text-input' | 'text-area', 
}

export type KeyboardType =
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';

export type KeyboardTypeIOS =
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search';

export type KeyboardTypeAndroid = 'visible-password';

export type KeyboardTypeOptions = KeyboardType | KeyboardTypeAndroid | KeyboardTypeIOS;

export type ReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';