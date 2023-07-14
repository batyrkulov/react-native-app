import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Alert, Image, Text, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { Screen } from "components";
import { color } from "theme";
import { setUser, userSelector } from "store";
import { NavigatorParamList, AppRoutes, FormValues, BottomTabsRoutes } from "type";

import { styles } from "./style";

const personImage = require('assets/person.png');

export const Signin = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<NavigatorParamList, AppRoutes.Signin>>();
  const userId = useSelector(userSelector.id);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      login: '',
      password: '',
    }
  });

  const onSubmit: SubmitHandler<FormValues> = ({ login, password }) => {
    if (login.toLowerCase() === 'user1' && password.toLowerCase() === 'user1pass') {
      dispatch(setUser({
        id: 1,
      }));
    } else if (login.toLowerCase() === 'user2' && password.toLowerCase() === 'user2pass') {
      dispatch(setUser({
        id: 2,
      }));
    } else Alert.alert('Wrong login or password');
  };

  useEffect(() => {
    if (userId) navigation.navigate(AppRoutes.BottomTabs, { screen: BottomTabsRoutes.Home });
  }, [userId]);

  return (
    <Screen style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={color.placeholder}
            placeholder='Login'
          />
        )}
        name="login"
      />
      {errors.login && <Text style={styles.error} >Login is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={color.placeholder}
            placeholder='Password'
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.error} >Password is required.</Text>}
      <LinearGradient
        colors={[color.palette.white, color.primary,]}
        style={styles.buttonWrapper}
        start={{ x: 2, y: 0 }}
      >
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Image source={personImage} alt='Person' />
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </LinearGradient>
    </Screen>
  );
}
