// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import MapView, { Marker } from "react-native-maps"; // 지도와 마커 추가
// import * as Location from "expo-location"; // 위치 권한 요청 및 현재 위치 가져오기
// import axios from "axios";
// import BottomNV from "../Navigation/navigation";

// const Main = () => {
//   const [search, setSearch] = useState(""); // 검색어 상태
//   const [currentLocation, setCurrentLocation] = useState(null); // 현재 위치
//   const [collectionPoints, setCollectionPoints] = useState([]); // 수거함 좌표 데이터

//   // 현재 위치 가져오기
//   useEffect(() => {
//     const getCurrentLocation = async () => {
//       try {
//         const { status } = await Location.requestForegroundPermissionsAsync();
//         if (status !== "granted") {
//           alert("위치 권한이 필요합니다.");
//           return;
//         }
//         const location = await Location.getCurrentPositionAsync({});
//         setCurrentLocation({
//           latitude: location.coords.latitude,
//           longitude: location.coords.longitude,
//         });
//       } catch (error) {
//         console.error("위치 정보를 가져오는 데 실패했습니다:", error);
//       }
//     };
//     getCurrentLocation();
//   }, []);

//   // 검색 버튼 클릭
//   const handleSearch = async () => {
//     if (!currentLocation) {
//       alert("현재 위치를 가져오는 중입니다. 잠시만 기다려주세요.");
//       return;
//     }
//     try {
//       const { latitude, longitude } = currentLocation;
//       const response = await axios.get(
//         `http://localhost:8080/msp/nearby?latitude=${latitude}&longitude=${longitude}&radius=1000`
//       );
//       setCollectionPoints(response.data); // 수거함 좌표 데이터 저장
//     } catch (error) {
//       console.error("수거함 데이터를 가져오는 데 실패했습니다:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* 검색창 */}
//       <View style={styles.searchBox}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="수거함 찾기"
//           value={search}
//           onChangeText={setSearch}
//         />
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//           <Text style={styles.searchButtonText}>길찾기</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 지도 */}
//       <View style={styles.mapContainer}>
//         {currentLocation && (
//           <MapView
//             style={styles.map}
//             initialRegion={{
//               ...currentLocation,
//               latitudeDelta: 0.01,
//               longitudeDelta: 0.01,
//             }}
//           >
//             {/* 현재 위치 마커 */}
//             <Marker
//               coordinate={currentLocation}
//               title="현재 위치"
//               pinColor="red"
//             />
//             {/* 수거함 마커 */}
//             {collectionPoints.map((point, index) => (
//               <Marker
//                 key={index}
//                 coordinate={{
//                   latitude: point.latitude,
//                   longitude: point.longitude,
//                 }}
//                 title="수거함"
//                 description={point.description || "배터리 수거함"}
//                 pinColor="green" // 수거함 마커 색상
//               />
//             ))}
//           </MapView>
//         )}
//       </View>

//       <BottomNV />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   searchBox: {
//     flexDirection: "row",
//     padding: 10,
//     backgroundColor: "#f8f8f8",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   searchButton: {
//     marginLeft: 10,
//     backgroundColor: "#4BB179",
//     borderRadius: 8,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   searchButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   mapContainer: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
// });

// export default Main;
