import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routes.MY_ACCOUNT}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.MY_ACCOUNT} component={AccountScreen} />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
