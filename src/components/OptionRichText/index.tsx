import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { View, Button, Colors, Assets } from 'react-native-ui-lib';

interface Props {
    onAddText: () => void;
    onAddPhoto: () => void;
    onAddCamera: () => void;
    onAddLocation: () => void;
    style?: ViewStyle;
}
const OptionRichText = React.memo((props: Props) => {
    return (
        <View style={[styles.container, props.style]}>
            <Button
                link
                iconSource={Assets.icons.ic_add_text}
                linkColor={Colors.c83}
                flex
                onPress={props.onAddText}
            />
            <Button
                link
                iconSource={Assets.icons.ic_add_photo}
                linkColor={Colors.c83}
                flex
                onPress={props.onAddPhoto}
            />
            <Button
                link
                iconSource={Assets.icons.ic_add_camera}
                linkColor={Colors.c83}
                flex
                onPress={props.onAddCamera}
            />
            <Button
                link
                iconSource={Assets.icons.ic_add_location}
                linkColor={Colors.c83}
                flex
                onPress={props.onAddLocation}
            />
        </View>
    );
});

export default OptionRichText;

const styles = StyleSheet.create({
    container: {
        height: 48,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 1,
        borderColor: Colors.cd1,
        flexDirection: 'row',
    },
});
