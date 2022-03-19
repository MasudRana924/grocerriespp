import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
export default function SIgnUp() {
    const [isSelected, setSelection] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const submit = () => {
        return navigationn.navigate("Home")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={require('./data/Images/signuplogo.webp')}
                    style={styles.imgLogo}

                />
            </View>

            <View style={styles.LoginForm}>
                <Text style={styles.textHeader} >Register </Text>
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=" enter your name"
                    value={username}
                    onChangeText={(data) => setUsername(data)}
                />
                  <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=" enter your email"
                    value={email}
                    onChangeText={(data) => setUsername(data)}
                />
                <TextInput
                    style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=" enter your password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(data) => setPassword(data)}
                />
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isSelected}
                        onValueChange={() => {
                            setSelection(!isSelected)

                        }}
                        color={isSelected ? "#4630EB" : undefined}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>Do you like React Native?</Text>
                </View>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: isSelected ? "limegreen" : "white" , borderWidth:1, borderColor: isSelected?"limegreen":'black'}]}
                    disabled={!isSelected}
                    onPress={() => submit()}
                >
                    <Text style={styles.buttonText}>Create a account</Text>
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity onPress={() => {
                navigation.navigate("Login");
            }} style={styles.signupButton}>

                <Text style={styles.signupText}>Already have an account ? Login</Text>
            </TouchableOpacity>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 370,
        height: "100%"
    },
    imgLogo:{
         height:150,
         width:200,
         
    },
    LoginForm: {
        paddingHorizontal: 20,
    },
    textHeader: {
        fontSize: 30,
        marginBottom: 30,
        color: 'black'

    },
    inputStyle: {
        borderWidth: 2,
        borderColor: "black",
        marginTop: 10,
        borderRadius: 5,
        width: 280,
        height: 40,
        paddingLeft: 10

    },
    checkboxContainer: {
        width: 280,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 20,

    },
    checkbox: {
        alignSelf: "center",

    },
    label: {
        marginLeft: 5
    },
    button: {
        width: 280,
        height: 40,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    buttonText: {
        textAlign: "center",
        paddingTop: 5,
        color: "black",
        fontSize: 20

    },
    menuContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "limegreen",
        height: 40,

    },
    getButton: {
        height: 40,
        borderWidth:1,
        borderColor:'limegreen',
        width:280,
        borderRadius:5,
        marginTop:20
    },
    getText: {
        color: 'limegreen',
        textAlign: 'center',
        fontSize: 28
    },
    signupButton: {
        height: 40,
        borderWidth:1,
        borderColor:'white',
        width:280,
        borderRadius:5,
       marginTop:70
    },
    signupText: {
        color: 'black',
        textAlign: 'left',
        fontSize: 12
    },


});