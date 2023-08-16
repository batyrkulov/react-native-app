import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topButtonsContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    marginBottom: 20,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
  loading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    alignSelf: 'center',
  },
  addTodoText: {
    color: 'white',
    fontSize: 15,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
});