import React from 'react';
import {View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const DotIndicator = ({
  color,
  inactive,
  inactiveColor,
}: {
  color: string;
  inactive?: boolean;
  inactiveColor?: string;
}) => {
  if (inactive)
    return (
      <View
        style={[
          {
            borderWidth: 1,
            borderColor: '#E6E9EE',
            opacity: 0.5,
            backgroundColor: inactiveColor,
          },
          styles.dotIndicator,
        ]}
      />
    );
  return <View style={[{backgroundColor: color}, styles.dotIndicator]} />;
};

const styles = StyleSheet.create({
  dotIndicator: {
    width: 8,
    height: 8,
    marginLeft: 4.5,
    marginRight: 4.5,
    borderRadius: 4,
  },
});

export default DotIndicator;
