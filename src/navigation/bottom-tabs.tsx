import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import { Home } from 'screens';
import { color } from 'theme';
import { BottomNavigatorParamList, BottomTabsRoutes } from 'type';

import { styles } from './style';

const BottomTabs = (): JSX.Element => {

  const Tab = createBottomTabNavigator<BottomNavigatorParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: color.palette.white,
        ...Platform.OS === 'android' && { tabBarIcon: () => undefined }
      }}
      initialRouteName={BottomTabsRoutes.Home}
    >
      <Tab.Screen name={BottomTabsRoutes.Home} component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
