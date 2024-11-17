import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import GoogleMap from "../../component/Map/GoogleMap"; // GoogleMap 컴포넌트 가져오기

const Main = () => {
//   const [search, setSearch] = useState(""); // 검색어 상태

//   const handleSearch = () => {
//     // 검색어를 기반으로 위치를 업데이트하는 로직 (Geocoding API 사용)
//     console.log("검색된 장소:", search);
//   };

  return (
    <View style={styles.container}>
      {/* 검색창 */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="수거함 찾기"
        //   value={search}
        //   onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.searchButton}
        //  onPress={handleSearch}
         >
          <Text style={styles.searchButtonText}>길찾기</Text>
        </TouchableOpacity>
      </View>

      {/* 지도 */}
      <View style={styles.mapContainer}>
        <GoogleMap />
      </View>

      {/* 하단 네비게이션 */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text>포인트샵</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>수거함</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>내정보</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBox: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#4BB179",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  mapContainer: {
    flex: 1,
  },
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

export default Main;


