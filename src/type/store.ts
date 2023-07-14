export interface IListItem {
  id: number;
  authorId: number;
  title: string;
  desc: string;
  modificatedAt: number;
};

export interface IListReducerState {
  list: IListItem[];
};
export interface IUserReducerState {
  id: number;
};

