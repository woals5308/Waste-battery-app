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
import { router, useRouter } from "expo-router";
import axios from "axios";

const Signup = () => {
    const router = useRouter();
    // const [Id , setId] = useState('');
    // const [Password, setPassword] = useState('');
    // const [PhoneNumber, setPhoneNumber] = useState('');
    // const [Email, setEmail] = useState('');
    // const [Adress, setAdress] = useState('');

    // const handleSingup = async () =>{
    //     if(!Id || !Password || !PhoneNumber || !Email || !Adress){
    //         alert('모든 항목을 입력해주세요');
    //         return; // 함수 종료
    //     }
    //     try{
    //         const response = await axios.post('', {
    //             Id,
    //             Password,
    //             PhoneNumber,
    //             Email,
    //             Adress,
    //         });
    //         console.log('회원가입 성공: ',response.data);
    //         alert('회원가입에 성공하셨습니다.');
    //         router.push('/sign/login')
    //     }catch(error){
    //             console.error('회원가입 실패:',response.data);
    //             alert('회원가입 실패')
            
    //     }

    // };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          {/* 뒤로 가기 아이콘 */}
          <TouchableOpacity onPress={() => router.back('/sign/login')}>
            <Image
              style={styles.backIcon}
              source={icons.backicon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* 배터리 이미지 */}
          <Image
            style={styles.image}
            source={icons.battery}
          />

          {/* 제목 */}
          <Text style={styles.title}>회원 가입</Text>

          {/* 입력 필드 */}
          <TextInput style={styles.input} 
          placeholder="아이디" 
          placeholderTextColor="#fff"
        //   value={Id}
        //   onChangeText={setId}
          />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            // value={Password}
            // onChangeText={setPassword}
          />
          <TextInput style={styles.input} 
           placeholder="전화번호"
           placeholderTextColor="#fff"
        //    value={PhoneNumber}
        //    onChangeText={setPhoneNumber}
           />
          <TextInput style={styles.input} 
          placeholder="이메일"
          placeholderTextColor="#fff"
        //   value={Email}
        //   onChangeText={setEmail}
          />
          <TextInput style={styles.input}
          placeholder="주소"
          placeholderTextColor="#fff"
        //   value={Adress}
        //   onChangeText={setAdress}
          />

          {/* 등록하기 버튼  여기서 style={style.button} 옆에 나중에 창진이랑 연동하면 위에 handleSignup함수 사용 onPress={handleSingup}*/}
          <TouchableOpacity style={styles.button}>   
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  backIcon: {
    width: 40, // 아이콘 너비
    height: 30, // 아이콘 높이
    marginLeft: 5, // 왼쪽 여백
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
    fontSize: 40, // 제목 폰트 크기
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 30,
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
