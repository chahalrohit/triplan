import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { View, Text, Image, Avatar, Assets, Colors } from 'react-native-ui-lib';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { width, height } from 'config/scaleAccordingToDevice';
import styles from './styles';

export interface ArticleProps {
    avatar: any,
    name: string,
    likes: string,
    comments: string,
    views: string,
    title: string,
    dateTime: string,
    thumbnail: any,
    isTrending?: boolean,
    style?: any,
}

interface ArticleCompProps extends ArticleProps {
    isLast: boolean,
    isDelete?: boolean,
    isWishedList?: boolean,
    action?: string,
    onNavigate?: () => void
}

const Article: React.FC<ArticleCompProps> = ({
    avatar,
    name,
    likes,
    comments,
    views,
    title,
    dateTime,
    thumbnail,
    isTrending,
    style,
    isLast,
    isDelete,
    isWishedList = false,
    action = 'published a trip',
    onNavigate
}) => {

    const [isShowOption, setIsShowOption] = useState<boolean>(false);
    const [like, setLike] = useState<boolean>(false);

    useEffect(() => {
        setLike(isWishedList)
    }, []);

    const handleLike = () => setLike(!like);

    const handleOpenOption = () => setIsShowOption(!isShowOption);

    return (
        <TouchableWithoutFeedback onPress={() => setIsShowOption(false)}>
            <View backgroundColor={Colors.white} marginT-small style={style}>
                <View paddingH-small paddingV-12 row centerV>
                    <Avatar source={avatar} size={40} />
                    <View marginL-8>
                        <View row centerV>
                            <Text B14 c04 >{name} </Text><Text M13 c59>{action}</Text>
                        </View>
                        <View row centerV>
                            <Text c83 M13>{dateTime} </Text>
                            <View center marginH-8>
                                <View width={2} height={2} style={{ borderRadius: 1 }} backgroundColor={Colors.c83} />
                            </View>
                            <Text c83 M13>{likes} </Text><Image source={Assets.icons.ic_heart} />
                        </View>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={handleLike}>
                    <View>
                        <Image source={thumbnail} width={width} height={height * 0.46} />
                        <View absR row>
                            {isDelete && <Image
                                source={Assets.icons.ic_delete_draft}
                                style={{ marginTop: 18, marginRight: 17 }}
                            />}
                            <Image
                                source={
                                    like
                                        ? Assets.icons.ic_wishlisted
                                        : Assets.icons.ic_wishlist
                                }
                                style={{ marginTop: 18, marginRight: 17 }}
                            />
                        </View>
                        {isTrending &&
                            <View absB backgroundColor={Colors.cf15} paddingH-8 paddingV-4>
                                <Text M10 white uppercase>Trending Trip</Text>
                            </View>
                        }
                    </View>
                </TouchableWithoutFeedback>
                <View paddingH-small marginV-8>
                    {
                        onNavigate
                            ? <TouchableOpacity onPress={onNavigate}>
                                <Text B16 c35 marginB-8>{title}</Text>
                            </TouchableOpacity>
                            : <Text B16 c35 marginB-8>{title}</Text>
                    }
                    <View row centerV>
                        <Text c83 M13>{comments} comments </Text>
                        <View center marginH-8>
                            <View width={2} height={2} style={{ borderRadius: 1 }} backgroundColor={Colors.c83} />
                        </View>
                        <Text c83 M13>{views} views </Text>
                    </View>
                </View>
                <View height={1} backgroundColor={Colors.cef} />
                <View paddingH-small paddingV-14 row>
                    <View flex row spread>
                        <TouchableWithoutFeedback>
                            <View row centerV>
                                <Image source={Assets.icons.ic_article_comment} width={13} height={13} />
                                <Text marginL-10 c59 M14>Comment</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View row centerV>
                                <Image source={Assets.icons.ic_article_share} width={13} height={13} />
                                <Text marginL-10 c59 M14>Share</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View flex centerV right>
                        <TouchableWithoutFeedback onPress={handleOpenOption}>
                            <Image source={Assets.icons.ic_article_menu} width={13} height={13} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                {
                    isShowOption &&
                    (
                        <View backgroundColor={Colors.white} width={width * 0.64} style={[styles.menuOption, isLast && { bottom: 50 }]}>
                            <TouchableHighlight activeOpacity={1} underlayColor={Colors.cf7} style={[styles.btnOption, { borderTopLeftRadius: 10, borderTopRightRadius: 10 }]} onPress={() => { }}>
                                <Text c59 M14>Follow Author</Text>
                            </TouchableHighlight>
                            <TouchableHighlight activeOpacity={1} underlayColor={Colors.cf7} style={styles.btnOption} onPress={() => { }}>
                                <Text c59 M14>Add Trip to Wishlist</Text>
                            </TouchableHighlight>
                            <TouchableHighlight activeOpacity={1} underlayColor={Colors.cf7} style={[styles.btnOption, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]} onPress={() => { }}>
                                <Text cfe M14>Report</Text>
                            </TouchableHighlight>
                        </View>
                    )
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Article;