import React, { useState, useEffect } from "react";
import { StyleSheet, View, PermissionsAndroid, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";

const GoogleMap = () => {
  const [region, setRegion] = useState({
    latitude: 37.5665, // 초기 위치 (서울)
    longitude: 126.9780,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // 사용자 위치 가져오기
  const fetchUserLocation = async () => {
    if (Platform.OS === "android") {
      // Android에서 위치 권한 요청
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log("위치 권한이 거부되었습니다.");
        return;
      }
    }

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("사용자 위치:", latitude, longitude);

        // 지도 중심을 사용자 위치로 설정
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      (error) => {
        console.error("위치 가져오기 실패:", error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  useEffect(() => {
    fetchUserLocation(); // 컴포넌트 로드 시 사용자 위치 가져오기
  }, []);

  return (
    <MapView
      style={styles.map}
      region={region} // 사용자 위치를 기반으로 지도 중심 설정
      onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
    >
      {/* 마커 */}
      <Marker
        coordinate={{
          latitude: region.latitude,
          longitude: region.longitude,
        }}
        title={"현재 위치"}
        description={"여기가 사용자 위치입니다."}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default GoogleMap;
