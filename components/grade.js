import React from 'react';
import {Text,View,StyleSheet,Image,ScrollView,SafeAreaView} from 'react-native'


export default function GradeView(){
    return(
        // <>
        // <SafeAreaView>
        //     <ScrollView>


        //     </ScrollView>
        // </SafeAreaView>
       
        // </>
         <>
         <SafeAreaView>
             <ScrollView>
                    <View style={styles.container}>
                    <Text style={styles.text}>GRADES</Text>

                <View style={styles.card}>
                    <Text style={styles.text}>Semester - 1</Text>
                
                    <Text style={styles.text}> 90%</Text>
                </View>
                
                <View style={styles.card}>
                    <Text style={styles.text}>Semester - 2</Text>
                
                    <Text style={styles.text}> 90%</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Semester - 3</Text>
                
                    <Text style={styles.text}> 90%</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Semester - 4</Text>
                
                    <Text style={styles.text}> 90%</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Semester - 5</Text>
                
                    <Text style={styles.text}> 90%</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.text}>Semester - 6</Text>
                
                    <Text style={styles.text}> 90%</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Semester - 7</Text>
                
                    <Text style={styles.text}> 90%</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>Semester - 8</Text>
                
                    <Text style={styles.text}> 90%</Text>
                </View>
                
                </View>
 
             </ScrollView>
         </SafeAreaView>
        
         </>
        
    )
}

const styles = StyleSheet.create({
    card:{ 
        padding:20,
        borderRadius:25,
        marginVertical:10,
        display:'flex',
        alignItems:'stretch',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between'
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
   
    text:{
        fontSize:20
    }
   
})