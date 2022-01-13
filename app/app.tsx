import React, {useRef} from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import {LocaleProvider} from './components/providers/LocaleProvider';
import {theme} from './styles/theme';

import * as storage from './utils/storage';

import {
  useBackButtonHandler,
  AppNavigator,
  canExitApp,
  setAppNavigation,
  useNavigationPersistence,
} from './navigators';
import {NavigationContainerRef} from '@react-navigation/native';
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import {enableScreens} from 'react-native-screens';

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App = () => {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  setAppNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExitApp);

  const {initialNavigationState, onNavigationStateChange} = useNavigationPersistence(
    storage,
    NAVIGATION_PERSISTENCE_KEY,
  );

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar translucent backgroundColor="transparent" />
        <LocaleProvider>
          <AppNavigator
            ref={navigationRef}
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </LocaleProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
