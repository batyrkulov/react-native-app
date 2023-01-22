import { TextStyle, ViewStyle } from "react-native";
import { color } from "theme";

export const CONTAINER: ViewStyle = {
  justifyContent: 'center',
  backgroundColor: color.secondary,
  marginHorizontal: 16,
  marginBottom: 15,
  borderRadius: 20,
  padding: 15,
};

export const NAME: TextStyle = {
  color: color.palette.white,
  fontSize: 18,
  fontWeight: '700',
};

export const INFO_BLOCK: ViewStyle = {
  padding: 6,
};

export const WRAPPER: ViewStyle = {
  flexDirection: 'row',
};

export const LABEL: TextStyle = {
  color: color.placeholder,
  fontSize: 14,
  marginRight: 4,
};

