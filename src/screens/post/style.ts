import { StyleSheet } from "react-native";

import { color } from "theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  headerContainer: {
    marginHorizontal: 16,
  },
  addComment: {
    marginHorizontal: 16,
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    textDecorationLine: 'underline'
  },
  newCommentInput: {
    height: 50,
    width: '85%',
    marginTop: 20,
    backgroundColor: color.secondary,
    borderRadius: 25,
    paddingLeft: 25,
    color: color.palette.white,
    marginHorizontal: 16,
    marginBottom: 15,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
  },
  desc: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
})