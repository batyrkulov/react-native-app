import { StyleSheet } from "react-native";

import { color } from "theme";

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    justifyContent: 'center',
    backgroundColor: color.secondary,
    marginHorizontal: 16,
    marginBottom: 15,
    borderRadius: 20,
    padding: 15,
  },
  infoBlock: {
    padding: 6,
  },
  wrapper: {
    flexDirection: 'row',
  },
  buttons: {
    color: 'white',
    marginVertical: 3,
  },
  border: {
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    paddingLeft: 11,
    borderRadius: 5,
    minHeight: 90,
  },
  text: {
    color: 'white',
  }
})


