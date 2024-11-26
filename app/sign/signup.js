import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../assets/icons/icons";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage 추가

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");
  const [userAdd, setUserAdd] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();

  // 회원가입 처리 함수
  const handleSignup = async () => {
    // 입력 값 검증
    if (!userId || !userPw || !userName || !userEmail || !userAdd) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      // 서버로 회원가입 요청
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("userPw", userPw);
      formData.append("userName", userName);
      formData.append("userAdd", userAdd);
      formData.append("userEmail", userEmail);

      console.log("요청 전!")

      const response = await axios.post("http://192.168.0.10:8080/join", formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 서버가 요구하는 형식으로 설정
        }
        

      }
      );
      alert("회원가입을 성공하셨습니다.");
      router.back('/sign/login');

      console.log(response)

    } catch (error) {
      if (error.response) {
        // 서버에서 응답이 왔지만, 오류가 발생한 경우 (예: 4xx, 5xx)
        console.error('Error response:', error.response);
        console.error('Error status:', error.response.status);
        console.error('Error data:', error.response.data);  // 서버에서 보내는 에러 메시지 확인
      } else if (error.request) {
        // 요청은 보냈지만 서버로부터 응답을 받지 못한 경우
        console.error('Error request:', error.request);
      } else {
        // 요청을 설정하는 중 발생한 에러
        console.error('Error message:', error.message);
      }
      console.error('Full error:', error);  // 전체 에러 객체 출력 (디버깅용)
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {/* 배터리 이미지 */}
          <Image style={styles.image} source={icons.battery} />

          {/* 제목 */}
          <Text style={styles.title}>회원 가입</Text>
          <Text style={styles.subtitle}>Join The Membership</Text>

          {/* 입력 필드 */}
          <TextInput
            style={styles.input}
            placeholder="아이디"
            placeholderTextColor="#fff"
            value={userId}
            onChangeText={setUserId}
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={userPw}
            onChangeText={setUserPw}
          />
          <TextInput
            style={styles.input}
            placeholder="닉네임"
            placeholderTextColor="#fff"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            style={styles.input}
            placeholder="주소"
            placeholderTextColor="#fff"
            value={userAdd}
            onChangeText={setUserAdd}
          />
          <TextInput
            style={styles.input}
            placeholder="이메일"
            placeholderTextColor="#fff"
            value={userEmail}
            onChangeText={setUserEmail}
          />

          {/* 등록하기 버튼 */}
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>등록하기</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179", // 배경색
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20, // 좌우 여백
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50, // 전체 화면을 위로 50px 이동
  },
  image: {
    width: 200, // 이미지 크기 조정
    height: 200,
  },
  title: {
    fontSize: 30, // 제목 폰트 크기
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5, // 제목과 부제목 간격 최소화
  },
  subtitle: {
    fontSize: 18, // 부제목 폰트 크기
    color: "#fff",
    fontWeight: "500",
    marginBottom: 30, // 부제목 아래 간격 설정
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#4BB179", // 입력 필드 배경색
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#fff",
    marginBottom: 15,
  },
  button: {
    width: "40%",
    height: 50,
    backgroundColor: "#4BB179", // 버튼 배경색
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Signup;

