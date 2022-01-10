import * as React from 'react';
import {View, Text, TextStyle, ViewStyle} from 'react-native';

const ROOT: ViewStyle = {
  margin: 8,
  padding: 8,
  borderWidth: 1,
  borderColor: '#EFF0F6',
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',
};
const HEADER: ViewStyle = {};
const USE_CASE: TextStyle = {
  fontFamily: 'Poppins-SemiBold',
  fontWeight: '900',
  color: '#14142B',
};
const TITLE: TextStyle = {
  fontFamily: 'Poppins-Regular',
  color: '#14142B',
};
const USAGE: TextStyle = {
  fontFamily: 'Poppins-Regular',
  color: '#14142B',
  fontSize: 10,
};
const COMPONENT: ViewStyle = {backgroundColor: '#FFFFFF'};

export interface UseCaseProps {
  /** The title. */
  text: string;
  /** When should we be using this? */
  usage?: string;
  /** The component use case. */
  children: React.ReactNode;
  /** A style override. Rarely used. */
  style?: ViewStyle;
  /** Don't use any padding because it's important to see the spacing. */
  noPad?: boolean;
  /** Don't use background color because it's important to see the color. */
  noBackground?: boolean;
}

export function UseCase(props: UseCaseProps) {
  const style: ViewStyle = {
    ...COMPONENT,
    ...{padding: props.noPad ? 0 : 10},
    ...{
      backgroundColor: props.noBackground
        ? 'rgba(0,0,0,0)'
        : COMPONENT.backgroundColor,
    },
    ...props.style,
  };

  // For each Story
  return (
    <View style={ROOT}>
      <View style={HEADER}>
        <Text style={USE_CASE}>Use Case</Text>
        <Text style={TITLE}>{props.text}</Text>
        {props.usage ? <Text style={USAGE}>{props.usage}</Text> : null}
      </View>
      <View style={style}>{props.children}</View>
    </View>
  );
}
