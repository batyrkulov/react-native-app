import { Dimensions, TextStyle, ViewStyle } from "react-native";
import { ImageStyle } from "react-native-fast-image";

import { color } from "theme";

const size = Dimensions.get('window').width - 40;

export const CONTAINER: ViewStyle = {
  marginVertical: 10,
  borderRadius: 5,
};

export const IMAGE: ImageStyle = {
  width: size,
  height: size,
  borderRadius: 10,
};

export const TEXT_SHADOW: TextStyle = {
  textShadowColor: 'black',
  textShadowOffset: { width: -1, height: 0 },
  textShadowRadius: 10,
};

export const TITLE: TextStyle = {
  color: color.palette.white,
  fontSize: 17,
  paddingHorizontal: 20,
  fontWeight: '700',
  position: 'absolute',
  bottom: 10,
  alignSelf: 'center',
  ...TEXT_SHADOW,
};

export const ALBUM_ID: TextStyle = {
  color: color.palette.white,
  position: 'absolute',
  top: 10,
  right: 10,
  fontWeight: '500',
  ...TEXT_SHADOW,
};