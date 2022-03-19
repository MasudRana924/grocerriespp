import { StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'

export default function Flatlist() {
  const names = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: "First Name",
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
      name: "Second Name",
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
      name: "Third Name",
    }
  ];
  return (
    <FlatList style={styles.listStyle}
      data={names}
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name}</Text>
      }}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      // numColumns={2}
      // inverted

    />
  )
}
const styles = StyleSheet.create({
  listStyle: {
    margin:20,
    padding:10,
    textAlign:"center",
    height:50,

  },
  textStyle:{
    fontSize:40,
    padding:30,
    backgroundColor:"blue",
    margin:20,
    color:"white"
  }
});