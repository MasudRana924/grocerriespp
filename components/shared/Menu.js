import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Menu() {
    const navigation = useNavigation();
    return (
        <View  style={styles.menuContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Home");
                  }}
            >
                <Icon name="home" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Login");
                  }}
            >
                <Icon name="login" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Contact");
                  }}
            >
               <Icon name="login" style={styles.icon} />
            </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
menuContainer:{
flexDirection:"row",
justifyContent:"space-evenly"
},
icon:{
    color:"white",
    fontSize:28,
    marginTop:5
}
})