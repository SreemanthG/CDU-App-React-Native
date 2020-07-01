import React from 'react';
import {Text,View,StyleSheet} from 'react-native'


export default function GridView({navigation}){
    return(
        <View style={styles.container}>
            
            <View style={styles.card}>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
               <Text>* Hello djs fwekjnwkjf qwjehfqjkwf kwqfjwe qekhfjwqfhk;j </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card:{ padding:'10%',
            margin:'10%',
            backgroundColor:'white',
            textAlign:'center', 
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        // backgroundColor:'red',
        width:'100%',
        height:'100%'
    }
})