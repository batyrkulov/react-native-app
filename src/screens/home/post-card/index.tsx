import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { deletePost, updatePost } from "store";
import { AppRoutes, IListItem, NavigatorParamList } from "type";
import { color } from "theme";

import { styles } from "./style";

interface IProps {
  post: IListItem;
  drag: any
  isActive: boolean
};

export const PostCard = ({
  post,
  drag,
  isActive,
}: IProps): JSX.Element => {
  const {
    id,
    title: initTitle,
    body,
  } = post;

  const [title, setTitle] = useState<string>(initTitle);
  const [desc, setDesc] = useState<string>(body);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<NavigatorParamList, AppRoutes.Home>>();

  const onRemove = (id: number) => {
    dispatch(deletePost(id));
  };

  const onPostPress = (id: number) => {
    navigation.navigate(AppRoutes.Post, { postId: id });
  };

  const onEditPress = () => {
    if (isEditMode) {
      dispatch(updatePost({
        id,
        title,
        body: desc,
      }));
      setIsEditMode(false);
    } else setIsEditMode(true);
  }

  return (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={drag}
        onPress={() => onPostPress(id)}
        disabled={isActive}
        style={[
          styles.container,
          { backgroundColor: isActive ? color.background : color.secondary },
        ]}
      >
        <View style={styles.header}>
          <TextInput
            value={title}
            onChangeText={text => setTitle(text)}
            editable={isEditMode}
            style={[styles.name, isEditMode && styles.border]}
          />
          <View>
            <TouchableOpacity onPress={onEditPress} >
              <Text style={styles.buttons}>{isEditMode ? 'Save' : 'Edit'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onRemove(id)}>
              <Text style={styles.buttons}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoBlock}>
          <View style={styles.wrapper}>
            <TextInput
              value={desc}
              onChangeText={text => setDesc(text)}
              editable={isEditMode}
              style={[styles.desc, isEditMode && styles.border]}
              multiline
            />
          </View>
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};

