/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ShowCat from './components/test';
import GridView from './components/navbutton';
import StudentView from './components/student'
import AttendanceView from './components/attendance';
import GradeView from './components/grade'
import TableView from './components/timetable'
import LoginView from './components/login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


// const App: () => React$Node = () => {
function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <NavigationContainer>
  
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
              </Drawer.Navigator>
   
            </NavigationContainer>

          
           {/*  <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>*/}
        <GridView />
        {/* <StudentView /> */}
        {/* <AttendanceView /> */}
        {/* <GradeView /> */}
        {/* <TableView /> */}
        {/* <LoginView screenName="Home"/> */}
        </ScrollView>
        {/* <ShowCat/>  */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
function HomeStackView({navigation}){

  return(
  <Tab.Navigator>
        {/* <Tab.Screen name="Login" component={LoginView} /> */}
        <Tab.Screen name="Home" component={GridView} />
        <Tab.Screen name="Attendance" component={AttendanceView} />
        <Tab.Screen name="Profile" component={StudentView} />
        <Tab.Screen name="Grade" component={GradeView} />
        <Tab.Screen name="TimeTable" component={TableView} />

      </Tab.Navigator>
  )
}

export default ()=>{
 return(
  <NavigationContainer>
  
      
      <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginView} options={{ title: 'LOGIN' }} screenName="Home"/>
    <Stack.Screen name="Home" component={HomeStackView} options={{ title: 'HOME' }} />

   </Stack.Navigator>

   
  
    
</NavigationContainer>
 );
};
