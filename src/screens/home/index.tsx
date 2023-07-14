import { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Screen } from "components";
import { AppRoutes, IListItem, NavigatorParamList } from "type";
import { listSelector, removeListItem, setList, setUser, userSelector } from 'store';

import { TodoCard } from "./todo-card";
import { styles } from "./style";
import { AddTodo } from "./add-todo";

export const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<NavigatorParamList, AppRoutes.BottomTabs>>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [editingTodoId, setEditingTodoId] = useState<number>(0);

  const userId: number = useSelector(userSelector.id);
  const currentUserList: IListItem[] = useSelector(listSelector.currentUserList);

  useEffect(() => {
    if (!userId) navigation.navigate(AppRoutes.Signin);
  }, [userId]);

  useEffect(() => {
    if (editingTodoId) setIsModalVisible(true);
  }, [editingTodoId]);

  useEffect(() => {
    if (!isModalVisible && editingTodoId) setEditingTodoId(0);
    ;
  }, [isModalVisible]);

  const logout = useCallback(() => {
    dispatch(setUser({ id: 0 }));
  }, [dispatch, setUser]);

  const onRemoveTodo = useCallback((id: number) => {
    dispatch(removeListItem(id));
  }, [dispatch, removeListItem]);

  const toggleModal = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible, setIsModalVisible]);

  const onSetEditingTodoId = useCallback((id: number) => {
    setEditingTodoId(id);
  }, [setEditingTodoId]);

  return (
    <Screen>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.addTodoText}>Add todo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.logoutText}>Logout from User{userId}</Text>
        </TouchableOpacity>
      </View>
      <DraggableFlatList
        data={currentUserList}
        renderItem={({ item, drag, isActive }) => (
          <TodoCard
            drag={drag}
            isActive={isActive}
            todo={item}
            setEditingTodoId={onSetEditingTodoId}
            onRemoveTodo={onRemoveTodo}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: IListItem) => item.id.toString()}
        onDragEnd={({ data }) => dispatch(setList(data))}
      />
      <AddTodo
        visible={isModalVisible}
        toggleModal={toggleModal}
        editingTodoId={editingTodoId}
      />
    </Screen>
  );
}
