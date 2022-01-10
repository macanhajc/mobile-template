import React from 'react';
import {DefaultLayout} from '../../../layouts';

import {Text} from '../../ui';
import {Hello} from '../../elements';

export type IntroTemplateProps = {};

export const IntroTemplate: React.FC<IntroTemplateProps> = () => {
  return (
    <DefaultLayout>
      <Text>IntroTemplate</Text>
      <Hello />
    </DefaultLayout>
  );
};
