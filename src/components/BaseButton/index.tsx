import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native';
import { Colors, Text, View } from 'react-native-ui-lib';
import Props, { PRIMARY, SECONDARY, OUTLINE } from './inteface';
import styles from './styles';

const BaseButton: React.FC<Props> = ({
    label,
    onPress,
    primary,
    secondary,
    disable,
    outline,
    small,
    style,
    badge = 0,
    ...rest
}) => {

    const [isPress, setIsPress] = useState<boolean>(false);

    const txtColor = isPress
        ? Colors.white : (
            disable
                ? Colors.cd1 : outline
                    ? Colors.c04 : Colors.white
        )

    const underlayColor = primary
        ? PRIMARY.dark : secondary
            ? SECONDARY.dark : outline
                ? OUTLINE.dark : Colors.cef

    return (
        <TouchableHighlight
            onPress={onPress}
            activeOpacity={1}
            onShowUnderlay={() => setIsPress(true)}
            onHideUnderlay={() => setIsPress(false)}
            underlayColor={underlayColor}
            style={[
                styles.wrapper,
                primary && styles.primary,
                secondary && styles.secondary,
                outline && styles.outline,
                disable && styles.disable,
                small && styles.small,
                style
            ]}
            disabled={disable}
            {...rest}
        >
            <>
                <Text
                    center
                    uppercase
                    color={txtColor}
                    B13={small}
                    B14={!small}
                >
                    {label}
                </Text>
                {badge > 0 &&
                    <View center absT width={18} height={18} backgroundColor={Colors.cfe} style={styles.badge}>
                        <Text B10 white >{badge}</Text>
                    </View>
                }
            </>
        </TouchableHighlight>
    )
}

export default BaseButton;