import React from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';




const Homepage = ({navigation}) => {
  
    return (
        <View style={styles.contianer}>
            <View style={styles.day}>
                <Image source={require("../image/logo1.png")} style={styles.img} />
            </View>
            <View style={styles.week}>
                <Text style={styles.text1}>SIKA DESIGN</Text>
                <Text style={styles.text12}>CONTACTS</Text>
            </View>
            <View style={styles.month}>
                <TouchableOpacity style={styles.touch} onPress={()=>{navigation.navigate("about")} }>
                <Text style={styles.text}>GET STARTED</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:"#f4f5f0"
    },
    day:{
      flex:0.4,
      
    },
    week:{
        flex:0.5,
     
    },
    month:{
        flex:0.3,
       
    },
    img:{
      height:80,
      width:300,
      marginLeft:30,
      marginTop:100
    },
    text:{
        textAlign:"center",
        fontSize:25,
      
    },
    text1:{
        marginTop:30,
        textAlign:"center",
        fontSize:30,
        color:"gray"
    },
    
    text12:{
     
        textAlign:"center",
        fontSize:25,
        color:"gray",
        
        
    },
    touch:{
        borderBottomWidth:2,
        borderBottomColor:"red",
        marginRight:120,
        marginLeft:120
        
    }


})

export default Homepage;
