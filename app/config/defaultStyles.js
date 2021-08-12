import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    borderBottomColor: colors.dark,
    fontSize: 18,
  },
};
