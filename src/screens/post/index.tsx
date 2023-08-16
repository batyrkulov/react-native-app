import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { Screen } from "components";
import { createComment, listSelector, loadComments } from "store";
import { NavigatorParamList, AppRoutes, StackRouteProps, IListItem, IComment } from "type";

import { styles } from "./style";
import { CommentCard } from "./comment-card";

export const Post = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<NavigatorParamList, AppRoutes.Post>>();
  const [currentPost, setCurrentPost] = useState<IListItem | undefined>(undefined);
  const [newComment, setNewComment] = useState<string>('');
  const comments: IComment[] = useSelector(listSelector.comments);
  const posts: IListItem[] = useSelector(listSelector.list);

  const { params: { postId } } = useRoute<StackRouteProps<AppRoutes.Post>>();

  useEffect(() => {
    setCurrentPost(posts.find(item => item.id === postId));
  }, [postId])

  useEffect(() => {
    if (!comments.length)
      dispatch(loadComments());
  }, []);

  const addComment = () => {
    dispatch(createComment({
      id: Math.random(),
      postId: postId,
      body: newComment,
    }));
    setNewComment('');
  }

  return (
    <Screen style={styles.container}>
      {currentPost && <>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{currentPost.title}</Text>
          <Text style={styles.desc}>{currentPost.body}</Text>
        </View>
        <TextInput
          value={newComment}
          onChangeText={text => setNewComment(text)}
          style={styles.newCommentInput}
          placeholder='New comment'
          placeholderTextColor='gray'
        />
        <TouchableOpacity
          onPress={addComment}
          disabled={!newComment.length}
        >
          <Text style={styles.addComment}>Add comment</Text>
        </TouchableOpacity>
      </>}
      <FlatList
        data={comments.filter(comment => comment.postId === postId)}
        renderItem={({ item }) => (
          <CommentCard
            comment={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: IComment) => item.id.toString()}
      />
    </Screen>
  );
}
