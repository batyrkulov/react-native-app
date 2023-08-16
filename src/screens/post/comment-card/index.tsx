import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";

import { AppRoutes, IComment, IListItem, NavigatorParamList } from "type";
import { color } from "theme";

import { styles } from "./style";
import { useState } from "react";
import { deleteComment, deletePost, updateComment, updatePost } from "store";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface IProps {
  comment: IComment;
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const CommentCard = ({
  comment,
}: IProps): JSX.Element => {
  const {
    id,
    body,
  } = comment;

  //const [title, setTitle] = useState<string>(initTitle);
  const [text, setText] = useState<string>(body);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<NavigatorParamList, AppRoutes.Home>>();

  const onRemove = (id: number) => {
    dispatch(deleteComment(id));
  };

  const onEditPress = () => {
    if (isEditMode) {
      dispatch(updateComment({
        ...comment,
        body: text,
      }));
      setIsEditMode(false);
    } else setIsEditMode(true);
  }

  const onCancelPress = async () => {
    setText(body);
    await delay(200)
    setIsEditMode(false);
  }

  return (
    <View
      style={[styles.container]}
    >
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={onEditPress} >
            <Text style={styles.buttons}>{isEditMode ? 'Save' : 'Edit'}</Text>
          </TouchableOpacity>
          {isEditMode && <TouchableOpacity onPress={onCancelPress} >
            <Text style={styles.buttons}>Cancel</Text>
          </TouchableOpacity>}
          <TouchableOpacity onPress={() => onRemove(id)}>
            <Text style={styles.buttons}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.wrapper}>
          <TextInput
            value={text}
            onChangeText={text => setText(text)}
            editable={isEditMode}
            style={[styles.text, isEditMode && styles.border]}
            multiline
            textAlignVertical="top"
          />
        </View>
      </View>
    </View>
  );
};

