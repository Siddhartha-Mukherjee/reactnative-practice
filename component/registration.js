import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';


import { LinearGradient } from 'expo-linear-gradient';


const Registration = ({navigation}) => {
    const [checked, setChecked] = React.useState('first');

    return(
        <View style={styles.reg}>
            <View style={styles.resTitle}>
                <Text style={styles.regTitle}> Registration  </Text>
            </View>
            <View style={styles.field} >
                <Text style={styles.regFieldName}> First Name </Text>
                <TextInput 
                    placeholder="Enter your First name"
                    style={styles.regField}
                />
            </View>
            <View style={styles.field} >
                <Text style={styles.regFieldName}> Last Name </Text>
                <TextInput 
                    placeholder="Enter your last name"
                    style={styles.regField}
                />
            </View>
            <View style={styles.field} >
                <Text style={styles.regFieldName}> Email </Text>
                <TextInput 
                    placeholder="Enter your Email"
                    style={styles.regField}
                />
            </View>
           
            <View style={styles.fieldRadio}>
                <Text style={styles.regFieldName}> Gender </Text>
                <View style={styles.genderRadio}>
                   <View style={styles.radioGender} >
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                            style={styles.resRadio}
                        />
                        <Text style={styles.genderText}> Mail </Text>
                   </View>

                    <View style={styles.radioGender} > 
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                            style={styles.resRadio}
                        />
                        <Text style={styles.genderText}> Female </Text>
                    </View>
                </View>

            </View>
           
            <View style={styles.field} >
                <Text style={styles.regFieldName}> Address </Text>
                <TextInput 
                    placeholder="Enter your Email"
                    style={styles.regField}
                    multiline={true}
                    numberOfLines={3}
                />
            </View>

            <View style={styles.regButton}>
                <TouchableOpacity
                        style={styles.signUp}
                        onPress={() => {}}
                    >
                    <LinearGradient
                        colors={['rgba(0,0,0,0.8)', 'transparent']}
                        style={styles.signUp}
                    >
                        <Text style={[styles.textSignUP, {
                            color:'#fff'
                        }]}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.loginHere}>
                        Have a account ? Login here.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Registration;

const styles = StyleSheet.create({
    resTitle: {
        paddingTop: 30,
        paddingLeft: 20
    },
    regTitle: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    reg: {
        flex: 1,
        backgroundColor: '#1b73a6',
    },
    field: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        // paddingBottom: 10
    },
    regFieldName: {
        fontSize: 15,
        paddingBottom: 10
    },
    regField: {
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
    },
    fieldRadio: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    resRadio: {
        backgroundColor: '#ffffff',
    },
    radioGender: {
        // flex: 1,
        flexDirection: "row"
    },
    genderRadio: {
        flex: 1,
        flexDirection: "row"
    },
    genderText: {
        paddingTop: 10
    },
    regButton: {
        marginTop: 30,
        marginRight: 20,
        marginLeft: 20,
        // marginVertical: 20
    },
    signUp: {
        paddingVertical: 15,
        borderRadius: 15
    },
    textSignUP: {
        textAlign: 'center',
        fontSize: 20 
    },
    loginHere: {
        marginLeft: 30,
        color: '#ffffff'
    }
})