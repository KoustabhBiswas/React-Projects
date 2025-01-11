import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react';

export const Addcases = () => {
    const { width, height } = useWindowDimensions();
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const text = "TEST";
    console.log(DatePicker);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'offwhite'
        },
        inputcontainer: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            width: width,
            height: height,
            backgroundColor: 'white',
            paddingTop: 10
        },
        input: {
            marginTop: 30,
            padding: 10,
            width: width * 0.9,
            borderColor: '#C6D9A0',
            borderWidth: 1,
            borderRadius: 10


        },
        inputarea: {
            marginTop: 30,
            padding: 10,
            width: width * 0.9,
            // height: width * 0.5,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10
        },
        submitbtn: {
            marginTop: 30,
            marginBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#9BBC57',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 5,
            letterSpacing: 5
        }
    });
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.inputcontainer}>

                            <TextInput style={styles.input}
                                placeholder="COURT NAME"
                            />


                            <TextInput style={styles.input}
                                placeholder="CASE NO"
                            />


                            <TextInput style={styles.input}
                                placeholder="PARTY NAME"
                            />
                            <TextInput style={styles.input}
                                placeholder="OPPOSITION PARTY NAME"
                            />

                            <TextInput style={styles.input}
                                placeholder="CASE FILE DATE"
                            />
                            <TextInput style={styles.input}
                                placeholder="CASE DATE"
                                onPress={() => setOpen(true)}
                            />
                            <View>
                                <DatePicker
                                    modal
                                    open={true}
                                    date={date}
                                    onConfirm={(selectedDate) => {
                                        setOpen(false);
                                        setDate(selectedDate);
                                    }}
                                    onCancel={() => setOpen(false)}
                                />
                            </View>
                            <TextInput style={styles.input}
                                placeholder="CASE STATUS"
                                multiline={true}
                                numberOfLines={4}
                            />
                            <TouchableOpacity>
                                <Text style={styles.submitbtn}>SUBMIT</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
