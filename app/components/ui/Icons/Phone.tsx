import * as React from 'react';
import {Path} from 'react-native-svg';
import {BaseIcon, BaseSolidIcon, IconProps, IconSolidProps} from './Base';

export const PhoneIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </BaseIcon>
  );
};

export const PhoneIconSolid = (props: IconSolidProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
      />
    </BaseSolidIcon>
  );
};
