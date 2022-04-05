import React from 'react';
import {TouchableOpacity} from 'react-native';

const Touchable = ({onPress, ...props}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} {...props} />
);

export default Touchable;
