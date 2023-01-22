import { TextStyle, ViewStyle } from "react-native";

import { color } from "theme";

export const CONTAINER: ViewStyle = {
  flexDirection: 'row',
};

export const OPTION_LABEL: TextStyle = {
  color: color.placeholder,
  fontSize: 14,
  marginRight: 4,
};

export const OPTION: TextStyle = {
  color: color.palette.white,
  fontSize: 15,
};

export const FLEX = (n: number): ViewStyle => ({
  flex: n,
});
