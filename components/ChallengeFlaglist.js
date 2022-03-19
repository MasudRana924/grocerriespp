import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'


export default function ChallengeFlaglist() {
    const user = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",

        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",

        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "phone": "1-463-123-4447",
            "website": "ramiro.info",

        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "phone": "493-170-9623 x156",
            "website": "kale.biz",

        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "phone": "(254)954-1289",
            "website": "demarco.info",

        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",

        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "phone": "210.067.6132",
            "website": "elvis.io",

        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "phone": "024-648-3804",
            "website": "ambrose.net",

        }
    ]
    return (
        <FlatList style={styles.listStyle}
            horizontal data={user} renderItem={({ item }) => {
                return (
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}> Name : {item.name}</Text>
                        <Text style={styles.textStyle}> Username : {item.username}</Text>
                        <Text style={styles.textStyle}> Email : {item.email}</Text>
                        <Text style={styles.textStyle}> Phone : {item.phone}</Text>
                        <Text style={styles.textStyle}> Website : {item.website}</Text>

                    </View>
                )
            }}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}


        />
    )
}
const styles = StyleSheet.create({
    listStyle: {
        margin: 20,
        padding: 5,
        textAlign: "center",

    },
    textStyle: {
        fontSize: 20,
        padding: 5,
        backgroundColor: "blue",
        color: "white",
        textAlign: "left"
    },
    viewStyle: {
        padding: 5,
        margin: 10,

    }
});