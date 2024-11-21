import { CameraView } from "expo-camera";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function qrScan() {
  return (
    <SafeAreaView style={styleSheet.container}>
      {/* 상태바 배경색 설정 */}
      {Platform.OS === "android" ? (
        <StatusBar
          backgroundColor="#4BB179" // 상태바 배경색
          barStyle="light-content" // 텍스트 색상: light-content (흰색)
        />
      ) : null}

      <CameraView
        style={styleSheet.camStyle}
        facing="back"
        barcodeScannerSettings={{
          barcodeTypes: "qr",
        }}
        onBarcodeScanned={({ data }) => {
          console.log(data); // 창진이한테 보내주고 alert로 문구 띄어야 함
          alert(`Scanned Data: ${data}`);
        }}
      />
    </SafeAreaView>
  );
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4BB179", // 배경색
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
  },
  camStyle: {
    position: "absolute",
    width: 300,
    height: 300,
  },
});
