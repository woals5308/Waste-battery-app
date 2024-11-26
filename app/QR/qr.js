import axios from "axios";
import { CameraView } from "expo-camera";
import { router } from "expo-router";
import { Alert, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function qrScan() {
  const handleBarcodeScanned = async (data) =>{
    console.log("QR 코드 데이터: ", data);

    // 서버에 QR 데이터를 전송하는 로직
    try{
      const response = await axios.get("http://192.168.0.10:8080/msp/openBox/1",{
        headers:{
          Authorization: `${token}`
        },
        params: { qrData: data },
      });



      router.push("/QR/qrLoading");
      
      console.log("서버 응답",response.data);
      alert("성공","서버로 QR 데이터를 전송했습니다.");


    }catch(error){
      console.error("서버 요청 에러", error.message);

      if(error.response){
        console.error("응답 상태:",error.response.status);
        console.error("응답 상태:",error.response.data);
      }

      Alert.alert("에러발생");
    }
  }




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
          alert("QR 스캔 완료 ", `${data}`);
          handleBarcodeScanned(data);
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
