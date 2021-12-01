import React from 'react';
import {View, StyleSheet,Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Aboutpage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image source={require("../image/pic.jpg")} style={styles.pic} />
            </View>
            <View style={styles.text}>
                <Text style={styles.texts}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
                <Text style={styles.textss}>Sign in or register with yur ampersome email</Text>
            </View>
            <View style={styles.in}>
                <TouchableOpacity style={styles.registers} onPress={()=>navigation.navigate("register")}>
                    <Text style={styles.register}>
                        REGISTER
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signs} onPress={()=>navigation.navigate("login")}>
                    <Text style={styles.sign}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    pic:{
        height:400,
        width:420
    },
    img:{
        flex:5
    },
    text:{
flex:3,


    },
    in:{
        flex:1,
       
        flexDirection:"row",
        justifyContent:"space-between"

    },
    texts:{
        fontSize:20,
        padding:10
    },
    textss:{
        fontSize:16,
        padding:10,
        color:"gray"
    },
    register:{
        paddingLeft:10,
        paddingBottom:7,
        
    },
    sign:{
        paddingRight:10,
        paddingBottom:7,
        
    },
    signs:{
        borderBottomColor:"red",
        borderBottomWidth:2,
        marginRight:10
        
    },
    registers:{
     borderBottomColor:"red",
        borderBottomWidth:2,
        marginLeft:10
       
    }
})

export default Aboutpage;
