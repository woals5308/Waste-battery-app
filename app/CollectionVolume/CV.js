import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const CollectionScreen = () => {
  const [collectionInfo, setCollectionInfo] = useState([]); // 수거량 데이터 저장
  const router = useRouter();

  // 수거량 데이터 가져오기 함수
  const fetchCollectionInfo = async () => {
    try {
      const token = await AsyncStorage.getItem("usertoken");
      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const response = await axios.get("http://192.168.0.10:8080/msp/myCollection/1",{
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      // 응답 데이터를 상태로 설정
      setCollectionInfo(response.data);
    } catch (error) {
      console.error("수거량 데이터 가져오기 실패: ", error);
      alert("수거량 정보를 가져오는 중 문제가 발생했습니다.");
    }
  };

  // 컴포넌트가 로드될 때 데이터를 가져옴
  useEffect(() => {
    fetchCollectionInfo();
  }, []);
// 테이블에 나타낼 것   날짜,수거함이름,획득 포인트    후 에는 무게까지 
  return (
    <SafeAreaView style={styles.container}>
      {/* 상태바 */}
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />

      {/* 제목 */}
      <Text style={styles.title}>수거량</Text>

      {/* 테이블 헤더 */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>날짜</Text>
        <Text style={styles.headerText}>수거함 ID</Text>
        <Text style={styles.headerText}>무게</Text>
        <Text style={styles.headerText}>포인트</Text>
        <Text style={styles.headerText}>사용 여부</Text>
      </View>

      {/* 테이블 데이터 */}
      <ScrollView style={styles.tableBody}>
        {collectionInfo.length > 0 ? (
          collectionInfo.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.rowText}>{item.id.time}</Text>
              <Text style={styles.rowText}>{item.id.boxId}</Text>
              <Text style={styles.rowText}>{item.weight}kg</Text>
              <Text style={styles.rowText}>{item.points}</Text>
              <Text style={styles.rowText}>
                {item.isUsed ? "사용" : "미사용"}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>수거량 정보가 없습니다.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179",
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
  noDataText: {
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 20,
    fontSize: 16,
  },
});

export default CollectionScreen;
