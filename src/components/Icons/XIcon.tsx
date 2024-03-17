import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from '../../interfaces/icons';

export default function XIcon({width, height, styles}: IconProps) {
  return (
    <Svg
      style={styles}
      width={width ?? 22}
      height={height ?? 22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M18 6L6 18" />
      <Path d="M6 6l12 12" />
    </Svg>
  );
}
