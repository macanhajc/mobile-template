import * as React from 'react';
import {Path} from 'react-native-svg';
import {BaseIcon, IconProps} from './Base';

export const XIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </BaseIcon>
  );
};
