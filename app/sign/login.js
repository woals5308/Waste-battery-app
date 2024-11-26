import { useRouter } from "expo-router";
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
import { icons } from "../../assets/icons/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage 추가

const login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // 로그인 처리 함수
  const handleLogin = async () => {
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userId", id);  // 'userId' 대신 'id' 사용
      formData.append("userPw", password);  // 'userPw' 대신 'password' 사용
      
      const response = await axios.post("http://192.168.0.10:8080/login", formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 서버가 요구하는 형식으로 설정
        }
      });
      console.log(response.headers.authorization);
      const  token  = response.headers.authorization; // 백엔드에서 받은 토큰
      if (token) {
        // 토큰을 AsyncStorage에 저장
        await AsyncStorage.setItem("userToken", token);
        alert("로그인에 성공하셨습니다.");
        router.push("/Main/main"); // 메인 화면으로 이동
      } else {
        alert("로그인에 실패하였습니다.");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 요청 중 문제가 발생했습니다.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#4BB179" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* 배터리 이미지 */}
          <Image style={styles.image} source={icons.battery} />

          {/* 환영 메시지 */}
          <Text style={styles.welcome}>환영합니다.</Text>
          <Text style={styles.title}>Welcome,</Text>
          <Text style={styles.subtitle}>
            Please take care of the used batteries!
          </Text>

          {/* 아이디 입력 */}
          <TextInput
            style={styles.input}
            placeholder="아이디"
            placeholderTextColor="#fff"
            value={id}
            onChangeText={setId}
          />

          {/* 비밀번호 입력 */}
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          {/* 로그인 버튼 */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>

          {/* 구분선 */}
          <View style={styles.separator} />

          {/* 회원가입 버튼 */}
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => router.push("/sign/signup")}
          >
            <Text style={styles.signupText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30, // 위로 30px 이동
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcome: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 70,
  },
  title: {
    fontSize: 14,
    color: "#fff",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#4BB179",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    color: "#fff",
    marginBottom: 20,
    borderColor: "#fff",
  },
  loginButton: {
    width: "80%",
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    width: "80%",
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 20,
  },
  signupButton: {
    width: "80%",
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default login
