import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";

const AuthStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator> // Feche a tag corretamente
  );
}

export default AppRoutes;
