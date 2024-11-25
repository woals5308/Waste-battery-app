import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BottomNV = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      {/* 하단 네비게이션 */}
      <View style={styles.bottomNav}>
        {/* 포인트샵 버튼 */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/PointShop/point')} // 포인트샵 경로
        >
          <Text>포인트샵</Text>
        </TouchableOpacity>

        {/* QR 버튼 */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/QR/qr')} // QR 경로
        >
          <Text>QR</Text>
        </TouchableOpacity>

        {/* 수거함 버튼 */}
        <TouchableOpacity style={styles.navItem}>
          <Text>수거함</Text>
        </TouchableOpacity>

        {/* 내정보 버튼 */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/MyPage/mypage')} // 내정보 경로
        >
          <Text>내정보</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#f8f8f8",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
  },
});

export default BottomNV;
