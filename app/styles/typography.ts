import {Platform} from 'react-native';

export type FontVariantType = {
  /**
   * Android 34px - IOS 34px
   */
  '2xl'?: string;
  /**
   * Android 24px - IOS 22px
   */
  xl?: string;
  /**
   * Android 20px - IOS 20px
   */
  lg?: string;
  /**
   * Android 16px - IOS 17px
   */
  md?: string;
  /**
   * Android 14px - IOS 15px
   */
  sm?: string;
  /**
   * Android 12px - IOS 13px
   */
  xs?: string;
};

export const typography: FontVariantType = {
  ...Platform.select({
    android: {
      '2xl': '34px',
      xl: '24px',
      lg: '20px',
      md: '16px',
      sm: '14px',
      xs: '12px',
    },
    ios: {
      '2xl': '34px',
      xl: '22px',
      lg: '20px',
      md: '17px',
      sm: '15px',
      xs: '13px',
    },
  }),
};
