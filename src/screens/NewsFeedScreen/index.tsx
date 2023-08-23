import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { View, Assets, Image, Colors } from 'react-native-ui-lib';
import { width, height } from 'config/scaleAccordingToDevice';
import NavBar from 'components/NavBar';
import Article, { ArticleProps } from 'components/Article';
import StatusView, { STATUS } from 'components/StatusView';
import DATA from './data';
import styles from './styles';
import { FocusAwareStatusBar } from 'components/FocusAwareStatusBar';
import withOffline from 'hooks/useOffline';
import { useNavigation } from '@react-navigation/native';
import Routes from 'config/Routes';

const NewsFeedScreen = () => {
    const navigation = useNavigation();
    const [type, setType] = React.useState(STATUS.FIRST_TIME);

    const onNavigate = useCallback(() => navigation.navigate(Routes.TripCover), []);
    return (
        <View flex>
            <FocusAwareStatusBar barStyle='light-content' translucent backgroundColor="transparent" />
            <NavBar title='News Feed' titleColor={Colors.white} style={{ backgroundColor: 'transparent' }} />
            <Image width={width} height={height * 0.6} source={Assets.images.bg} style={styles.background} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusView type={type} onChangeType={(type) => setType(type)} />
                {DATA.map((item: ArticleProps, idx: number) => {
                    const length = DATA.length;
                    const zIndex = length - idx;
                    return <Article
                        key={idx}
                        {...item}
                        isLast={idx === (length - 1)}
                        style={{ zIndex }}
                        onNavigate={onNavigate}
                    />
                })}
            </ScrollView>
        </View>
    )
}

export default withOffline(NewsFeedScreen);