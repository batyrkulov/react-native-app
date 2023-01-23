import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ItemType } from "react-native-dropdown-picker";
import { MultiSelect } from "react-native-element-dropdown";

import { IPhoto } from "type";
import { color } from "theme";

import {
  CONTAINER,
  DROPDOWN_CONTAINER,
  LIST_ITEM_CONTAINER,
  LIST_ITEM_LABEL,
  PICKER,
  PICKER_FLAT_LIST,
  PLACEHOLDER,
  RESET,
  RESET_TEXT,
  ICON,
  SELECTED,
} from "./style";

interface IProps {
  photos: IPhoto[];
  albumIDs: number[];
  setAlbumIDs: Dispatch<SetStateAction<number[]>>
};

export const Filter = ({ photos, albumIDs, setAlbumIDs }: IProps): JSX.Element => {

  const [items, setItems] = useState<ItemType<number>[]>([]);

  useEffect(() => {
    const uniqueAlbumIDs: number[] = [...new Set(photos.map(photo => photo.albumId))];
    setAlbumIDs([]);
    setItems(uniqueAlbumIDs.map(
      uniqueAlbumID => ({ label: uniqueAlbumID.toString(), value: uniqueAlbumID })
    ));
  }, [photos]);

  const resetFilter = useCallback(() => setAlbumIDs([]), [setAlbumIDs]);

  return (
    <View style={CONTAINER}>
      <TouchableOpacity
        style={RESET}
        onPress={resetFilter}
      >
        <Text style={RESET_TEXT}>Reset filter</Text>
      </TouchableOpacity>
      <MultiSelect
        style={PICKER}
        placeholderStyle={PLACEHOLDER}
        itemTextStyle={LIST_ITEM_LABEL}
        iconStyle={ICON}
        iconColor={color.palette.white}
        itemContainerStyle={LIST_ITEM_CONTAINER}
        flatListProps={{ style: PICKER_FLAT_LIST, initialNumToRender: 100, }}
        containerStyle={DROPDOWN_CONTAINER}
        selectedStyle={SELECTED}
        activeColor={color.palette.middleBlue}
        data={items}
        labelField="label"
        valueField="value"
        placeholder='Filter by album ID'
        value={albumIDs}
        onChange={item => {
          setAlbumIDs([...item]);
        }}
      />
    </View>
  )
};

