import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://obscure-badlands-58635.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log(data)
            })
    }, [])
    const navigation = useNavigation();

    const Card = ({ item }) => {

        return <TouchableOpacity>
            <View style={styles.productCard}>
                <Image
                    source={{uri: item.img}}
                    style={styles.imgCard}
                   
                />
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textPrice}>{item.price}/kg</Text>
            </View>
        </TouchableOpacity>

    }
    return (
        <View>

            <View style={styles.header}>
                <Icon name="arrow-back" size={28} onPress={() => {
                    navigation.navigate("Home");
                }} />
                <Icon name="shopping-cart" size={28} />
            </View>
            <FlatList style={styles.listStyle}
                data={products}
                renderItem={Card}
                keyExtractor={item => item._id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}


            />

        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    listStyle: {
        margin: 20,
        padding: 10,
        textAlign: "center",
        height: "100%",

    },

    productCard: {
        height: 160,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'limegreen',
        width: 140,
        marginTop: 10
    },
    imgCard: {
        height: 100,
        width: 138,
        borderRadius: 10,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5

    },
    textPrice: {
        fontSize: 12,
        textAlign: 'center'
    }
});