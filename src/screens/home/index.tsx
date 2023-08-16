import { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useDispatch, useSelector } from "react-redux";

import { Screen } from "components";
import { IListItem } from "type";
import { listSelector, loadPosts, setList, } from 'store';

import { PostCard } from "./post-card";
import { styles } from "./style";
import { AddPost } from "./add-post";

export const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const posts: IListItem[] = useSelector(listSelector.list);
  const isLoadPostsLoading: boolean = useSelector(listSelector.isLoadPostsLoading);

  useEffect(() => {
    if (!posts.length)
      dispatch(loadPosts());
  }, []);

  const toggleModal = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible, setIsModalVisible]);

  return (
    <Screen>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.addTodoText}>Add Post</Text>
        </TouchableOpacity>
      </View>
      <DraggableFlatList
        data={posts}
        renderItem={({ item, drag, isActive }) => (
          <PostCard
            drag={drag}
            isActive={isActive}
            post={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: IListItem) => item.id.toString()}
        onDragEnd={({ data }) => dispatch(setList(data))}
        contentContainerStyle={styles.contentContainerStyle}
      />
      {isLoadPostsLoading && <Text style={styles.loading}>Loading...</Text>}
      <AddPost
        visible={isModalVisible}
        toggleModal={toggleModal}
      />
    </Screen>
  );
}
