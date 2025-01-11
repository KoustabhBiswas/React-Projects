import { Alert, Button, FlatList, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Caseapis } from '../apis/Caseapis';
import { useContext, useEffect, useState } from 'react';
import { HeaderHeightContext } from '@react-navigation/elements';
import { format } from 'date-fns/format';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Casenextdatestyles } from '../styles/Casenextdatestyles';

export const Viewcasedtls = ({ navigation, route }) => {


    const intialValue = {};
    const [modalVisible, setModalVisible] = useState(false);
    const [caselist, setCaseDtls] = useState(intialValue);
    const [loading, setLoading] = useState(0);
    const caseapi = new Caseapis();
    const casenextdatestylesobj = new Casenextdatestyles();
    const styles = casenextdatestylesobj.Casenextdatestylesfunc();
    // console.log(route.params.case_id_pk);
    useEffect(() => {
        const cases = caseapi.getSelectedCase(route.params.case_id_pk);
        cases.then((resp) => {
            // console.log('TEST in useeffect');
            setCaseDtls(resp.data);
            setLoading(1);
            // console.log(caselist.casenextdatedtls);
        }).catch((e) => {
            console.log(e);
        });
    }, [loading]);
    const deleteConfirm = (nextdatemapidpk:number) => {
        // console.log("IN Delete confirm" + nextdatemapidpk);
        const cases = caseapi.deleteCaseDate(nextdatemapidpk);
        cases.then((resp)=>{
            console.log(resp.data);
            if(resp.data[1] == 1)
            {
                Alert.alert("","Deleted",[
            
                    {text: 'Close',onPress: () => {console.log("Cencelled"+nextdatemapidpk); setLoading(0); },style:'cancel'},
                    
                ])
            }
            else{
                Alert.alert("","Deleted",[
            
                    {text: 'Close',onPress: () => console.log("Cencelled"+nextdatemapidpk),style:'cancel'},
                    
                ])
            }
        }).catch((e)=> {
            console.log(e);
        }) 
    }
    const deleteModal = (nextdatemapidpk:number) => {
        Alert.alert("Delete ","Are you sure to delete this date ?",[
            
            {text: 'Cancel',onPress: () => console.log("Cencelled"+nextdatemapidpk),style:'cancel'},
            {text: 'Confirm',onPress: () => deleteConfirm(nextdatemapidpk),style:'default'},
        ])
    }
    return (
        <View style={styles.screen}>
            <ScrollView >
                <View  >

                    {loading == 0 ? (
                        <Text>view case details loading</Text>
                    ) : loading == 1 ? (
                        <View style={[styles.container, styles.boxcontainer, styles.innerbox]}>



                            <Text style={styles.innertext}>Case No: {caselist.casedtls[0].law_case_no}</Text>
                            <Text style={styles.innertext}>Party Name: {caselist.casedtls[0].law_case_party_name}</Text>

                            <Text style={styles.innertext}>Opposition Party Name: {caselist.casedtls[0].law_case_opposition_party}</Text>

                            <Text style={styles.innertext}>Case File Date: {format(caselist.casedtls[0].law_case_file_date, 'yyyy-MM-dd')}</Text>


                        </View>



                    ) : ''}
                    <View style={[styles.heading]}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#6F956F', textDecorationLine: 'underline' }}>
                            NEXT DATES
                        </Text>
                        {loading == 1 ? (
                            caselist.casenextdatedtls.map((item, index) => (
                                <View style={[styles.boxcontainer]}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>

                                        <TouchableOpacity>
                                            <Text style={[styles.submitbtn]} >
                                                <Icon name="pencil" size={14} color="white" /> Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={[styles.submitbtn, { backgroundColor: 'tomato' }]} onPress={() => deleteModal(item.case_map_next_date_map_id_pk)}><Icon name="trash" size={14} color="white"  /> Delete</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <Text style={styles.innertext}>Case No: {item.case_status}</Text>
                                    <Text style={styles.innertext}>Next Date: {item.next_date}</Text>
                                </View>

                            ))
                        ) : ''}
                    </View>


                </View>
            </ScrollView>
            {/* Modal Part */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure to delete ?</Text>
                        <Pressable    
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)} >
                            <Text style={styles.textStyle}>Delete</Text> 
                        </Pressable>
                        <Pressable  
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)} >
                            <Text style={styles.textStyle}>Delete</Text> 
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )

    // {casedtls.casedtls[0].law_case_no}
}
