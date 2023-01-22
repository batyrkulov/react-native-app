import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native";

import { color } from "theme";

const size = Dimensions.get('window').width - 40;

export const CONTAINER: ViewStyle = {
  position: 'absolute',
  left: 1,
  right: 1,
  top: 80,
  alignItems: 'center',
};

export const PICKER_CONTAINER: ViewStyle = {
  width: size,
};

export const PICKER: ViewStyle = {
  backgroundColor: color.secondary,
  borderWidth: 0,
};

export const PLACEHOLDER: TextStyle = {
  color: color.palette.white,
};

export const ARROW_ICON: ImageStyle = {
  tintColor: color.palette.white,
};

export const DROPDOWN_CONTAINER: ViewStyle = {
  backgroundColor: color.secondary,
  borderWidth: 0,
  paddingHorizontal: 15,
};

export const LIST_ITEM_LABEL: TextStyle = {
  color: color.palette.white,
};

export const LIST_ITEM_CONTAINER: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: color.palette.grey,
};

export const TEXT: TextStyle = {
  color: color.palette.white,
};

export const TICK_ICON: ImageStyle = {
  tintColor: color.palette.white,
};

export const RESET: ViewStyle = {
  alignSelf: 'flex-end',
  paddingRight: 25,
  marginTop: 3,
};

export const RESET_TEXT: TextStyle = {
  color: color.palette.white,
  textDecorationLine: 'underline',
};
