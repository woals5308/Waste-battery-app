import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const Main = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>메인 페이지</Text>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // 배경색
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
