import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  Animated,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';
import {height, heightHeader} from 'config/scaleAccordingToDevice';

export const ITEM_HEIGHT = 48;
export const LINE_HEIGHT = height * 0.06;
export const CONTAINER = height - heightHeader - 50;

interface IListDay {
  style?: ViewStyle;
  data: any;
  onSelectItem?: React.Dispatch<React.SetStateAction<number>>;
  selectDay: number;
}

const ListDay = React.forwardRef(
  ({style, data, onSelectItem, selectDay}: IListDay, ref) => {
    const offsetY = React.useRef(new Animated.Value(0)).current;
    const listRef = React.useRef<FlatList>(null);
    const onScroll = Animated.event(
      [{nativeEvent: {contentOffset: {y: offsetY}}}],
      {useNativeDriver: true},
    );
    const onMomentumScrollEnd = React.useCallback(
      e => {
        const activeIndex = Math.round(
          e.nativeEvent.contentOffset.y / (ITEM_HEIGHT + LINE_HEIGHT + 32),
        );
        onSelectItem && onSelectItem(activeIndex);
      },
      [onSelectItem],
    );
    return (
      <Animated.FlatList
        ref={listRef}
        data={data}
        style={style}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={onScroll}
        snapToInterval={ITEM_HEIGHT + LINE_HEIGHT + 32}
        showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        renderItem={({item, index}) => {
          const BORDER = selectDay === index ? 48 : 32;
          return (
            <View center height={ITEM_HEIGHT}>
              <TouchableOpacity
                onPress={() => {
                  onSelectItem && onSelectItem(index);
                  listRef.current?.scrollToOffset({
                    offset: (ITEM_HEIGHT + LINE_HEIGHT + 32) * index,
                  });
                }}>
                <View
                  center
                  width={BORDER}
                  height={BORDER}
                  backgroundColor={item.color}
                  style={{borderRadius: BORDER / 2}}>
                  {selectDay === index && (
                    <Text M12 white>
                      Day
                    </Text>
                  )}
                  <Text B18 white>
                    {item.day}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(_, idx) => `item_${idx}`}
        contentContainerStyle={styles.contentContainerStyle}
        onMomentumScrollEnd={onMomentumScrollEnd}
        ItemSeparatorComponent={() => (
          <View flex center marginV-small>
            <View height={LINE_HEIGHT} width={2} backgroundColor={Colors.c83} />
          </View>
        )}
      />
    );
  },
);

export default ListDay;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: CONTAINER / 2 - ITEM_HEIGHT / 2 - 8,
    paddingBottom: CONTAINER / 2 - ITEM_HEIGHT / 2 - 8,
  },
});
