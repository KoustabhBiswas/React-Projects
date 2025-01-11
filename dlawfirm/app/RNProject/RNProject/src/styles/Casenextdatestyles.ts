import { useContext } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, ToastAndroid, useWindowDimensions, View } from 'react-native';
import { HeaderHeightContext } from '@react-navigation/elements';
export class Casenextdatestyles {
    Casenextdatestylesfunc = () => {
        const { width, height } = useWindowDimensions();
        const headerHeight = useContext(HeaderHeightContext);

        const styles = StyleSheet.create({
            screen: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between'
                // flexWrap:'wrap'
                // paddingTop: 40,
                // width: 'auto',
                // height: 'auto',
                // backgroundColor: "#CBE432"
            },
            container: {
                flex: 1,
                flexDirection: 'column', // Align items vertically
    
                width: width * 1,
                height: height * 1,
                justifyContent: 'space-between', // Distribute space around items
                // alignItems: 'flex-start', // Center items horizontally 
                // alignContent: 'flex-start',
                marginTop: 0,
    
    
                backgroundColor: '#F7F3F5', //#F7F3F5
            },
            boxcontainer: {
                // position: 'relative',
                width: width * 0.95,
                height: 'auto',
                fontSize: 16,
                // lineHeight: 44,
                textAlign: 'center',
                marginTop: 15,
                marginRight: 5,
                marginLeft: 10,
                marginBottom: 15,
                // top: 5,
                // bottom: 5, 
                textAlignVertical: 'center',
                fontWeight: 'bold',
                // backgroundColor: "#66B032",
                backgroundColor: "#F7F3F5",
                color: 'white',
                borderRadius: 5,
                shadowColor: '#B7C698', //#B7C698
                shadowOpacity: 1,
                shadowRadius: 50,
                elevation: 10,
            },
            innerbox: {
                flex: 1,
                flexDirection: 'column',
                // flexWrap:'wrap',
                paddingLeft: 10,
                // paddingTop: 10,
                alignContent: 'flex-start',
                justifyContent: 'space-evenly',
                // lineHeight: 44
            },
            innertext: {
                fontWeight: 'bold',
                color: '#01221b',
                marginBottom: 10
            },
            box1color: {
                color: 'black',
                backgroundColor: '#7EB738',
                borderRadius: 15,
                shadowColor: 'grey'
            },
    
            submitbtn: {
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 3,
                marginRight: 10,
                width: width * 0.20,
                // paddingLeft: 10,
                // paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: '#2483A8',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: 5,
                letterSpacing: 0,
                textAlign: 'center'
            },
            heading: {
                alignItems: 'center',
                paddingTop: 25,
    
            },




            centeredView: {
                flex: 1,
                flexDirection:'row',
                justifyContent: 'center',
                alignItems: 'center',
              },
              modalView: {
                margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 35,
                alignItems: 'center',
                // shadowColor: '#000',
                shadowColor: 'grey',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              },
              button: {
                borderRadius: 20,
                padding: 10,
                elevation: 2,
              },
              buttonOpen: {
                backgroundColor: '#F194FF',
              },
              buttonClose: {
                // backgroundColor: '#2196F3',
                backgroundColor:'tomato'
              },
              textStyle: {
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              },
              modalText: {
                marginBottom: 15,
                textAlign: 'center',
              },
    
        });
        return styles;
    }
}




