import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function Images() {
  return (
    <View>
      <Text>Images</Text>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/react.webp')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
   
    tinyLogo: {
      width: 400,
      height: 100,
      borderRadius:20,
    },
    
  });