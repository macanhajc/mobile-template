import * as React from 'react';
import {Path} from 'react-native-svg';
import {BaseIcon, IconProps} from './Base';

export const DotsHorizontalIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </BaseIcon>
  );
};
