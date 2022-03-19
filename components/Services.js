import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Services() {
    return (
        <View style={styles.serviceContainer}>
            <View style={styles.serviceCard}>
                <Icon name="delivery-dining" style={styles.icon} />
                <Text style={styles.textHeader}>Free Shipping</Text>
                <Text style={styles.textContainer}>Shipping on orders over 1000Tk</Text>
            </View>
            <View style={styles.serviceCard}>
                <Icon name="headset-mic" style={styles.icon} />
                <Text style={styles.textHeader}>Special Rate & Support</Text>
                <Text style={styles.textContainer}>get extra 5% every month</Text>
            </View>
            <View style={styles.serviceCard}>
                <Icon name="attach-money" style={styles.icon} />
                <Text style={styles.textHeader}>Money Back</Text>
                <Text style={styles.textContainer}>within 1 day if products are not fresh</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    serviceContainer: {
        marginTop: 70,
    },
    serviceCard: {
        height: 200,
        backgroundColor: "green",
        borderRadius: 10,
        marginTop:50
    },
    icon:{
        fontSize:60,
        position:'absolute',
        marginTop:-40,
        marginLeft:120,
        height:80,
        backgroundColor:'black',
        borderRadius:40,
        color:'white',
        width:80,
        paddingLeft:12,
        paddingTop:8
    },
    textHeader:{
        fontSize:30,
        color:'white',
        paddingTop:40,
        paddingHorizontal:25
    },
    textContainer:{
        fontSize:16,
        paddingTop:20,
        paddingHorizontal:20,
        color:'white',
    }
})