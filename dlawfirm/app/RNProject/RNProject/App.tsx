import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, useWindowDimensions, View } from 'react-native';
import { Homescreenstyles } from './src/styles/Homescreenstyle';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './src/components/Home';
import { Managecase } from './src/components/Managecase';
import { Addcases } from './src/components/Addcases';
import { Viewcasedtls } from './src/components/Viewcasedtls';

const stack = createNativeStackNavigator();
export default function App() {
  
  
  return (
    
    
      <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home}  options={{ title: 'Manage Case',headerShown: false}} />
        <stack.Screen name="Managecase" component={Managecase}  options={{ title: 'All Cases',headerShown: true}} />
        <stack.Screen name="Addcases" component={Addcases}  options={{ title: 'Add New Case',headerShown: true}} />
        <stack.Screen name="Viewcasedtls" component={Viewcasedtls}  options={{ title: 'Next Case Date Details',headerShown: true}} />
      </stack.Navigator>
    </NavigationContainer>
      



  )

}


