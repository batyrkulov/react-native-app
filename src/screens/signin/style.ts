import { TextStyle, ViewStyle } from "react-native";

import { color } from "theme";

export const CONTAINER: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const INPUT: TextStyle = {
  height: 50,
  width: '85%',
  marginTop: 20,
  backgroundColor: color.secondary,
  borderRadius: 25,
  paddingLeft: 25,
  color: color.palette.white,
};

export const ERROR: TextStyle = {
  marginTop: 4,
  color: color.error,
};

export const BUTTON_WRAPPER: ViewStyle = {
  width: '85%',
  height: 52,
  borderRadius: 26,
  marginTop: 35,
};

export const BUTTON: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 52,
};

export const BUTTON_TEXT: TextStyle = {
  color: color.palette.white,
  fontSize: 17,
  fontWeight: '700',
  paddingLeft: 5,
};

export const GO2MAIN: ViewStyle = {
  marginTop: 20
};

export const GO2MAIN_TEXT: TextStyle = {
  color: color.palette.white,
  fontSize: 12,
  fontWeight: '500',
};