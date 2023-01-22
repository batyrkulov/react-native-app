import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert, Image, Text, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { Screen } from "components";
import { color } from "theme";
import { setUser, userSelector } from "store";
import { NavigatorParamList, AppRoutes, FormValues, BottomTabsRoutes } from "type";

import {
  BUTTON,
  BUTTON_TEXT,
  BUTTON_WRAPPER,
  CONTAINER, ERROR,
  GO2MAIN,
  GO2MAIN_TEXT,
  INPUT,
} from "./style";

const personImage = require('assets/person.png');

export const Signin = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<NavigatorParamList, AppRoutes.Signin>>();
  const userName = useSelector(userSelector.name);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      login: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FormValues> = ({ login, password }) => {
    if (login.toLowerCase() === 'admin' && password.toLowerCase() === 'admin') {
      dispatch(setUser({
        name: 'Admin',
      }));
    } else Alert.alert('Wrong login or password');
  };

  const go2main = useCallback(() => navigation.navigate(
    AppRoutes.BottomTabs, { screen: BottomTabsRoutes.Home }
  ), [navigation]);

  useEffect(() => {
    if (userName) navigation.navigate(AppRoutes.BottomTabs, { screen: BottomTabsRoutes.Photos });
  }, [userName]);

  return (
    <Screen style={CONTAINER}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={INPUT}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={color.placeholder}
            placeholder='Login'
          />
        )}
        name="login"
      />
      {errors.login && <Text style={ERROR} >Login is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={INPUT}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={color.placeholder}
            placeholder='Password'
          />
        )}
        name="password"
      />
      {errors.password && <Text style={ERROR} >Password is required.</Text>}
      <LinearGradient
        colors={[color.palette.white, color.primary,]}
        style={BUTTON_WRAPPER}
        start={{ x: 2, y: 0 }}
      >
        <TouchableOpacity style={BUTTON} onPress={handleSubmit(onSubmit)}>
          <Image source={personImage} alt='Person' />
          <Text style={BUTTON_TEXT}>Log In</Text>
        </TouchableOpacity>
      </LinearGradient>
      <TouchableOpacity style={GO2MAIN} onPress={go2main}>
        <Text style={GO2MAIN_TEXT}>Go to main</Text>
      </TouchableOpacity>
    </Screen>
  );
}
