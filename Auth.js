// React dependencies
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';


// External Dependencies
import ModernHeader from "react-native-modern-header";

// Local Imports
import AppButton from './components/AppButton';
import colors from './config/colors';
import AppTextInput from './components/AppTextInput';



const LoginScreen = ({ navigation }) => {
    const backgroundImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rUv28GzY.png" };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <Text
                    style={styles.headerText}
                    onPress={() => { navigation.navigate() }}>Log in to your CSA account</Text>
                {() => {
                    if (errorMessage) {
                        return <Text style={styles.errorMessage}>{errorMessage}</Text>;
                    }
                }}
                {AppTextInput({
                    placeholder: "Email",
                    width: "70%",
                    iconType: "email",
                    iconColor: colors.lightBlue,

                    onChangeText: (text) => {
                        setEmail(text);
                    }
                })}
                {AppTextInput({
                    placeholder: "Password",
                    width: "70%",
                    iconType: "lock",
                    iconColor: colors.lightBlue,
                    onChangeText: (text) => {
                        setPassword(text);
                    }
                })}
                {AppButton({
                    title: "Log In",
                    color: colors.lightBlue,
                    onPress: () => { console.log("Pressed!") },
                })}
                <Text
                    style={styles.noAccountText}
                    onPress={() => { navigation.navigate("register") }}
                >
                    Don't have an account? Sign up!
                </Text>
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
};


const RegisterScreen = ({ navigation }) => {
    const backgroundImage = { uri: "https://yo-mr-white.wheres-my-ta.co/5rUv28GzY.png" };
    const [name, setName] = useState('');
    const [carid, setCarid] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <Text
                    style={styles.headerText}
                    onPress={() => { navigation.navigate() }}>Sign up for a CSA account</Text>
                {() => {
                    if (errorMessage) {
                        return <Text style={styles.errorMessage}>{errorMessage}</Text>;
                    }
                }}
                {AppTextInput({
                    placeholder: "Full Name",
                    width: "70%",
                    iconType: "account",
                    iconColor: colors.primary,
                    onChangeText: (text) => {
                        setName(text);
                    }
                })}
                {AppTextInput({
                    placeholder: "Email",
                    width: "70%",
                    iconType: "email",
                    iconColor: colors.primary,
                })}
                {AppTextInput({
                    placeholder: "Phone Number",
                    width: "70%",
                    iconType: "card-account-phone",
                    iconColor: colors.primary,
                })}
                {AppTextInput({
                    placeholder: "Password",
                    width: "70%",
                    iconType: "lock",
                    iconColor: colors.primary,
                })}
                {AppTextInput({
                    placeholder: "Car ID",
                    width: "70%",
                    iconType: "car",
                    iconColor: colors.primary,

                    onChangeText: (text) => {
                        setCarid(text);
                    }
                })}
                {AppButton({
                    title: "Register",
                    color: colors.primary,
                    onPress: () => { navigation.navigate("home", {name, carid}) },
                })}
                <Text
                    style={styles.yesAccountText}
                    onPress={() => { navigation.navigate("login") }}
                >
                    Already have an account? Log in!
                </Text>
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
    },
    errorMessage: {
        color: 'white',
        backgroundColor: 'red',
    },
    modernHeader: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
    },

    headerText: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        fontWeight: 'bold',
        fontSize: 23,
        color: 'rgba(255,255,255,1)',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    noAccountText: {
        padding: 10,
        fontSize: 15,
        color: colors.lightBlue,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    yesAccountText: {
        padding: 10,
        fontSize: 15,
        color: colors.primary,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});

export { LoginScreen, RegisterScreen };