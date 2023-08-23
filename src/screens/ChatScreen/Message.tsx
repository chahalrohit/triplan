import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Colors, Image } from 'react-native-ui-lib'

export enum MESSAGE_TYPES {
    SENDER = 1,
    RECEIVER = 2
}

export type MessageComponentDataType = {
    type: MESSAGE_TYPES,
    message: string,
    avatar: any,
}

interface Props {
    message: MessageComponentDataType,
    isSame: boolean
}

const Message: React.FC<Props> = ({
    message,
    isSame
}) => {
    const isSender = message.type === MESSAGE_TYPES.SENDER;

    const renderMessageContent = () => {
        return (
            <View
                style={
                    isSender
                        ? styles.senderMessage
                        : styles.receiverMessage
                }>
                <Text
                    M14
                    allowFontScaling={false}
                    style={
                        isSender
                            ? styles.senderText
                            : styles.receiverText
                    }>
                    {message.message}
                </Text>
            </View>
        )
    }

    return (
        <View flex row paddingH-medium>
            {(message.avatar && isSender) && <View flex bottom left marginB-20>
                {!isSame &&
                    <>
                        <Image source={message.avatar} width={24} height={24} />
                        <View absB width={12} height={12} backgroundColor={Colors.c24} style={styles.activeDot} />
                    </>
                }
            </View>}
            <View flex-10>
                <View marginV-2 style={[
                    isSender
                        ? styles.senderMessageWrapper
                        : styles.receiverMessageWrapper,
                    !isSame && { marginBottom: 20 },
                ]}>
                    {renderMessageContent()}
                </View>
            </View>
            {(message.avatar && !isSender) && <View flex bottom right marginB-20>
                {!isSame && <Image source={message.avatar} width={24} height={24} />}
            </View>}
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    messageWrapper: {
        alignSelf: 'stretch',
    },
    get senderMessageWrapper() {
        return {
            ...this.messageWrapper,
            alignSelf: 'flex-start',
            alignItems: 'flex-start',
        };
    },
    get receiverMessageWrapper() {
        return {
            ...this.messageWrapper,
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
        };
    },
    message: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 8,
        alignSelf: 'flex-start',
    },
    get senderMessage() {
        return {
            ...this.message,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 2,
            backgroundColor: Colors.cf7,
        };
    },
    get receiverMessage() {
        return {
            ...this.message,
            borderBottomRightRadius: 2,
            borderBottomLeftRadius: 10,
            backgroundColor: Colors.c04,
        };
    },
    receiverText: {
        color: Colors.white,
        textAlign: 'right',
    },
    senderText: {
        color: Colors.c35,
        textAlign: 'left'
    },
    activeDot: { borderWidth: 2, borderRadius: 6, borderColor: Colors.white, left: 16, bottom: -2 }
})
