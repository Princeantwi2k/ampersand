import React from 'react';
import {View, StyleSheet,Image, Text,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {QRCode} from 'react-native-custom-qr-codes-expo'
import { useNavigation } from "@react-navigation/native";


const Code = ({navigation}) => {
  const { goBack } = useNavigation();
    
    return (
        <View style={styles.container}>
                <View style={styles.signin}>
                <TouchableOpacity  style={styles.icon}    onPress={() => {
              goBack();
            }}>
                <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Image source={require("../image/logo1.png")} />
                <Ionicons name="person" size={24} color="black" style={styles.signtext} />

            </View>
            <View style={styles.Text}>
                <Text style={styles.text}> Exchange Contact Information</Text>
                <Text style={styles.texts}> Scan this QR below to share your contact</Text>
            </View>
            <View style={styles.code}>
            <QRCode logo={require('../image/pic.jpg')} />
             </View>
             <View style={styles.pics}>
               <Image source={require("../image/man.jpg")} style={styles.pi} />
               <View style={styles.picstext}>
               <Text style={{fontSize:18}}> John Shay</Text>
               <Text style={{fontSize:18}}>Head of Marketing</Text>
               </View>
             
             </View>
            <View style={styles.pic}>
              <View style={styles.last}>
              <Text style={styles.lasttext}>Want to add new connection? </Text>
              <TouchableOpacity style={styles.lasttouch}  onPress={()=>navigation.navigate("scan")}>
                <Text style={styles.touch}> Scan QR</Text>
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
    signin:{
        flex:0.1,
        backgroundColor:"#fe2b4c",
        flexDirection:"row",
       
    },
    icon:{
   flex:0.3,
   marginTop:20,
   justifyContent:"center"

    },
    signtext:{
    flex:0.4,
  color:"white",
  marginTop:20,
    textAlign:"center",
    paddingVertical:20,
    fontSize:20
    },
    Text:{
        flex:0.2,
      
        justifyContent:"center"
    },
    text:{
      textAlign:"center",
      fontSize:20
    },
    texts:{
      textAlign:"center",
      fontSize:18,
      color:"gray"
    },
    code:{
        flex:0.3,
        justifyContent:"center",
        alignItems:"center"
        
    },
    pics:{
        flex:0.2,
        flexDirection:"row",
      
    },
    pi:{
     height:70,
     width:70,
     marginTop:40,
     marginLeft:40,
     borderRadius:50
    },
    picstext:{
      marginTop:50,
      marginLeft:20,
     

    },
    
    pic:{
      flex:0.25,
   
     
    },
  
      last:{
        flexDirection:"row",
        marginTop:100,
        borderTopWidth:0.7,
        borderTopColor:"#ebeaea"
      },
      lasttext:{
       margin:20,
      },
      lasttouch:{
       borderColor:"red",
        borderWidth:1,
        margin:10,
        padding:12
        
      },
      touch:{
        color:"red"
      }

})

export default Code;
