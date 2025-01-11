import { Button, Dimensions, SafeAreaView, StyleSheet, Text, ToastAndroid, useWindowDimensions, View } from 'react-native';

export  class Homescreenstyles {
  Homescreenstylesfunc = () => {
    const { width, height } = useWindowDimensions();

    const homestyles = StyleSheet.create({
      screen:{
        flex:1,
        // paddingTop: 40,
        // width: 'auto',
        // height: 'auto',
        backgroundColor:"#CBE432"
      },
      container: {
        // flex: 1,
        flexDirection: 'row', // Align items vertically
        flexWrap: 'wrap',
        width: width * 1,
        height: height * 1,
        // width: width,
        // height: height,
        justifyContent: 'space-evenly', // Distribute space around items
        // alignItems: 'flex-start', // Center items horizontally 
        alignContent: 'center',
        marginTop: 40,
        backgroundColor: '#F7F3F5',
      },
      box: {
        width: width * 0.45,
        height: width * 0.35,
        fontSize: 22,
  
        textAlign: 'center',
        alignSelf: 'center',
        marginRight: 5,
        marginLeft: 5,
        marginTop: 25,
        textAlignVertical: 'center',
        fontWeight: 'bold'
        // position: 'relative',
        // top: 0,
        // right: 0
      },
      box1color: {
        color:'white',
        backgroundColor: '#7EB738',
        borderRadius: 15,
        shadowColor: 'grey'
      },
      box2color: {
        color:'white',
        backgroundColor: '#AC16A7',
        borderRadius: 15,
        shadowColor: 'grey'
      },
      box3color: {
        color:'white',
        backgroundColor: '#F68504',
        borderRadius: 15,
        shadowColor: 'grey'
      },
      box4color:{
        color:'white',
        backgroundColor: '#F5426C',
        borderRadius: 15,
        shadowColor: 'grey'
      }
   
    });
    return homestyles;
  }
}




