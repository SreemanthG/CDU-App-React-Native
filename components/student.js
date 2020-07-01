import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'


export default function StudentView(){
    return(
        <>
        <SafeAreaView>
            <ScrollView>
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
                <Text style={styles.label}>Name :</Text>
                <View style={styles.card}>
                
                    <Text style={styles.textValue}>Sreemanth</Text>
                </View>
            </View>
            
            <View>
                <Text style={styles.label}>Admission no. :</Text>
                <View style={styles.card}>
                
                    <Text style={styles.textValue}>Sreemanth</Text>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Number :</Text>
                <View style={styles.card}>
                
                    <Text style={styles.textValue}>Sreemanth</Text>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Father Name :</Text>
                <View style={styles.card}>
                
                    <Text style={styles.textValue}>Sreemanth</Text>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Father Number :</Text>
                <View style={styles.card}>
                
                    <Text style={styles.textValue}>Sreemanth</Text>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Semester :</Text>
                <View style={styles.card}>
                
                    <Text style={styles.textValue}>Sreemanth</Text>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Branch :</Text>
                <View style={styles.card}>
                
                    <Text style={styles.textValue}>Sreemanth</Text>
                </View>
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

            </ScrollView>
        </SafeAreaView>
       
        </>
       
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
    }
})