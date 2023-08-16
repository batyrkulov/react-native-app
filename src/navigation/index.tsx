import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes, NavigatorParamList } from 'type';
import {Home, Post} from 'screens';

const RootNavigator = (): JSX.Element => {

  const Stack = createNativeStackNavigator<NavigatorParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={AppRoutes.Home} component={Home} />
      <Stack.Screen name={AppRoutes.Post} component={Post} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
