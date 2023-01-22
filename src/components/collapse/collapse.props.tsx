import { ViewStyle } from 'react-native'

import { IICollapsePresetNames } from './collapse.presets'

export interface ICollapseProps {
  title: string;
  children: React.ReactNode;

  style?: ViewStyle;
  preset?: IICollapsePresetNames;
};
