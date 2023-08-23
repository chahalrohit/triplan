import React, { useState } from 'react';
import { View, Colors, Text, Image } from 'react-native-ui-lib';
import { ImageSourcePropType, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { width } from 'config/scaleAccordingToDevice';
import NavBar from 'components/NavBar';

interface IProps {
    onSubmitQuote: (index: number, value: string) => void;
    onClose: () => void;
    image: ImageSourcePropType;
    index: number;
    quotes: string;
}

const ItemImageQuotes = React.memo(({ onSubmitQuote, image, onClose, index, quotes }: IProps) => {
    const [quote, setQuote] = useState<string>(quotes ?? '');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View flex backgroundColor={Colors.c35}>
                <NavBar leftIcon='close' onLeftClick={onClose} style={{ backgroundColor: 'transparent' }} iconColor={Colors.white} />
                <View flex center>
                    <Image source={image} width={width} />
                </View>
                <View absB width={width} paddingH-medium backgroundColor='white' row centerV height={60}>
                    <View flex marginR-small>
                        <TextInput
                            value={quote}
                            placeholder="Add quote…"
                            style={styles.chatInput}
                            placeholderTextColor={Colors.cd1}
                            onChangeText={(text) => setQuote(text)}
                        />
                    </View>
                    <TouchableOpacity onPress={() => {
                        Keyboard.dismiss();
                        onSubmitQuote(index, quote)
                    }}>
                        <Text B14 c04>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
});

const styles = StyleSheet.create({
    chatInput: {
        height: 40,
        backgroundColor: Colors.white,
        color: Colors.black,
    },
})

export default ItemImageQuotes;