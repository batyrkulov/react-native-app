import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Photos } from 'screens';
import { color } from 'theme';
import { BottomNavigatorParamList, BottomTabsRoutes } from 'type';

import { TAB_BAR } from './style';

const BottomTabs = (): JSX.Element => {

  const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: TAB_BAR,
        tabBarActiveTintColor: color.palette.white,
      }}
      initialRouteName={BottomTabsRoutes.Home}
    >
      <Tab.Screen name={BottomTabsRoutes.Home} component={Home} />
      <Tab.Screen name={BottomTabsRoutes.Photos} component={Photos} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
