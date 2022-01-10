import styled, {css} from 'styled-components/native';
import {ColorsTypes} from '../../../styles/colors';
import {FontVariantType, typography} from '../../../styles/typography';
import {TextStyle} from 'react-native';

// [K in keyof FontVariantType]: { fontSize?: string; lineHeight: number; };

export const Text = styled.Text<{
  variant?: keyof FontVariantType;
  color?: keyof ColorsTypes;
  align?: TextStyle['textAlign'];
  weight?: 'Medium' | 'Light' | 'Thin' | 'Regular' | 'Italic' | 'SemiBold' | 'Bold' | 'Black';
}>`
  font-family: ${props => 'Poppins-' + (props.weight || 'Regular')};
  color: ${props => props.theme.colors[props.color || 'text']};
  text-align: ${props => props.align || 'left'};
  ${({variant}) => {
    return css`
      font-size: ${typography[variant || 'md'] || '16px'};
    `;
  }}
`;
