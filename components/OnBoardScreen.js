import React from 'react';
import { Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from './data/Colors';
import { useNavigation } from '@react-navigation/native';

const OnBoardScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: 400 }}>

        <Image
          style={styles.img}
          source={{
            uri: 'https://img.freepik.com/free-vector/natural-organic-food-background_1284-9919.jpg?t=st=1647536935~exp=1647537535~hmac=e0bb3a8c83ebaf1097ac33aa2d8f4a776cba02eea4376b44f99f7236817df244&w=740',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
          Groceries Product
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 12,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            We help you to find best and fresh product
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
          <TouchableOpacity  onPress={() => {
              navigation.navigate("Login");
            }} style={styles.getButton}>
            <Text style={styles.getText}>Get Started</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    marginHorizontal: 5,
    color:'limegreen',
    backgroundColor:'limegreen'
  },
  indicator: {
    height: 12,
    width: 30,
    borderRadius: 6,
    borderRadius: 10,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
    backgroundColor:'limegreen'
  },
  img:{
    height:350,
    marginTop:50
  },
  getButton:{
    
    height:40
  },
  getText:{
    color:'limegreen',
    textAlign:'center',
    fontSize:28
  }

});

export default OnBoardScreen;