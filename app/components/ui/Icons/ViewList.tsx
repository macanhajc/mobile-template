import * as React from 'react';
import {Path} from 'react-native-svg';
import {IconSolidProps, BaseSolidIcon, BaseIcon, IconProps} from './Base';

export const ViewListIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </BaseIcon>
  );
};

export const ViewListIconSolid = (props: IconSolidProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      />
    </BaseSolidIcon>
  );
};
