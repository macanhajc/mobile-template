import React, {useState, useEffect, useRef} from 'react';
import {BackHandler} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/core';
import {PartialState, NavigationState, NavigationContainerRef} from '@react-navigation/native';
import {AppNavigationProp} from './';

export const AppNavigation = {
  navigate(name: string) {
    name;
  },
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
  getRootState(): NavigationState {
    return {} as any;
  },
};

export type NavigationContainerComposite = NavigationContainerRef<
  CompositeNavigationProp<AppNavigationProp, any>
>;

export const setAppNavigation = (ref: React.RefObject<NavigationContainerComposite>) => {
  for (const method in AppNavigation) {
    AppNavigation[method] = (...args: any) => {
      if (ref.current) {
        return ref.current[method](...args);
      }
    };
  }
};

/**
 * Gets the current screen from any navigation state.
 */
export const getActiveRouteName: any = (state: NavigationState | PartialState<NavigationState>) => {
  const route = state.routes[state.index || 0];

  // Found the active route -- return the name
  if (!route.state) {
    return route.name;
  }

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
};

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(
  ref: React.RefObject<NavigationContainerRef<any>>,
  canExit: (routeName: string) => boolean,
) {
  const canExitRef = useRef(canExit);

  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      const navigation = ref.current;

      if (navigation == null) {
        return false;
      }

      // grab the current route
      const routeName = getActiveRouteName(navigation.getRootState());

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // let the system know we've not handled this event
        return false;
      }

      // we can't exit, so let's turn this into a back action
      if (navigation.canGoBack()) {
        navigation.goBack();

        return true;
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [ref]);
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence(storage: any, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState();
  const [isRestoringNavigationState, setIsRestoringNavigationState] = useState(true);

  const routeNameRef = useRef();
  const onNavigationStateChange = (state: any) => {
    const currentRouteName = getActiveRouteName(state);

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;

    // Persist state to storage
    storage.save(persistenceKey, state);
  };

  const restoreState = async () => {
    try {
      const state = await storage.load(persistenceKey);
      if (state) {
        setInitialNavigationState(state);
      }
    } finally {
      setIsRestoringNavigationState(false);
    }
  };

  useEffect(() => {
    if (isRestoringNavigationState) {
      restoreState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRestoringNavigationState]);

  return {onNavigationStateChange, restoreState, initialNavigationState};
}
