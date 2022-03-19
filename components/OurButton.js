import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


export default function OurButton() {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <TouchableOpacity
        onPress={()=>{
          Alert.alert('Simple Button pressed')
          console.log("clicked")
        }}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
});