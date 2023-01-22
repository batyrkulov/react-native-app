import { TextStyle, ViewStyle } from "react-native";

import { color } from "theme";

export const CONTAINER: ViewStyle = {
  alignItems: 'center',
  paddingTop: 50,
};

export const FLAT_LIST: ViewStyle = {
  marginTop: 90,
};

export const LOGOUT: ViewStyle = {
  alignSelf: 'flex-end',
  marginRight: 40,
};

export const LOGOUT_TEXT: TextStyle = {
  color: color.palette.white,
};