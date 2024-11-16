import React from "react";
import { View } from "react-native";



const GoogleMap = () =>{

    return(
        <View style={{flex:1}}>
          <MapView style={styles.map} />
        </View>
    )
}

const styles = StyleSheet.create({
    a1 : {
        flex:1,
        backgroundColor:"#4BB179"
    },
    map: {
        width: '100%',
        height: '100%',
      },
})

export default GoogleMap;