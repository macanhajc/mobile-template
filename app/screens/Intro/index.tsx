import React from 'react';
import {IntroTemplate} from '../../components/templates';
import {AppNavigationProp, AppRoutes} from '../../navigators';

type IntroScreenProps = AppNavigationProp<AppRoutes.Intro>;

export const IntroScreen: React.FC<IntroScreenProps> = () => <IntroTemplate />;
