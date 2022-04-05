import _ from 'lodash';
import React from 'react';
import {View} from 'react-native';

import {COLORS} from '../../constants/style';

const Separator = ({width, height, color = COLORS.TRANSPARENT, ...props}) => {
  if (width === undefined && height === undefined) {
    console.error(
      'Separator: The "width" and "height" fields cannot be undefined at the same time',
    );
  }
  return (
    <View
      style={{
        backgroundColor: color,
        width: width ?? '100%',
        height: height ?? '100%',
        ...props.style,
      }}
      {..._.omit(props, 'style')}
    />
  );
};

export default Separator;
