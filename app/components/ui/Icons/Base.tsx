import * as React from 'react';
import Svg, {SvgProps, LinearGradient, Stop} from 'react-native-svg';
import {ColorsTypes, colors} from '../../../styles/colors';

export type IconSolidProps = Omit<SvgProps, 'color'> & {
  color?: keyof ColorsTypes;
  gradient?: boolean | {init: string; end: string};
};

export const BaseSolidIcon: React.FC<IconSolidProps & {children?: any}> = ({
  children,
  color,
  gradient,
  ...rest
}) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 20 20" {...rest} fill={color}>
      {gradient && (
        <LinearGradient id="path" x1="0" y1="0" x2="0" y2="1">
          <Stop
            offset="0"
            stopColor={typeof gradient === 'object' ? gradient.init : colors.text}
            stopOpacity="1"
          />
          <Stop
            offset="1"
            stopColor={typeof gradient === 'object' ? gradient.end : colors.text}
            stopOpacity="1"
          />
        </LinearGradient>
      )}
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          fill: gradient ? 'url(#path)' : colors[color || 'text'],
        }),
      )}
    </Svg>
  );
};

export type IconProps = Omit<SvgProps, 'color'> & {color?: keyof ColorsTypes; strokeWidth?: number};

export const BaseIcon: React.FC<IconProps & {children?: any}> = ({
  children,
  color,
  strokeWidth,
  ...rest
}) => {
  return (
    <Svg
      fill="none"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...rest}
      color={colors[color || 'text']}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {strokeWidth: strokeWidth || 2}),
      )}
    </Svg>
  );
};
