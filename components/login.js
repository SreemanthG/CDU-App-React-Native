import React from 'react';
import {Text,View,StyleSheet,Image,Button,TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GridView from './navbutton'
import { SafeAreaView } from 'react-native-safe-area-context';

// const Stack = createStackNavigator();
// <NavigationContainer>
//               <Stack.Navigator>
//                 <Stack.Screen name="Login" component={LoginView} options={{ title: 'LOGIN' }}/>
//                 <Stack.Screen name="Home" component={GridView} options={{ title: 'HOME' }}/>

//                </Stack.Navigator>
// </NavigationContainer>
export default function LoginView({navigation,screenName}){
    console.log(screenName)
    
    return(
       
        <View style={styles.container}>
            <View style={styles.image}>
            <Image
             style={styles.tinyLogo}
             source={{
             uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            
          />
             
            </View>
            <View>
                <Text style={styles.label}>Username :</Text>
                <TextInput
                 style={styles.input}
     
            />
            </View>
            
            <View>
                <Text style={styles.label}>Password :</Text>
         
                
                <TextInput
                 style={styles.input}
                 secureTextEntry={true}
            />
                
            </View>
            <View style={styles.loginScreenButton}>
            <Button
            title="Login"
            color="#FFF"
            accessibilityLabel="Learn more about this purple button"
             onPress={ ()=> navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
            }
           
        />
            </View>
            
            {/* <Text style={styles.card}>
                HELLOS
            </Text>
            <Text style={styles.card}>
                HELLOS
            </Text>
            <Text style={styles.card}>
                HELLOS
            </Text>
            <Text style={styles.card}>
                HELLOS
            </Text>
            <Text style={styles.card}>
                HELLOS
            </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{ padding:10,
            marginTop:10,
            backgroundColor:'',
            textAlign:'center', 
            display:'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            
            backgroundColor:'white'
    },
    container:{
        padding:20,
        paddingTop:100,
        marginTop:10,
        display:'flex',
        flexDirection:'column',
        // justifyContent:'center',
        height:'100%'
    },
    image: {
        textAlign:'center',
        padding:20,
        // margin:10,
        height:100,
        // backgroundColor:'red',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
    },
    tinyLogo: {
       height:100,
       width:100,
       margin:'auto'
    //    width: '100%',
      },
    label:{
        marginTop:30,
        marginBottom:5,
        padding:10,
        fontSize:20
    },
    textValue:{
        fontSize:20,
        fontWeight:'bold'
    },
    loginScreenButton:{
        marginRight:40,
        marginLeft:40,
       marginTop:30,
       marginBottom:200,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#0e0e0e',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
        
      },
      loginText:{
          color:'#FFFFFF',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
      input: { 
          height: 50, 
          borderColor: 'gray', 
          borderWidth: 1 ,
          borderRadius:5,
          paddingHorizontal:10,

    }
})