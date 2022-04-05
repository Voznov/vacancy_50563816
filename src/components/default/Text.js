import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

import {COLORS} from '../../constants/style';

const Text = ({style, ...props}) => (
  <RNText style={[styles.text, style]} {...props} />
);
export default Text;

const styles = StyleSheet.create({
  text: {
    color: COLORS.DEFAULT,
  },
});
