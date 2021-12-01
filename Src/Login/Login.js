import React from 'react';
import {View, StyleSheet,TouchableOpacity,Text,TextInput, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";
const Login = () => {
    const { goBack } = useNavigation();
    return (

        <View style={styles.container}>
            <View style={styles.signin}>
                <TouchableOpacity  style={styles.icon}    onPress={() => {
              goBack();
            }}>
                <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.signtext}> Sign In</Text>
            </View>
            <View style={styles.login}>
            <Image source={require("../image/kk.jpg")} style={styles.pic} />
            </View>
            <View style={styles.freein}>
           
                <Text style={styles.text2}>Email</Text>
                <Text style={styles.text3}>john.smith@mail.com</Text>
                <TextInput style={styles.email} />
                  <Text style={styles.text4}>Password</Text>
                <TextInput style={styles.password}/>
                
                </View>
            <View style={styles.out}>
                <TouchableOpacity style={styles.signtouch}>
                    <Text style={styles.name}> SIGN IN</Text>
                </TouchableOpacity>
                </View>
            <View style={styles.in}>
                <Text style={styles.ck}>Forgot? </Text>
            <TouchableOpacity  style={styles.reset} >
               <Text style={styles.ck}>Reset Password</Text>
            </TouchableOpacity>
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
    flex:3,
  color:"white",
  marginTop:20,
    textAlign:"center",
    paddingVertical:20,
    fontSize:20
    },
    login:{
        flex:0.3,
        
    },
    freein:{
        flex:0.2,
        marginTop:20
      
      
    },
    out:{
        flex:0.2,
      
    },
    in:{
        flex:0.2,
     
        flexDirection:"row",
        
    },
    email:{
  margin:30
    },
    password:{
        marginLeft:30
          },
    text2:{
        position:"absolute",
        top:20,
        left:20,
        fontSize:20
    },
    text3:{
        position:"absolute",
        right:20,
        top:20
    },
    text4:{
        position:"absolute",
        left:20,
        fontSize:20,
        top:70
    },
    signtouch:{
   backgroundColor:"#fe2b4c",
   height:70,
   marginLeft:20,
   marginRight:20,
   borderRadius:30
   
    },
    ck:{
        marginTop:30,
    },
    pic:{
     height:200,
     width:420
    },

    reset:{
        marginBottom:90,
        borderBottomWidth:2,
        borderBottomColor:"red"
    },
    name:{
        fontSize:20,
        justifyContent:"center",
        textAlign:"center",
        marginTop:20,
        color:"white"
    }
})

export default Login;
