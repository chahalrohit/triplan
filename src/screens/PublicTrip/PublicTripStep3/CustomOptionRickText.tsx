import {useNavigation} from '@react-navigation/native';
import OptionRichText from 'components/OptionRichText';
import Routes from 'config/Routes';
import React from 'react';
import {StyleSheet} from 'react-native';

interface Props {
  index: number;
}

const CustomOptionRickText = React.memo(({index}: Props) => {
  const {navigate} = useNavigation();
  const goAddPlace = React.useCallback(() => {
    navigate(Routes.AddPlace, {
      indexPlace: index,
    });
  }, [index]);
  const onGoUploadTripCover = React.useCallback(() => {
    navigate(Routes.UploadTripCover, {
      from: Routes.PublicTripStep3,
      index,
    });
  }, [index]);
  return (
    <OptionRichText
      onAddCamera={() => {}}
      onAddPhoto={onGoUploadTripCover}
      onAddLocation={goAddPlace}
      onAddText={() => {}}
      style={{marginHorizontal: 24}}
    />
  );
});

export default CustomOptionRickText;

const styles = StyleSheet.create({});
