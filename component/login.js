import React, { useState } from 'react';
import { View, Text, StyleSheet,
     TouchableOpacity, TextInput, Alert } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const Login = ({navigation}) => {

   const [userInfo, setUserInfo] = useState({
        userEmail: null,
        userPassword: null,
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
   });

   const [isValidate, setValidate] = useState(false);

    const textInputEmail = (res) => {

        if( res.trim().length >= 4 ) {
            setUserInfo({
                ...userInfo,
                userEmail: res,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setUserInfo({
                ...userInfo,
                userEmail: res,
                check_textInputChange: false,
                isValidUser: false
            });
        }

    }

    const textInputPassword = (res) => {

        if( res.trim().length >= 8 ) {
            setUserInfo({
                ...userInfo,
                password: res,
                isValidPassword: true
            });
        } else {
            setUserInfo({
                ...userInfo,
                userPassword: res,
                isValidPassword: false
            });
        }

    }

    const loginHandle = () => {

        if (!userInfo.userEmail || !userInfo.userPassword) {
            setUserInfo({
                ...userInfo,
                isValidUser: userInfo.userEmail? true : false,
                isValidPassword: userInfo.userPassword? true : false
            })
        } else {
            console.log('Login Success');
        }

        
    }

    return (
        <View style={styles.login}>
            <View style={styles.loginTitle}>
                <Text style={styles.loginTitleText}>
                    Login
                </Text>
            </View>
            <View style={styles.loginField}>

                <View style={styles.loginFieldEmail}>
                    <Text style={styles.loginFieldText}>
                    <Icon
                    name="user-o"
                    size={17}
                    color="white"
                    style={styles.signInIcon}
                    />
                    Email </Text>
                    <TextInput  style={styles.loginInputField}
                        placeholder="Enter your email"
                        onChangeText={ (res) => textInputEmail(res) }
                    />

                    { userInfo.isValidUser? null: 
                    
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Please enter your email</Text>
                        </Animatable.View>
                    }

                  
                </View>

                <View style={styles.loginFieldPassword}>
                    <Text style={styles.loginFieldText}> 
                    <Icon
                    name="lock"
                    size={17}
                    color="white"
                    style={styles.signInIcon}
                    />
                        Password </Text>
                    <TextInput style={styles.loginInputField}
                        placeholder="Enter your password"
                        secureTextEntry={userInfo.secureTextEntry ? true : false}
                        onChangeText={ (res) => textInputPassword(res) }
                    />
                { userInfo.isValidPassword? null : 
                
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Please enter your password</Text>
                    </Animatable.View>
                }

                </View>

            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}> Forgot Password ? </Text>
            </TouchableOpacity>

            <View style={styles.loginButton}>
                <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {loginHandle()}}
                    >
                    <LinearGradient
                        colors={['rgba(0,0,0,0.8)', 'transparent']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('Registration')}
                >
                    <Text style={styles.registrationHere}>
                        New user ? Registration here.
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Login;


const styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: '#1b73a6'
    },
    loginTitle: {
        alignContent: 'center',
        marginTop: 130
    },
    loginTitleText: {
        textAlign: 'center',
        fontSize: 45,
        fontWeight: 'bold'
    },
    loginField: {
        marginTop: 20
    },
    loginFieldEmail: {
        marginTop: 10
    },
    loginFieldPassword: {
        marginTop: 20
    },
    loginFieldText: {
        fontSize: 17,
        marginLeft: 20,
    },
    loginInputField: {
        marginLeft: 25,
        marginTop: 10,
        fontSize: 15,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        marginRight: 20,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    loginButton: {
        marginTop: 30,
        marginRight: 20,
        marginLeft: 20
    },
    signIn: {
        paddingVertical: 15,
        borderRadius: 15
    },
    textSign: {
       textAlign: 'center',
       fontSize: 20 
    },
    signInIcon:{ 
        marginLeft: 5,
        marginRight: 5
    },
    forgotPassword: {
        marginTop: 15,
        marginLeft: 180
        
    },
    registrationHere: {
        marginLeft: 30,
        color: '#ffffff'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        paddingLeft: 25,
        paddingTop: 5,
    },
})