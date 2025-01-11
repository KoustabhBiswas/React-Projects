import { useContext } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, ToastAndroid, useWindowDimensions, View } from 'react-native';
import { HeaderHeightContext } from '@react-navigation/elements';
export class Managecasestyles {
    Managecasestylesfunc = () => {
        const { width, height } = useWindowDimensions();
        const headerHeight = useContext(HeaderHeightContext);

        const homestyles = StyleSheet.create({
            screen: {
                flex: 1,
                // paddingTop: 40,
                // width: 'auto',
                // height: 'auto',
                backgroundColor: "#CBE432"
            },
            container: {
                flex: 1,
                flexDirection: 'column', // Align items vertically

                width: width * 1,
                height:'auto',
                justifyContent: 'space-between', // Distribute space around items
                // alignItems: 'flex-start', // Center items horizontally 
                // alignContent: 'flex-start',
                marginTop: 0,


                backgroundColor: '#F7F3F5', //#F7F3F5
            }, //#00ccff
            boxcontainer: { 
                position: 'relative',
                width: width * 0.95,
                height: 'auto',
                fontSize: 22, 
                textAlign: 'center',
                marginTop: 15, 
                marginRight: 5,
                marginLeft: 10,
                marginBottom: 5,
                // top: 5,
                // bottom: 5, 
                textAlignVertical: 'center',
                fontWeight: 'bold',
                // backgroundColor: "#66B032",
                backgroundColor: "#C8ED9C",
                borderRadius: 5,
                shadowColor: '#0DAAE7',
                shadowOpacity: 0.3,
                shadowRadius: 10, 
                elevation: 5, 
            },
            innerbox:{ 
                flex:1,
                flexDirection:'column',
                // flexWrap:'wrap',
                paddingLeft: 10,
                // paddingTop: 10,
                alignContent: 'flex-start',
                justifyContent:'space-evenly',
            },
            innertext:{
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 5
            },
            box1color: {
                color: 'black',
                backgroundColor: '#7EB738',
                borderRadius: 15,
                shadowColor: 'grey'
            },
            box2color: {
                color: 'white',
                backgroundColor: '#AC16A7',
                borderRadius: 15,
                shadowColor: 'grey'
            },
            box3color: {
                color: 'white',
                backgroundColor: '#F68504',
                borderRadius: 15,
                shadowColor: 'grey'
            },
            box4color: {
                color: 'white',
                backgroundColor: '#F5426C',
                borderRadius: 15,
                shadowColor: 'grey'
            },
            submitbtn:{
                alignSelf: 'center',
                marginTop: 'auto',
                marginBottom: 10,
                width: width * 0.45,
                // paddingLeft: 10,
                // paddingRight: 10,
                paddingTop: 5,
                paddingBottom:5,
                backgroundColor:'#2483A8',
                color:'white',
                fontWeight:'bold',
                borderRadius:5,
                letterSpacing: 3,
                textAlign:'center'
            },
            loadmorebtn:{
                alignSelf: 'center',
                marginTop: 'auto',
                marginBottom: 10,
                width: width * 0.45,
                // paddingLeft: 10,
                // paddingRight: 10,
                paddingTop: 5,
                paddingBottom:5,
                backgroundColor:'#00ccff',
                color:'white',
                fontWeight:'bold',
                borderRadius:5,
                letterSpacing: 3,
                textAlign:'center'
            }

        });
        return homestyles;
    }
}




