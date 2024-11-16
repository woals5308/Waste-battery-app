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


const login = () => {

    // const [Id, setId] = useState("");
    // const [Password, setPassword] = useState("");
    const router = useRouter();

    // const handlelogin = async () =>{
    //     if(!Id || !Password){
    //         alert("아이디와 비밀번호를 모두 입력해주세요.");
    //         return; //함수 종료
    //     }
    //     try{
    //         const response = await axios.post('이 자리에 창진이 백 엔드포인트 들어갈 자리', {
    //             Id,
    //             Password,
    //         });
    //         console.log('받아온데이터',response.data);
    //         setId(response.data);
    //         alert('로그인에 성공하셨습니다.');
    //     }catch(error){
    //         console.log('로그인 실패:',error.response.data);
    //         alert('로그인에 실패하였습니다.');
    //     }

    // };




    
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
          <Text style={styles.subtitle}>
            Please take care of the used batteries!
          </Text>

          {/* 아이디 입력 */}
          <TextInput
            style={styles.input}
            placeholder="아이디"
            placeholderTextColor="#fff"
            // value={Id}
            // onChangeText={setId}

          />

          {/* 비밀번호 입력 */}
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            // value={Password}
            // onChangeText={setPassword}
          />

          {/* 로그인 버튼 */}
          <TouchableOpacity style={styles.loginButton} onPress={()=> router.push('/Main/main')}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>

          {/* 구분선 */}
          <View style={styles.separator} />

          {/* 회원가입 버튼 */}
          <TouchableOpacity style={styles.signupButton} 
          onPress={()=> router.push('/sign/signup')}>
            <Text style={styles.signupText}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};


 

export default login;

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
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 14,
      color: "#fff",
      marginBottom: 70,
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
  
