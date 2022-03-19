import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Contact() {
  return (
    <View >
      <Text style={styles.textStyle}>Contact</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    textStyle: {
     fontSize:40,
     fontWeight:"bold",
     color:"limegreen"
    },
  });