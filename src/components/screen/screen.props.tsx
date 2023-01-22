import { ViewStyle } from 'react-native';

import { IScreenPresetNames } from './screen.presets';

export interface IScreenProps {
  children: React.ReactNode;

  style?: ViewStyle;
  preset?: IScreenPresetNames;
};
