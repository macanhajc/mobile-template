import * as React from 'react';
import {Path} from 'react-native-svg';
import {BaseIcon, BaseSolidIcon, IconProps, IconSolidProps} from './Base';

export const ArrowRightIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </BaseIcon>
  );
};

export const ArrowRightIconSolid = (props: IconSolidProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      />
    </BaseSolidIcon>
  );
};
