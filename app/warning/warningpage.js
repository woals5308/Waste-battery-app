import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";

const NotificationScreen = () => {
  const messages = [
    "배터리 분리 완료",
    "쓰레기 분리수거 완료",
    "유리병 분리수거 완료",
    "캔 분리수거 완료",
    "플라스틱 분리수거 완료",
  ]; // 하드코딩된 경고 메시지

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />
      <Text style={styles.title}>알림</Text>
      <ScrollView style={styles.scrollView}>
        {messages.map((message, index) => (
          <Text key={index} style={styles.message}>
            {message}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF0000",
    textAlign: "center",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  message: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default NotificationScreen;
