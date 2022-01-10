import * as React from 'react';
import {Path} from 'react-native-svg';
import {BaseIcon, IconProps} from './Base';

export const ChevronRightIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </BaseIcon>
  );
};
