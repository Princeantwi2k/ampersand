
import {View, StyleSheet, Text} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Scanner = () => {


    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
        <View style={styles.scan}>

        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
        <View style={styles.space}>
            <View style={styles.last}>
            <Text style={styles.lasttext}>Want to share your contact? </Text>
        <TouchableOpacity style={styles.lasttouch}>
            <Text style={styles.touch}>Send QR</Text>
        </TouchableOpacity>
            </View>
        
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scan:{
        flex:2,
        backgroundColor:"red"
    },
    space:{
        flex:1,
        backgroundColor:"gray"
    },
    last:{
        flexDirection:"row",
        marginVertical:90,
    },
    lasttext:{
        padding:10,
        paddingLeft:20
    },
    lasttouch:{
        padding:10,
        borderWidth:2,
        borderColor:"red"
    },
    touch:{
        color:"red"
    }
})

export default Scanner;
