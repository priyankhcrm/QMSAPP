import * as React from 'react';
import { Text, View , SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import {  SafeAreaView } from 'react-native-safe-area-context';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// import screens
import FeedScreen from './Screens/FeedScreen';
import ReportScreen from './Screens/ReportScreen';
import ProfileScreen from './Screens/ProfileScreen'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
<SafeAreaView style={{flex: 1,paddingTop:15,backgroundColor:'#b83227'}}>

    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Feed"
      initialLayout={{ height: 3, width: 1 }}


      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#b83227' },
        
      }}
      
      >
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Report" component={ReportScreen} />

        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}



// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';


//  // firebase config
//  const config = {
//   apiKey: "AIzaSyB9kLdczDpgKEjRB4s2IRawCyGtGW-7eac",
//   authDomain: "reactbootcamp-c361a.firebaseapp.com",
//   databaseURL: "https://reactbootcamp-c361a.firebaseio.com",
//   projectId: "reactbootcamp-c361a",
//   storageBucket: "reactbootcamp-c361a.appspot.com",
//   messagingSenderId: "1036624538821",
//   appId: "1:1036624538821:web:0cf77e7fc2ab21545994ac",
//   measurementId: "G-E2T83T6X8Y"
// };

// firebase.initializeApp(config);




// function App() {
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Text>Welcome {user.email}</Text>
//     </View>
//   );
// }