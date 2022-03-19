import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View >
      <Text style={styles.textStyle}>About</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    textStyle: {
     fontSize:40,
     fontWeight:"bold",
     color:"green"
    },
  });