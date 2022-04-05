import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loader = ({show = true, ...props}) =>
  show ? <ActivityIndicator size="large" color="#3e3ecf" {...props} /> : null;

export default Loader;
