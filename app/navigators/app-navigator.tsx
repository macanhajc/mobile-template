import React from 'react';
import {NavigationContainer, NavigationContainerRef} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {IntroScreen} from '../screens';

export enum AppRoutes {
  Intro = 'intro',
}

export type AppNavigatorParamList = {
  [AppRoutes.Intro]: undefined;
};

export type AppNavigationProp<RouteName extends keyof AppNavigatorParamList = AppRoutes> =
  NativeStackNavigationProp<AppNavigatorParamList, RouteName>;

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={AppRoutes.Intro}>
      <Stack.Screen name={AppRoutes.Intro} component={IntroScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator = React.forwardRef<
  NavigationContainerRef<any>,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <AppStack />
    </NavigationContainer>
  );
});

AppNavigator.displayName = 'AppNavigator';

const exitRoutes = [''];

export const canExitApp = (routeName: string) => exitRoutes.includes(routeName);
