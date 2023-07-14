import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes, NavigatorParamList } from 'type';

import {Signin} from 'screens';
import { useSelector } from 'react-redux';
import { userSelector } from 'store';

import BottomTabs from './bottom-tabs';

const RootNavigator = (): JSX.Element => {

  const Stack = createNativeStackNavigator<NavigatorParamList>();

  const signedUserId: number = useSelector(userSelector.id) 

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {(signedUserId === 0) && <Stack.Screen name={AppRoutes.Signin} component={Signin} />}
      <Stack.Screen name={AppRoutes.BottomTabs} component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
