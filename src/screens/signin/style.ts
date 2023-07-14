import { StyleSheet } from "react-native";

import { color } from "theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '85%',
    marginTop: 20,
    backgroundColor: color.secondary,
    borderRadius: 25,
    paddingLeft: 25,
    color: color.palette.white,
  },
  error: {
    marginTop: 4,
    color: color.error,
  },
  buttonWrapper: {
    width: '85%',
    height: 52,
    borderRadius: 26,
    marginTop: 35,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
  },
  buttonText: {
    color: color.palette.white,
    fontSize: 17,
    fontWeight: '700',
    paddingLeft: 5,
  },
  go2main: {
    marginTop: 20
  },
  go2mainText: {
    color: color.palette.white,
    fontSize: 12,
    fontWeight: '500',
  },
})