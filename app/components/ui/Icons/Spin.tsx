import React, {useRef, useEffect} from 'react';
import {Path} from 'react-native-svg';
import {withAnimated} from '../../../hooks/animation';
import {Animated, Easing} from 'react-native';
import {BaseIcon, IconProps} from './Base';

export const Spin = (props: IconProps & {spin?: boolean}) => (
  <BaseIcon {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.0007 1.66683C8.35247 1.66683 6.74131 2.15557 5.3709 3.07125C4.00049 3.98693 2.93238 5.28842 2.30165 6.81113C1.67092 8.33385 1.5059 10.0094 1.82744 11.6259C2.14898 13.2424 2.94266 14.7273 4.10809 15.8927C5.27353 17.0582 6.75839 17.8518 8.3749 18.1734C9.99141 18.4949 11.667 18.3299 13.1897 17.6992C14.7124 17.0684 16.0139 16.0003 16.9296 14.6299C17.8452 13.2595 18.334 11.6483 18.334 10.0002"
    />
  </BaseIcon>
);

const AnimatedIcon: React.ComponentType<Omit<IconProps, 'style'> & {spin?: boolean}> =
  withAnimated(Spin);

export const SpinIcon = (props: IconProps & {spin?: boolean}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.spin) {
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 360,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    }
  }, [animatedValue, props]);

  const animatedStyle = {
    transform: [
      {
        rotate: animatedValue.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return <AnimatedIcon style={animatedStyle} {...props} />;
};
