import React,{useState,useEffect} from 'react';
import {View, StyleSheet,TouchableOpacity,Text,Image,Platform,TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from "@react-navigation/native";
const Register = ({navigation}) => {
    const { goBack } = useNavigation();

    const [image, setImage] = useState(null); 
    useEffect(() => {
        (async()=>{
            if (Platform.OS !=="web"){
                const{status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if(status !== "granted") {
                    alert('Sorry, we need camera roll permissions to make this work!')
                }
            }
        }) () 
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    
    return (
        <View style={styles.container}>
             <View style={styles.signin}>
                <TouchableOpacity  style={styles.icon}    onPress={() => {
              goBack();
            }}>
                <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.signtext}> Register</Text>
            </View>
            <View style={styles.login}>
            <TouchableOpacity onPress={() => pickImage()} style={{ flex: 1, }}>
      {image ? <View style={{flex:1}}><Image source={{ uri: image }} style={{ width: "100%", height: "100%",resizeMode:"cover", position: "absolute" }} />
      <Text style={styles.photo}>EDITH PPRFLIE PHOTO</Text>
      </View> : <View>
          <Image source={require("../image/profile.png")}  style={{ width: "100%", height: 200,resizeMode:"cover", position: "absolute" }}/>
          <Text style={styles.photo}>ADD PPRFLIE PHOTO</Text>
          </View>}
    </TouchableOpacity>
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
    freein:{
        flex:0.5,
       
      
    },
    email:{
        
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
        // position:"relative"
    },
    pic:{
        height:200,
        width:420
       },
       photo:{
           textAlign:"center",
           marginTop:70,
           borderWidth:2,
           padding:10,
           marginRight:90,
           marginLeft:60,
           color:"white",
           borderColor:"white"
       },
      
    
})

export default Register;
