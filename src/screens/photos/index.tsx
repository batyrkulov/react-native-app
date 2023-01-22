import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity } from "react-native";
import { MaterialIndicator } from "react-native-indicators";
import { StackNavigationProp } from '@react-navigation/stack'
import { useDispatch, useSelector } from "react-redux";

import { AppRoutes, IPhoto, NavigatorParamList } from "type";
import { getPhotos } from "api";
import { Screen } from "components";
import { userSelector, setUser } from "store";
import { color } from "theme";

import { Filter } from "./filter";
import { Photo } from "./photo";
import { CONTAINER, FLAT_LIST, LOGOUT, LOGOUT_TEXT } from "./style";

export const Photos = (): JSX.Element => {

  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [albumIDs, setAlbumIDs] = useState<number[]>([]);
  const navigation = useNavigation<StackNavigationProp<NavigatorParamList, AppRoutes.BottomTabs>>();
  const dispatch = useDispatch();
  const isScreenFocused: boolean = useIsFocused();

  const userName = useSelector(userSelector.name);

  const loadPhotos = async () => {
    try {
      const loadedPhotos: IPhoto[] = await getPhotos();
      setPhotos(loadedPhotos);
    } catch (err) {
      Alert.alert(err as string);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  useEffect(() => {
    if (!userName && isScreenFocused) {
      navigation.navigate(AppRoutes.Signin);
      Alert.alert('You should sign in to view this screen!');
    }
  }, [isScreenFocused]);

  const logout = useCallback(() => {
    dispatch(setUser({ name: '' }));
    navigation.navigate(AppRoutes.Signin);
  }, [navigation, dispatch]);

  return (
    <Screen style={CONTAINER}>
      {userName && <>
        <TouchableOpacity style={LOGOUT} onPress={logout}>
          <Text style={LOGOUT_TEXT}>Logout</Text>
        </TouchableOpacity>
        <FlatList
          data={albumIDs.length
            ? photos.filter(photo => albumIDs.some(albumID => albumID === photo.albumId))
            : photos
          }
          renderItem={({ item }) => <Photo photo={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: IPhoto) => item.id.toString()}
          style={FLAT_LIST}
        />
        {photos.length
          ?
          <Filter {...{ photos, albumIDs, setAlbumIDs }} />
          :
          <MaterialIndicator
            color={color.primary}
            size={40}
            count={40}
          />
        }
      </>}
    </Screen>
  );
}
