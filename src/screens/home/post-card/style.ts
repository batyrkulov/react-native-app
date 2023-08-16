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
  name: {
    color: color.palette.white,
    fontSize: 18,
    fontWeight: '700',
    marginRight: 8,
  },
  desc: {
    color: color.palette.white,
    minHeight: 60,
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
  }
})


