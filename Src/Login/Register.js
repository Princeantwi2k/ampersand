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
         
          <View style={styles.text}>
          <Text style={styles.fulls}>Prince Antwi</Text>
              <Text style={styles.full}>Full Name</Text>
              <TextInput placeholder="" style={styles.input} />
              <Text style={styles.email}>Email</Text>
              <Text style={styles.emails}>antwi2k@gmail.com</Text>
              <TextInput placeholder=""  style={styles.input} />
              <Text style={styles.number}>Phone Number</Text>
              <Text style={styles.numbers}>+233(550)300103</Text>
              <TextInput placeholder=""style={styles.input} />
              <Text  style={styles.role}>Role</Text>
              <Text  style={styles.roles}>FrontEnd developer</Text>
              <TextInput placeholder="" style={styles.input} />
              <Text  style={styles.twitter}>Twitter</Text>
              <Text  style={styles.twitters}>@endtime24</Text>
              <TextInput placeholder="" style={styles.input} />
              <Text  style={styles.link}>Linkedin</Text>
              <Text  style={styles.links}>/Prince Antwi</Text>
              <TextInput placeholder="" style={styles.input} />
            
          </View>
          <View style={styles.out}>
                <TouchableOpacity style={styles.signtouch} onPress={()=>{navigation.navigate("code")}}>
                    <Text style={styles.name}> REGISTER </Text>
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
    out:{
        flex:0.1,
      
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
       text:{
           flex:0.5,
          
          
       },
       full:{
           position:"absolute",
           zIndex:2,
           fontSize:20,
           paddingLeft:10,
           top:10
        
       },
       input:{
       padding:15,
       backgroundColor:"white",
       borderBottomWidth:1,
       borderBottomColor:"#ebeaea",
       elevation:5
       
       },
       email:{
       position:"absolute",
       top:55,
       zIndex:2,
       fontSize:20,
        paddingLeft:10,
       },
       number:{
           position:"absolute",
           zIndex:2,
           top:100,
           fontSize:20,
            paddingLeft:10,
       },
       role:{
           position:"absolute",
           zIndex:99,
           fontSize:20,
           top:150,
            paddingLeft:10,
       },
       twitter:{
           position:"absolute",
           zIndex:99,
           fontSize:20,
           top:200,
            paddingLeft:10,
       },
       link:{
           position:"absolute",
         paddingLeft:10,
           zIndex:99,
           fontSize:20,
           top:240
       },
    fulls:{
        position:"absolute",
        zIndex:99,
        right:10,
        fontSize:18,
        top:10,
    },
    emails:{
        position:"absolute",
        zIndex:99,
        right:10,
        top:60,
        color:"gray"
    },
    numbers:{
        position:"absolute",
        zIndex:99,
        right:10,
        top:110,
        color:"gray"
    },
    roles:{
        position:"absolute",
        zIndex:99,
        right:10,
        top:150,
        color:"gray"
    },
    twitters:{
        position:"absolute",
        zIndex:99,
        right:10,
        top:200,
        color:"gray"
    },
    links:{
        position:"absolute",
        zIndex:99,
        right:10,
        top:250,
        color:"gray"
    },
    signtouch:{
        backgroundColor:"#fe2b4c",
        height:70,
        marginLeft:20,
        marginRight:20,
        borderRadius:20
        
         },
         name:{
            fontSize:20,
            justifyContent:"center",
            textAlign:"center",
            marginTop:20,
            color:"white"
        }
     
    
})

export default Register;
