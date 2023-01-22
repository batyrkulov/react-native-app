import { ViewStyle } from 'react-native';

const BASE_CONTAINER: ViewStyle = {
  flex: 1,
};

export const containerPresets: { primary: ViewStyle } = {
  primary: { ...BASE_CONTAINER },
};

export type IScreenPresetNames = keyof typeof containerPresets;
