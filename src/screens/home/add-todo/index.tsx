import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { IListItem } from "type";
import { Modal } from "components";
import { addToList, listSelector, updateListItem, userSelector } from "store";

import { styles } from "./style";

interface IProps {
  visible: boolean;
  toggleModal: () => void;
  editingTodoId?: number;
};

export const AddTodo = ({ editingTodoId, ...rest }: IProps): JSX.Element => {

  const dispatch = useDispatch();

  const userId: number = useSelector(userSelector.id);
  const currentUserList: IListItem[] = useSelector(listSelector.currentUserList);

  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  useEffect(() => {
    if (editingTodoId) {
      setTitle(currentUserList.find(item => item.id === editingTodoId)?.title || '');
      setDesc(currentUserList.find(item => item.id === editingTodoId)?.desc || '');
    }
  }, [editingTodoId]);

  useEffect(() => {
    if (!rest.visible) {
      setTitle('');
      setDesc('');
    }
  }, [rest.visible]);

  const onSubmit = () => {
    if (editingTodoId) {
      dispatch(updateListItem({
        itemId: editingTodoId,
        item: {
          id: editingTodoId,
          authorId: userId,
          title,
          desc,
          modificatedAt: Date.now(),
        }
      }));
    } else {
      dispatch(addToList({
        id: Math.random(),
        authorId: userId,
        title,
        desc,
        modificatedAt: Date.now(),
      }));
    }
    rest.toggleModal();
  }

  return (
    <Modal {...rest} >
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.titleInput}
        placeholder="Title"
      />
      <TextInput
        value={desc}
        onChangeText={text => setDesc(text)}
        style={styles.descInput}
        placeholder="Description"
        multiline
      />
      <TouchableOpacity
        onPress={onSubmit}
        style={styles.addTodoButton}
        disabled={!title.length || !desc.length}
      >
        <Text>{editingTodoId ? 'Update' : 'Add'}</Text>
      </TouchableOpacity>
    </Modal>
  );
};

