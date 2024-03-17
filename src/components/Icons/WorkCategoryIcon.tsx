import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from '../../interfaces/icons';

export default function WorkCategoryIcon({width, height, styles}: IconProps) {
  return (
    <Svg
      style={styles}
      width={width ?? 22}
      height={height ?? 22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M3 21h18" />
      <Path d="M5 21v-12l5 4v-4l5 4h4" />
      <Path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
      <Path d="M9 17h1" />
      <Path d="M14 17h1" />
    </Svg>
  );
}
