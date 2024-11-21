import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { icons } from '../assets/icons/icons';

const { width, height } = Dimensions.get('window');

const StartPage = () => {
  const router = useRouter();

  return (
    <>
      {/* 상태바 설정 */}
      <StatusBar backgroundColor="#4BB179" barStyle="light-content" />

      {/* SafeAreaView로 화면 꽉 채우기 */}
      <SafeAreaView style={styles.container}>
        {/* 배터리 아이콘 */}
        <Image source={require('../assets/icons/battery.png')} style={styles.icon} />

        {/* 메인 타이틀 */}
        <Text style={styles.mainTitle}>폐건전지를 부탁해</Text>

        {/* 부제목 */}
        <Text style={styles.subtitle}>Please take care of the used batteries.</Text>

        {/* 로그인 버튼 */}
        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => router.push('/sign/login')}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BB179', // 배경색 설정
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // 화면 전체 너비
    height: '100%', // 화면 전체 높이
  },
  icon: {
    width: width * 0.6, // 화면 너비의 60%
    height: width * 0.6, // 화면 너비의 60%
    marginBottom: 10, // 아이콘과 제목 간 간격 줄이기
  },
  mainTitle: {
    fontSize: width * 0.08, // 화면 너비에 비례하여 폰트 크기 설정
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10, // 제목과 부제목 간 간격 설정
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.04, // 화면 너비에 비례하여 폰트 크기 설정
    color: '#FFFFFF',
    marginBottom: 30, // 부제목과 버튼 간 간격 설정
    textAlign: 'center',
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    paddingVertical: 15, // 버튼 안쪽 위아래 여백
    paddingHorizontal: 40, // 버튼 안쪽 좌우 여백
    borderRadius: 25, // 둥근 모서리
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: width * 0.05, // 화면 너비에 비례하여 폰트 크기 설정
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default StartPage;
