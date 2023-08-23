import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {View, Text, Image, Colors, Assets} from 'react-native-ui-lib';
import {width, height, shadow} from 'config/scaleAccordingToDevice';
import NavBar from 'components/NavBar';
import Article, {ArticleProps} from 'components/Article';
import {useNavigation} from '@react-navigation/native';
import Routes from 'config/Routes';
import {TYPE} from 'screens/FilterScreen';

interface Props {
  title: string;
  data: ArticleProps[];
  onClose: () => void;
}

const ListTripView: React.FC<Props> = ({title, data, onClose}) => {
  const navigation = useNavigation();

  const onNavigateFilter = () =>
    navigation.navigate(Routes.Filter, {
      type: TYPE.TRIP,
    });

  return (
    <View absT width={width} height={height} backgroundColor="#F7F8FA">
      <NavBar title={title} leftIcon="close" onLeftClick={onClose} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item: ArticleProps, idx: number) => {
          const length = data.length;
          const zIndex = length - idx;
          return (
            <Article
              key={idx}
              {...item}
              isLast={idx === length - 1}
              style={{zIndex, }}
            />
          );
        })}
      </ScrollView>
      <View absB width={width} style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={onNavigateFilter}>
          <View
            row
            paddingV-12
            centerV
            paddingH-small
            backgroundColor={Colors.white}
            style={styles.btnFilter}>
            <Text V14 c35 marginR-8>
              Filter
            </Text>
            <Image source={Assets.icons.ic_filter} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListTripView;

const styles = StyleSheet.create({
  btnFilter: {
    ...shadow,
    borderRadius: 100,
    bottom: 24,
  },
});
