import * as React from 'react';
import {Path} from 'react-native-svg';
import {IconSolidProps, BaseSolidIcon, BaseIcon, IconProps} from './Base';

export const SearchIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </BaseIcon>
  );
};

export const SearchIconSolid = (props: IconSolidProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      />
    </BaseSolidIcon>
  );
};
