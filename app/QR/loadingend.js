import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const CompletionScreen = () => {
  const points = 123; // 획득 포인트

  return (
    <View style={styles.container}>
      {/* 상태바 색상 변경 */}
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />
      
      {/* 메인 컨테이너 */}
      <View style={styles.content}>
        <Text style={styles.title}>폐전지 분리 완료</Text>
        <Text style={styles.points}>
          획득 포인트 : <Text style={styles.pointsValue}>{points}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179", // 배경색 초록
  },
  content: {
    flex: 1,
    justifyContent: "center", // 수직 중앙 정렬
    alignItems: "center", // 수평 중앙 정렬
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20, // 제목과 포인트 간격
  },
  points: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  pointsValue: {
    fontWeight: "bold", // 포인트 강조
    fontSize: 24,
  },
});

export default CompletionScreen;
