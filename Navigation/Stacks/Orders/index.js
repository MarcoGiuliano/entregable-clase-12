import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../../../Screens/OrderScreen";
import { colors } from "../../../Styles/colors";

const OrderStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.darkBlue,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "Koulen",
          fontSize: 28,
        },
        headerTitleAlign: "center",
        // headerTransparent: true,
        // header: () => {
        //   return <Header/>
        // }
      }}
    >
      <Stack.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          title: "Ordenes",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
