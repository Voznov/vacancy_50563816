import React from 'react';
import {StyleSheet, View} from 'react-native';

import {COLORS, STYLES} from '../constants/style';
import {Touchable} from './default';

const Block = ({onPress, ...props}) => {
  const Container = onPress ? Touchable : View;
  return <Container style={styles.container} onPress={onPress} {...props} />;
};
export default Block;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG,
    borderRadius: 10,
    padding: 10,
    ...STYLES.shadow,
  },
});
