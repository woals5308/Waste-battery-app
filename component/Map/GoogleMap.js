import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
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
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("위치 권한이 거부되었습니다.");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        setRegion((prevRegion) => ({
          ...prevRegion,
          latitude,
          longitude,
        }));

        setMarkerCoords({
          latitude,
          longitude,
        });
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
          {/* 사용자 위치 마커 */}
          <Marker
            coordinate={markerCoords}
            title="현재 위치"
            description="실시간 위치입니다."
          />

          {/* 수거함 커스텀 마커 */}
          <Marker
            coordinate={{ latitude: 37.5665, longitude: 126.9780 }}
            anchor={{ x: 0.5, y: 0.5 }} // 중심점 조정
          >
            <Image
              source={require("../../assets/icons/battery.png")} // 배터리 이미지 경로
              style={{
                width: 30, // 고정된 너비
                height: 30, // 고정된 높이
              }}
              resizeMode="contain"
            />
          </Marker>
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
