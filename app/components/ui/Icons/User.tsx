import * as React from 'react';
import {Path} from 'react-native-svg';
import {IconSolidProps, BaseSolidIcon, IconProps, BaseIcon} from './Base';

export const UserIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </BaseIcon>
  );
};

export const UserIconSolid = (props: IconSolidProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      />
    </BaseSolidIcon>
  );
};
