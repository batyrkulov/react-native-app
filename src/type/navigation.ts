import { NavigatorScreenParams } from "@react-navigation/native"

export type BottomNavigatorParamList = {
  Home: undefined;
  Photos: undefined;
};

export type NavigatorParamList = {
  BottomTabs: NavigatorScreenParams<BottomNavigatorParamList>;
  Signin: undefined;
};

export enum AppRoutes {
  BottomTabs = "BottomTabs",
  Signin = "Signin"
};

export enum BottomTabsRoutes {
  Home = "Home",
  Photos = "Photos",
};