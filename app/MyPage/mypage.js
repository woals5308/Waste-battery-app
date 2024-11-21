import React from "react";
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

const UserInfo = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* 상태바 설정 */}
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />

      {/* 사용자 정보 */}
      <View style={styles.content}>
        {/* 프로필 아이콘 */}
        <Image
          style={styles.profileIcon}
          source={icons.myInfo} // 기본 프로필 이미지
        />

        {/* 타이틀 */}
        <Text style={styles.title}>내 정보</Text>

        {/* 정보 필드 */}
        <View style={styles.infoBox}>
          <Text style={styles.label}>아이디</Text>
          <TextInput
            style={styles.info}
            value="Aryan.Stirk2"
            editable={false} // 편집 불가능
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>이메일</Text>
          <TextInput
            style={styles.info}
            value="aryan.stirk2nd@gmail.com"
            editable={false}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>주소</Text>
          <TextInput
            style={styles.info}
            value="Gotham Road 21..."
            editable={false}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>전화번호</Text>
          <TextInput
            style={styles.info}
            value="+620932938232"
            editable={false}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.label}>포인트</Text>
          <TextInput
            style={styles.info}
            value="3024982387"
            editable={false}
          />
        </View>

        {/* 수거량 보러가기 버튼 */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>수거량 보러가기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179",
  },
  content: {
    flex: 1,
    justifyContent: "center", // 세로 가운데 정렬
    alignItems: "center", // 가로 가운데 정렬
    paddingHorizontal: 20,
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 0,
  },
  title: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 30,
    justifyContent: "center",
  },
  infoBox: {
    width: "100%",
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 5,
  },
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
    top:16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default UserInfo;
