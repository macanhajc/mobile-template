import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {IntroTemplate} from '../../components/templates';
import {AppNavigatorParamList, AppRoutes} from '../../navigators';

type IntroScreenProps = NativeStackScreenProps<AppNavigatorParamList, AppRoutes.Intro>;

export const IntroScreen: React.FC<IntroScreenProps> = () => <IntroTemplate />;
