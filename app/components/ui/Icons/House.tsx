import * as React from 'react';
import {Path} from 'react-native-svg';
import {BaseIcon, BaseSolidIcon, IconProps, IconSolidProps} from './Base';

export const HouseIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </BaseIcon>
  );
};

export const HouseIconSolid = (props: IconSolidProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
      />
    </BaseSolidIcon>
  );
};
