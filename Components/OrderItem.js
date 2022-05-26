import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";

const OrderItem = ({ item }) => {
  //   const formatDay = (time) => {
  //     const date = new Date(time);
  //     return date.toLocaleDateString();
  //   };

  console.log(item.item);

  return (
    <View style={styles.order}>
      <View>
        {/* <Text style={styles.data>{formatDay(item.date)}</Text> */}
        <Text style={styles.total}>${item.item.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  order: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 6,
  },
  data: {
    fontSize: 18,
  },
  total: {
    fontSize: 18,
    fontFamily: "LatoRegular",
    color: "black",
  },
});
