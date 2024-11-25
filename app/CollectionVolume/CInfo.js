import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CollectionInfo = () => {
  const [collectionInfo, setCollectionInfo] = useState(null); // 수거함 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const router = useRouter();

  useEffect(() => {
    const fetchCollectionInfo = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken"); // 토큰 가져오기
        if (!token) {
          alert("로그인이 필요합니다.");
          router.push("/sign/login");
          return;
        }

        // 수거함 데이터 API 호출
        const response = await axios.get("http://localhost:8080/msp/collection", {
          headers: {
            Authorization: `Bearer ${token}`, // 인증 토큰 추가
          },
        });

        setCollectionInfo(response.data); // 서버에서 가져온 데이터 저장
      } catch (error) {
        console.error("수거함 정보 가져오기 실패:", error);
        alert("수거함 정보를 가져오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false); // 로딩 상태 해제
      }
    };

    fetchCollectionInfo();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>로딩 중...</Text>
      </View>
    );
  }

  if (!collectionInfo) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>수거함 정보를 불러올 수 없습니다.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />

      <View style={styles.content}>
        <Image
          style={styles.profileIcon}
          source={require("../../assets/icons/수거함.png")} // 수거함 아이콘
        />
        <Text style={styles.title}>수거함 정보</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>수거함 이름</Text>
          <TextInput
            style={styles.info}
            value={collectionInfo.name}
            editable={false}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>온도</Text>
          <TextInput
            style={styles.info}
            value={`${collectionInfo.temperature}°C`}
            editable={false}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>무게</Text>
          <TextInput
            style={styles.info}
            value={`${collectionInfo.weight}kg`}
            editable={false}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>이용 가능 여부</Text>
          <TextInput
            style={styles.info}
            value={collectionInfo.available ? "이용 가능" : "이용 불가"}
            editable={false}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            // onPress={() => router.push("/Map/GoogleMap")}
          >
            지도에서 보기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4BB179" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { fontSize: 20, color: "#fff" },
  content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
  profileIcon: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  title: { fontSize: 28, color: "#FFFFFF", fontWeight: "bold", marginBottom: 30 },
  infoBox: { width: "100%", marginBottom: 10 },
  label: { fontSize: 16, color: "#FFFFFF", marginBottom: 5 },
  info: {
    width: "100%",
    height: 50,
    backgroundColor: "#4BB179",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#FFFFFF",
  },
  button: {
    width: "60%",
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    top: 16,
  },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "#fff" },
});

export default CollectionInfo;
