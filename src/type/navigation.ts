import { RouteProp } from "@react-navigation/native";
import { IListItem } from "./store";

export type NavigatorParamList = {
  Home: undefined;
  Post: { postId: number };
};

export enum AppRoutes {
  Home = "Home",
  Post = "Post"
};

export type StackRouteProps<RouteName extends keyof NavigatorParamList> =
  RouteProp<NavigatorParamList, RouteName>