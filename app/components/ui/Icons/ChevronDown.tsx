import * as React from 'react';
import {Path} from 'react-native-svg';
import {BaseIcon, IconProps} from './Base';

export const ChevronDownIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </BaseIcon>
  );
};
