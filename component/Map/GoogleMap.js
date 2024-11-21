import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const GoogleMap = () => {
  const [region, setRegion] = useState({
    latitude: 37.5665, // 초기 위치 (서울)
    longitude: 126.9780,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [errorMsg, setErrorMsg] = useState(null);
  const [markerCoords, setMarkerCoords] = useState({
    latitude: 37.5665, // 초기 마커 위치
    longitude: 126.9780,
  });

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        // 위치 권한 요청
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("위치 권한이 거부되었습니다.");
          return;
        }

        // 위치 구독 (실시간 업데이트)
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 5000, // 5초 간격으로 업데이트
            distanceInterval: 10, // 10미터 이동 시 업데이트
          },
          (location) => {
            const { latitude, longitude } = location.coords;

            // 지도 중심 위치 업데이트
            setRegion((prevRegion) => ({
              ...prevRegion,
              latitude,
              longitude,
            }));

            // 마커 위치 업데이트
            setMarkerCoords({
              latitude,
              longitude,
            });
          }
        );
      } catch (error) {
        console.error("Error getting location:", error);
        setErrorMsg("위치 정보를 가져오는 데 실패했습니다.");
      }
    };

    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : (
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
        >
          {/* 마커: 실시간 위치 */}
          <Marker
            coordinate={markerCoords}
            title="현재 위치"
            description="실시간 위치입니다."
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  errorText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    color: "red",
  },
});

export default GoogleMap;
