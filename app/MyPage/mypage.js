import React, { useState } from "react";
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
import { icons } from "../../assets/icons/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  // 사용자 정보 가져오기 함수
  const fetchUserInfo = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken"); // 저장된 토큰 가져오기
      if (!token) {
        alert("로그인이 필요합니다.");
        router.push("/sign/login");
        return;
      }

      console.log(token)
      console.log("요기");

      // 서버에서 사용자 정보 요청
      const response = await axios.get("http://192.168.0.10:8080/msp/myInfo", {
        headers: {
          Authorization: `${token}`
        },
      });
      console.log("저기");

      setUserInfo(response.data); // 사용자 정보 저장

      console.log(response)
    } catch (error) {
      console.error("유저 정보 가져오기 실패:", error);
      alert("유저 정보를 가져오는 중 문제가 발생했습니다.");
    }
  };

  // 컴포넌트 로드 시 사용자 정보 요청
  if (!userInfo) {
    fetchUserInfo();
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>로딩 중...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />

      <View style={styles.content}>
        <Image style={styles.profileIcon} source={icons.myInfo} />
        <Text style={styles.title}>내 정보</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>아이디</Text>
          <TextInput style={styles.info} value={userInfo.userId} editable={false} />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>이메일</Text>
          <TextInput style={styles.info} value={userInfo.userEmail} editable={false} />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>주소</Text>
          <TextInput style={styles.info} value={userInfo.userAdd} editable={false} />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>닉네임</Text>
          <TextInput style={styles.info} value={userInfo.userName} editable={false} />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>포인트</Text>
          <TextInput style={styles.info} value={String(userInfo.userPoints)} editable={false} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => router.push("/CollectionVolume/CV")}>
            수거량 보러가기
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

export default UserInfo;
