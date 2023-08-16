export interface IListItem {
  id: number;
  title: string;
  body: string;
};
export interface IComment {
  id: number;
  body: string;
  postId: number;
};

export interface IListReducerState {
  list: IListItem[];
  comments: IComment[];
  loadings: {
    isLoadPostsLoading: boolean;
    isLoadCommentsLoading: boolean;
    isCreatePostLoading: boolean;
    isCreateCommentLoading: boolean;
    isUpdatePostLoading: boolean;
    isUpdateCommentLoading: boolean;
    isDeletePostLoading: boolean;
    isDeleteCommentLoading: boolean;
  }
};

