import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

import * as Animatable from 'react-native-animatable';

import { LinearGradient } from 'expo-linear-gradient';


const Registration = ({navigation}) => {
    const [checked, setChecked] = React.useState('male');

    const [ userInfo, setUserInfo ] = useState({
        firstName: null,
        validFirstName: true,
        lastName: null,
        validLastName: true,
        email: null,
        validEmail: true,
        password: null,
        validPassword: true,
        gender: 'male',
        address: null,
        validAddress: true
    })

    const userRegistration = () => {

        if (!userInfo.firstName || !userInfo.lastName || !userInfo.email | !userInfo.password || !userInfo.address) {
            setUserInfo({
                ...userInfo,
                validFirstName: userInfo.firstName? true : false,
                validLastName: userInfo.lastName? true : false,
                validEmail: userInfo.email? true : false,
                validPassword: userInfo.password? true : false,
                validAddress: userInfo.address? true : false
            })
        } else {
            console.log(userInfo)
        }
    }

    const setText = (res, type) => {
        console.log(res, type)

        switch(type) {

            case 'firstName':
                setUserInfo({
                    ...userInfo,
                    firstName: res,
                    validFirstName: true
                })
                break;

            case 'lastName':
                setUserInfo({
                    ...userInfo,
                    lastName: res,
                    validLastName: true
                })
                break;

            case 'email':
                setUserInfo({
                    ...userInfo,
                    email: res,
                    validEmail: true
                })
                break;

            case 'password':
                setUserInfo({
                    ...userInfo,
                    password: res,
                    validPassword: true
                })
                break;

            case 'address':
                setUserInfo({
                    ...userInfo,
                    address: res,
                    validAddress: true
                })
                break;

        }
    }

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
                    onChangeText={ (res) => {setText(res, 'firstName')} }
                />
                { userInfo.validFirstName ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Please enter your first name</Text>
                    </Animatable.View>
                }
            </View>
            <View style={styles.field} >
                <Text style={styles.regFieldName}> Last Name </Text>
                <TextInput 
                    placeholder="Enter your last name"
                    style={styles.regField}
                    onChangeText = { (res) => setText(res, 'lastName') }
                />
                { userInfo.validLastName ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Please enter your last name</Text>
                    </Animatable.View>
                }
            </View>
            <View style={styles.field} >
                <Text style={styles.regFieldName}> Email </Text>
                <TextInput 
                    placeholder="Enter your Email"
                    style={styles.regField}
                    onChangeText = { (res) => setText(res, 'email') }
                />
                { userInfo.validEmail ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Please enter your email</Text>
                    </Animatable.View>
                }
            </View>

            <View style={styles.field} >
                <Text style={styles.regFieldName}> Password </Text>
                <TextInput 
                    placeholder="Enter your Password"
                    style={styles.regField}
                    onChangeText = { (res) => setText(res, 'password') }
                />
                { userInfo.validPassword ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Please enter your password</Text>
                    </Animatable.View>
                }
            </View>
           
            <View style={styles.fieldRadio}>
                <Text style={styles.regFieldName}> Gender </Text>
                <View style={styles.genderRadio}>
                   <View style={styles.radioGender} >
                        <RadioButton
                            value="male"
                            status={ checked === 'male' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('male')}
                            style={styles.resRadio}
                        />
                        <Text style={styles.genderText}> Male </Text>
                   </View>

                    <View style={styles.radioGender} > 
                        <RadioButton
                            value="female"
                            status={ checked === 'female' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('female')}
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
                    onChangeText = { (res) => setText(res, 'address') }
                />
                { userInfo.validAddress ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Please enter your address</Text>
                    </Animatable.View>
                }
            </View>

            <View style={styles.regButton}>
                <TouchableOpacity
                        style={styles.signUp}
                        onPress={() => {userRegistration()}}
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
            <View style={styles.loginPage}>
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
        borderRadius: 20
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
        marginTop: 10,
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
    },
    loginPage: {
        paddingBottom: 20
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        paddingLeft: 15,
        paddingTop: 5,
    },
})