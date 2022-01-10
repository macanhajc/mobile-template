import * as React from 'react';
import {Path} from 'react-native-svg';
import {BaseIcon, IconProps} from './Base';

export const CheckIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </BaseIcon>
  );
};
