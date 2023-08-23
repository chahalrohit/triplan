import React, { useState } from 'react';
import { TextInput, TouchableWithoutFeedback } from 'react-native';
import { View, Colors, Image } from 'react-native-ui-lib';
import Props from './interface';
import styles from './styles';

const InputText: React.FC<Props> = ({
    value,
    onChange,
    placeholder,
    iconLeft,
    iconRight,
    keyboardType,
    returnKeyType,
    maxLength,
    refs,
    style,
    onIcRightClick,
    numberOfLines,
    type = 'text-input',
    ...rest
}) => {

    const [isFocus, setIsFocus] = useState<boolean>(false);

    if (type === 'text-area') {
        return (
            <View style={[styles.wrapperArea, isFocus && styles.focusWrapper, style]}>
                <TextInput
                    ref={refs}
                    value={value}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    style={styles.input}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    placeholderTextColor={Colors.cd1}
                    multiline
                    numberOfLines={numberOfLines}
                    {...rest}
                />
            </View>
        )
    };

    return (
        <View style={[styles.wrapper, isFocus && styles.focusWrapper, style]}>
            <View flex center>
                {iconLeft &&
                    <Image source={iconLeft} tintColor={Colors.c83} width={16} height={16}/>
                }
            </View>
            <TextInput
                ref={refs}
                value={value}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                placeholder={placeholder}
                onChangeText={onChange}
                style={styles.input}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholderTextColor={Colors.cd1}
                numberOfLines={numberOfLines}
                {...rest}
            />
            <View flex center>
                {iconRight &&
                    <TouchableWithoutFeedback onPress={onIcRightClick}>
                        <Image source={iconRight} tintColor={Colors.c83} />
                    </TouchableWithoutFeedback>
                }
            </View>
        </View>
    );
}

export default InputText;