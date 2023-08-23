import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text, Avatar, Assets, Image, Colors } from 'react-native-ui-lib'

export interface FollowItemProps {
    avatar: any,
    user: string,
    followers: number,
    trips: number,
    isFollowing?: boolean
}

const FollowItem: React.FC<FollowItemProps> = ({
    avatar,
    user,
    followers,
    trips,
    isFollowing
}) => {
    return (
        <View paddingV-20 paddingH-medium>
            <View row>
                <Avatar source={avatar} size={48} />
                <View flex-4 marginL-16 centerV>
                    <Text B16 c35>{user}</Text>
                    <View row centerV>
                        <Text c83 M13>{followers} followers </Text>
                        <View center marginH-8>
                            <View width={2} height={2} style={{ borderRadius: 1 }} backgroundColor={Colors.c83} />
                        </View>
                        <Text c83 M13>{trips} trips </Text>
                    </View>
                </View>
                {
                    !isFollowing &&
                    <View center>
                        <TouchableOpacity>
                            <Image source={Assets.icons.ic_follow} />
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </View>
    )
}

export default FollowItem

const styles = StyleSheet.create({})
