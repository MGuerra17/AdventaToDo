import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from '../../interfaces/icons';

export default function CheckIcon({width, height, styles}: IconProps) {
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
      <Path d="M5 12l5 5l10 -10" />
    </Svg>
  );
}
