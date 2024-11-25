import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";

const RecyclingScreen = () => {
  const handleCompletePress = () => {
    alert("분리 완료되었습니다!");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 상태바 설정 */}
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />

      {/* 화면 컨텐츠 */}
      <View style={styles.content}>
        <Text style={styles.title}>폐전자 분리중</Text>
        <Text style={styles.subTitle}>이 부분은 inde</Text>

        {/* 완료 버튼 */}
        <TouchableOpacity style={styles.button} onPress={handleCompletePress}>
          <Text style={styles.buttonText}>분리 완료</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179", // 배경색
  },
  content: {
    flex: 1,
    justifyContent: "center", // 세로 중앙 정렬
    alignItems: "center", // 가로 중앙 정렬
  },
  title: {
    fontSize: 24, // 큰 글씨 크기
    color: "#FFFFFF", // 흰색 텍스트
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20, // 작은 글씨 크기
    color: "#FFFFFF",
    fontWeight: "500",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFFFFF", // 버튼 배경색
    borderRadius: 8, // 버튼 둥글기
    borderWidth: 1,
    borderColor: "#4BB179",
    paddingVertical: 10, // 세로 패딩
    paddingHorizontal: 40, // 가로 패딩
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4BB179", // 텍스트 색상
  },
});

export default RecyclingScreen;
