import * as React from 'react';
import {Path} from 'react-native-svg';
import {IconSolidProps, BaseSolidIcon, BaseIcon, IconProps} from './Base';

export const UsersIcon = (props: IconProps) => {
  return (
    <BaseIcon {...props}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </BaseIcon>
  );
};

export const UsersIconSolid = (props: IconSolidProps) => {
  return (
    <BaseSolidIcon {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
      />
    </BaseSolidIcon>
  );
};
