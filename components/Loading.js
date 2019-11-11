import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>날씨 정보 </Text>
      <Text style={styles.text}>받아오는 중....</Text>
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#ffd8a8"
  },
  text: {
    color: "#495057",
    fontSize: 35
  }
});
