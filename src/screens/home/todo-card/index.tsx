import { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScaleDecorator } from "react-native-draggable-flatlist";

import { IListItem } from "type";
import { Collapse } from "components";
import { color } from "theme";

import { styles } from "./style";

interface IProps {
  todo: IListItem;
  setEditingTodoId: (id: number) => void
  onRemoveTodo: (id: number) => void
  drag: any
  isActive: boolean
};

export const TodoCard = memo(({
  todo,
  setEditingTodoId,
  onRemoveTodo,
  drag,
  isActive,
}: IProps): JSX.Element => {
  const {
    id,
    title,
    desc,
  } = todo;

  return (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        style={[
          styles.container,
          { backgroundColor: isActive ? color.background : color.secondary },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.name}>{title}</Text>
          <View>
            <TouchableOpacity onPress={() => setEditingTodoId(id)} >
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onRemoveTodo(id)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infoBlock}>
          <View style={styles.wrapper}>
            <Text style={styles.label}>Collapse:</Text>
            <Collapse title='Description'>
              <Text>{desc}</Text>
            </Collapse>
          </View>
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
  );
});

