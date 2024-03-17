import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconProps} from '../../interfaces/icons';

export default function PersonalCategoryIcon({
  width,
  height,
  styles,
}: IconProps) {
  return (
    <Svg
      style={styles}
      width={width ?? 22}
      height={height ?? 22}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
      <Path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
      <Path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
    </Svg>
  );
}
