import { memo } from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";

import { IPhoto } from "type";

import { ALBUM_ID, CONTAINER, IMAGE, TITLE } from "./style";

interface IProps {
  photo: IPhoto
};

export const Photo = memo(({ photo }: IProps): JSX.Element => {
  const {
    title,
    url,
    albumId
  } = photo;

  return (
    <View style={CONTAINER}>
      <FastImage
        style={IMAGE}
        source={{ uri: url }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={TITLE}>{title}</Text>
      <Text style={ALBUM_ID}>Album id: {albumId}</Text>
    </View>
  )
});

