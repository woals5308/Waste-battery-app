import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const CollectionScreen = () => {
  const router = useRouter();

  // 샘플 데이터
  const data = [
    { date: "2023-11-01", name: "수거함 A", weight: "5kg", points: "50", used: "사용" },
    { date: "2023-11-02", name: "수거함 B", weight: "3kg", points: "30", used: "미사용" },
    { date: "2023-11-03", name: "수거함 C", weight: "7kg", points: "70", used: "사용" },
    { date: "2023-11-04", name: "수거함 D", weight: "2kg", points: "20", used: "미사용" },
    { date: "2023-11-05", name: "수거함 E", weight: "4kg", points: "40", used: "사용" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* 상태바 */}
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />

      {/* 제목 */}
      <Text style={styles.title}>수거량</Text>

      {/* 테이블 헤더 */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>날짜</Text>
        <Text style={styles.headerText}>수거함 이름</Text>
        <Text style={styles.headerText}>무게</Text>
        <Text style={styles.headerText}>획득포인트</Text>
        <Text style={styles.headerText}>사용여부</Text>
      </View>

      {/* 테이블 데이터 */}
      <ScrollView style={styles.tableBody}>
        {data.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.rowText}>{item.date}</Text>
            <Text style={styles.rowText}>{item.name}</Text>
            <Text style={styles.rowText}>{item.weight}</Text>
            <Text style={styles.rowText}>{item.points}</Text>
            <Text style={styles.rowText}>{item.used}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
  },
  headerText: {
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableBody: {
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
  },
  rowText: {
    flex: 1,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default CollectionScreen;
