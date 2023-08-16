import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { Modal } from "components";
import { createPost } from "store";

import { styles } from "./style";

interface IProps {
  visible: boolean;
  toggleModal: () => void;
};

export const AddPost = ({ visible, toggleModal, }: IProps): JSX.Element => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  useEffect(() => {
    if (!visible) {
      setTitle('');
      setBody('');
    }
  }, [visible]);

  const onSubmit = () => {
    dispatch(createPost({
      id: Math.random(),
      title,
      body,
    }));
    toggleModal();
  }

  return (
    <Modal {...{ visible, toggleModal }} >
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.titleInput}
        placeholder="Title"
      />
      <TextInput
        value={body}
        onChangeText={text => setBody(text)}
        style={styles.descInput}
        placeholder="Description"
        multiline
        textAlignVertical="top"
      />
      <TouchableOpacity
        onPress={onSubmit}
        style={styles.addTodoButton}
        disabled={!title.length || !body.length}
      >
        <Text>Add</Text>
      </TouchableOpacity>
    </Modal>
  );
};

