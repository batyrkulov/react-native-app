import { TextStyle, ViewStyle } from "react-native";

import { color } from "theme";

const BASE_CONTAINER: ViewStyle = {
  flex: 1,
};

const BASE_TITLE: TextStyle = {
  color: color.palette.white,
  fontSize: 15,
  textDecorationLine: 'underline',
};

export const containerPresets: { primary: ViewStyle } = {
  primary: { ...BASE_CONTAINER },
};

export const titlePresets: { primary: TextStyle } = {
  primary: { ...BASE_TITLE },
};

export type IICollapsePresetNames = keyof typeof containerPresets;
