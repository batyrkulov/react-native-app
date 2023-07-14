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
  },
  infoBlock: {
    padding: 6,
  },
  wrapper: {
    flexDirection: 'row',
  },
  label: {
    color: color.placeholder,
    fontSize: 14,
    marginRight: 4,
  }
})


