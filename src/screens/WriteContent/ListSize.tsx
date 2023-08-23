import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Text, View} from 'react-native-ui-lib';

const ListSize = React.memo(() => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const onMomentumScrollEnd = React.useCallback(({nativeEvent}) => {
    let index = Math.round(nativeEvent.contentOffset.y / 50);
    setCurrentIndex(index);
  }, []);
  return (
    <ScrollView
      pagingEnabled
      decelerationRate="fast"
      snapToInterval={50}
      contentContainerStyle={{
        paddingVertical: 35,
      }}
      onMomentumScrollEnd={onMomentumScrollEnd}
      showsVerticalScrollIndicator={false}>
      {['16', '18', '20'].map((item, index) => {
        return <ItemFont item={item} isSelect={currentIndex === index} />;
      })}
    </ScrollView>
  );
});
const ItemFont = React.memo(
  ({item, isSelect}: {item: string; isSelect: boolean}) => {
    return (
      <View
        style={{
          borderColor: '#EFF0F3',
          height: 50,
          paddingVertical: 16,
          alignItems: 'center',
          borderBottomWidth: 1,
        }}>
        <Text M14 color={isSelect ? '#353B48' : '#D1D5DD'}>
          {item}
        </Text>
      </View>
    );
  },
);
export default ListSize;

const styles = StyleSheet.create({});
