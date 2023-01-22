import { palette } from './palette';

export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  background: palette.space,
  primary: palette.pink,
  primaryLight: palette.pinkLight,
  secondary: palette.darkBlue,
  placeholder: palette.grey,
  error: palette.pink,
};
