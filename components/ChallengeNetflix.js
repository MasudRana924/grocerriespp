import { View, Text, Image, StyleSheet, Button,Linking } from 'react-native'
import React from 'react'

export default function ChallengeNetflix() {
    return (
        <View>
            <Text style={styles.headerStyle}>ChallengeNetflix</Text>
            <View style={styles.cardStyle}>

                <Image
                    style={styles.imgStyle}
                    source={{
                        uri: 'https://img.freepik.com/free-vector/online-movies-entertainment-banner_1419-2246.jpg?t=st=1647353306~exp=1647353906~hmac=a34012d840282f448a9d183b34ea3480cb4c14c6fabaf8555df39929be46040e&w=826',
                    }}
                />

                <Text style={styles.cardText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis atque, recusandae totam assumenda ullam provident exercitationem molestiae praesentium aspernatur quidem dolores ipsum cupiditate quisquam nulla quaerat possimus pariatur itaque excepturi!</Text>
                <Button
                    style={styles.buttonStyle}
                    title="Press me"
                    onPress={() => Linking.openURL("https://www.netflix.com/bd/")}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    headerStyle: {
        paddingBottom: 20,
        textAlign: "center",
        fontSize: 30,
    }
    ,
    cardStyle: {
        borderColor: "brown",
        borderWidth: 2,
        width: 350,
        height: 500,
        borderRadius: 10,
    },
    imgStyle: {
        width: "100",
        height: 300,
        borderRadius: 10,
    },
    cardText: {
        paddingHorizontal: 10
    },
    buttonStyle: {
        width: 50,
        marginTop: 20,
    }

});