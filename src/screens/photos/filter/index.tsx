import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";

import { IPhoto } from "type";

import {
  ARROW_ICON,
  CONTAINER,
  DROPDOWN_CONTAINER,
  LIST_ITEM_CONTAINER,
  LIST_ITEM_LABEL,
  PICKER, PICKER_CONTAINER,
  PLACEHOLDER,
  RESET,
  RESET_TEXT,
  TEXT,
  TICK_ICON,
} from "./style";

interface IProps {
  photos: IPhoto[];
  albumIDs: number[];
  setAlbumIDs: Dispatch<SetStateAction<number[]>>
};

export const Filter = ({ photos, albumIDs, setAlbumIDs }: IProps): JSX.Element => {

  const [items, setItems] = useState<ItemType<number>[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      <DropDownPicker
        multiple={true}
        items={items}
        open={isOpen}
        value={albumIDs}
        setOpen={setIsOpen}
        setValue={setAlbumIDs}
        setItems={setItems}
        containerStyle={PICKER_CONTAINER}
        placeholder='Filter by album ID'
        style={PICKER}
        placeholderStyle={PLACEHOLDER}
        arrowIconStyle={ARROW_ICON}
        dropDownContainerStyle={DROPDOWN_CONTAINER}
        listItemLabelStyle={LIST_ITEM_LABEL}
        listItemContainerStyle={LIST_ITEM_CONTAINER}
        textStyle={TEXT}
        tickIconStyle={TICK_ICON}
      />
      <TouchableOpacity
        style={RESET}
        onPress={resetFilter}
      >
        <Text style={RESET_TEXT}>Reset filter</Text>
      </TouchableOpacity>
    </View>
  )
};

