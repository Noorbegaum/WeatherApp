import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const AlertBox = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "NO",
          onPress: () => console.log("No Pressed"),
          style: "cancel"
        },
        { text: "YES", onPress: () => console.log("YES Pressed") }
      ]
    );


  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default AlertBox;