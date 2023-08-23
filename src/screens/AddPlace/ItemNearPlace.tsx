import {useNavigation, useRoute} from '@react-navigation/core';
import {useNavigationState} from '@react-navigation/native';
import Routes from 'config/Routes';
import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {View, Assets, Image, Colors, Text} from 'react-native-ui-lib';

interface Props {
  name: string;
  des: string;
}

const ItemNearPlace = React.memo((props: Props) => {
  const {navigate} = useNavigation();
  const route = useRoute();
  const prevName = useNavigationState(
    state => state.routes[state.index - 1].name,
  );
  const goPublicTrip3 = React.useCallback(() => {
    navigate(prevName, {
      place: {
        name: props.name,
        des: props.des,
      },
      indexPlace: route?.params?.indexPlace,
    });
  }, [props.name, props.des, route?.params?.indexPlace]);
  return (
    <Pressable onPress={goPublicTrip3}>
      <View
        row
        paddingV-12
        paddingH-16
        centerV
        marginH-24
        marginB-16
        style={{borderRadius: 4, backgroundColor: Colors.white}}>
        <Image source={Assets.icons.ic_pin_on_map_outline} marginR-16 />
        <View flex>
          <Text B16 marginB-4 c35>
            {props.name}
          </Text>
          <Text M14 c83>
            {props.des}
          </Text>
        </View>
      </View>
    </Pressable>
  );
});

export default ItemNearPlace;

const styles = StyleSheet.create({});
