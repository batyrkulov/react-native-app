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

export const PICKER: ViewStyle = {
  backgroundColor: color.secondary,
  borderWidth: 0,
  width: size,
  height: 50,
  paddingHorizontal: 15,
  borderRadius: 10,
};

export const PICKER_FLAT_LIST: ViewStyle = {
  backgroundColor: color.secondary,
};

export const PLACEHOLDER: TextStyle = {
  color: color.palette.white,
};

export const DROPDOWN_CONTAINER: ViewStyle = {
  backgroundColor: color.secondary,
  borderWidth: 0,
  paddingHorizontal: 15,
  borderRadius: 9,
};

export const LIST_ITEM_LABEL: TextStyle = {
  color: color.palette.white,
};

export const LIST_ITEM_CONTAINER: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: color.palette.grey,
};

export const SELECTED: ViewStyle = {
  display: 'none',
};

export const ICON: ImageStyle = {
  tintColor: color.palette.white,
  width: 20,
  height: 20,
};


export const RESET: ViewStyle = {
  alignSelf: 'flex-end',
  paddingRight: 25,
  position: 'absolute',
  top: 55,
};

export const RESET_TEXT: TextStyle = {
  color: color.palette.white,
  textDecorationLine: 'underline',
};
