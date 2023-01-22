import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes, NavigatorParamList } from 'type';

import {Signin} from 'screens';

import BottomTabs from './bottom-tabs';

const RootNavigator = (): JSX.Element => {

  const Stack = createNativeStackNavigator<NavigatorParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={AppRoutes.BottomTabs}
    >
      <Stack.Screen name={AppRoutes.BottomTabs} component={BottomTabs} />
      <Stack.Screen name={AppRoutes.Signin} component={Signin} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
