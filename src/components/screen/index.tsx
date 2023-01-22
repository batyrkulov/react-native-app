
import { mergeAll, flatten } from 'ramda';
import LinearGradient from 'react-native-linear-gradient';

import { color } from 'theme';
import { containerPresets } from './screen.presets';
import { IScreenProps } from './screen.props';

export const Screen = ({
  children,
  style: styleOverride,
  preset = 'primary',
}: IScreenProps): JSX.Element => {

  const style = mergeAll(
    flatten([
      containerPresets[preset] || containerPresets.primary,
      styleOverride,
    ]),
  );

  return (
    <LinearGradient
      colors={[color.palette.white, color.secondary,]}
      style={style}
      start={{ x: 4, y: 0 }}
    >
      {children}
    </LinearGradient>
  )
}
