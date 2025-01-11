import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Managecasestyles } from '../styles/Managecasestyles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Caseapis } from '../apis/Caseapis';

export const Managecase = ({ navigation }) => {
   const intialValue: any[] = [];
   const initialloadingval:number = 0;
   const [caselist, setCaseList] = useState(intialValue);
   const [datalimit,setdatalimit] = useState(10);
   const [loading,setLoading123] = useState(initialloadingval);
   const stylesobj = new Managecasestyles();
   const styles = stylesobj.Managecasestylesfunc();
   const caseapiobj = new Caseapis();
   // const cases = await axios.get('http://localhost:3000/cases/caselist/');
   // console.log(cases.data);
   useEffect(() => {
      loaddata();
   }, []);
   const loaddata =  () => {
       
      const cases = caseapiobj.getAllCases(datalimit);
      cases.then((resp) => {
         setCaseList(resp.data);
         setLoading123(0);
         
         // console.log(caselist);
      }).catch((e) => {
         console.log(e);
      });
   }
   const showMoreData = () => {
      ToastAndroid.showWithGravity("Loading...", ToastAndroid.SHORT,ToastAndroid.CENTER);
      setdatalimit(datalimit + 10); 
      loaddata();
      
   }

   return (
     
      <View style={styles.container}>

         <FlatList data={caselist}
            keyExtractor={(item) => item.id}
           onEndReached={showMoreData}
            renderItem={({ item }) => (
               <View style={styles.boxcontainer} >
                  <View style={styles.innerbox}>

                     <Text style={styles.innertext}>Case No: {item.law_case_no}</Text>
                     <Text style={styles.innertext}  >Party Name: {item.law_case_party_name}</Text>
                     <Text style={styles.innertext}  >Opposition Party Name: {item.law_case_opposition_party}</Text>
                     <Text style={styles.innertext}  >Case File Date: {format(item.law_case_file_date, 'yyyy-MM-dd')}    </Text>

                     <TouchableOpacity>
                        <Text style={styles.submitbtn} onPress={() => navigation.navigate('Viewcasedtls', { case_id_pk: item.law_case_id_pk })}>View Details</Text>
                     </TouchableOpacity>
                  </View>
               </View>
            )}
         /> 
          {/* <Text style={onendeeachedflag==1?styles.loadmorebtn:{display:'none'}} >Load More</Text> */}
         


      </View>
      
   )
}

