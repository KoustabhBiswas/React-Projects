import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ToastAndroid, Button } from 'react-native';

import { Homescreenstyles } from '../styles/Homescreenstyle';

export const Home = ({ navigation }) => {
  const homestylesobj = new Homescreenstyles();
  const homestyles = homestylesobj.Homescreenstylesfunc();

  const goToManageCase = () => {
    navigation.navigate('Managecase');
  }
  const goToAddCases = () => {
    navigation.navigate('Addcases');
  }
  return (
    <ScrollView >

      <View style={homestyles.container}>
        <Text style={[homestyles.box, homestyles.box1color]} onPress={() => { goToManageCase(); }}>Manage Cases</Text>
        <Text style={[homestyles.box, homestyles.box2color]} onPress={()=>{goToAddCases();}}>Add Cases</Text>
        <Text style={[homestyles.box, homestyles.box3color]}>Account</Text>
        <Text style={[homestyles.box, homestyles.box4color]}>Sign OUT</Text>
      </View>
    </ScrollView>
  );
}

