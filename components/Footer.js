import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Contact Us</Text>
                <Text style={styles.text}> dhanmondhi 32,Dhaka,Bangladesh</Text>
                <Text style={styles.text}> Shop no 12, floor 2nd ,Basundhara Shopping ComplexDhaka,Bangladesh</Text>
                <Text style={styles.text}>masudrana15924@gmail.com</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Join with Us</Text>
                <Text style={styles.text}> Get E-mail updates about our latest shop and special offers.</Text>
                <TextInput placeholder="Search" style={styles.input} />
            </View>
            <View style={styles.footerIcon}>
                <Icon name="facebook" style={styles.fbIcon} />
                <Icon name="google" style={styles.googleIcon} />
                <Icon name="instagram" style={styles.instaIcon} />

            </View>
            <Text style={styles.copyWrightText}>copyright © design in 2021 by Masud Rana</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        height: 390,
        backgroundColor: 'white',
        marginTop: 20,
        flex: 1,
        borderWidth:1,
        borderColor:'gainsboro',
        borderRadius:5
       
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    textHeader: {
        color: 'black',
        fontSize: 30,
    },
    text: {
        color: 'black',
        fontSize: 12,
        paddingTop: 10
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "black",
        borderWidth: 2,
        borderColor: "black",
        height: 35,
        paddingLeft: 20,
        marginTop: 10
    },
    footerIcon: {
        flexDirection: 'row',
        marginLeft: 18,
        marginTop: 10

    },
    fbIcon: {
        fontSize: 28,
        color: "dodgerblue",
    },
    googleIcon: {
        fontSize: 28,
        color: "green",
        marginLeft: 10
    },
    instaIcon: {
        fontSize: 28,
        color: "#FF5733",
        marginLeft: 10
    },
    copyWrightText: {
        fontSize: 12,
        color: 'black',
        marginLeft:20,
        marginTop:20
    }
})