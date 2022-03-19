import { StyleSheet, View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image, Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Services from './Services';
import Footer from './Footer';
import colors from './data/Colors';
import categoriesData from './data/Products';
import popularData from './data/Propular';
import dailyData from './data/Daily';
import offerData from './data/Offer';
import summerData from './data/Summer';
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

export default function Home() {
  const navigation = useNavigation();
  const renderCategoryItem = ({ item }) => {
    return (

      <TouchableOpacity onPress={() => {
        navigation.navigate("Vegitables");
      }} >
        <View
          style={[
            styles.categoryItemWrapper,
            {
              backgroundColor: item.selected ? colors.primary : colors.white,
              marginLeft: item.id == 0 ? 20 : 0,
            },
          ]}>
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <View
            style={[
              styles.categorySelectWrapper,
              {
                backgroundColor: item.selected ? colors.white : colors.secondary,
              },
            ]}>
            <Feather
              name="chevron-right"
              size={8}
              style={styles.categorySelectIcon}
              color={item.selected ? colors.black : colors.white}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderPopularItem = ({ item }) => {
    return (
      <View
        style={[
          styles.popularItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 0 ? 20 : 0,
          },
        ]}>
        <View>
          <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 15 }}>
            <Icon name="crown" style={{ fontSize: 25, color: 'orangered' }} />
            <Text style={styles.categoryItemTop}>Top of the week</Text>
          </View>
          <Text style={styles.categoryPopulrItemTitle}>{item.title}</Text>
        </View>
        <Image source={item.image} style={styles.categoryPopularItemImage} />


      </View>
    );
  };

  const renderDailyItem = ({ item }) => {
    return (

      <TouchableOpacity onPress={() => {
        navigation.navigate("Vegitables");
      }} >
        <View
          style={[
            styles.dailyItemWrapper,
            {
              backgroundColor: item.selected ? colors.primary : colors.white,
              marginLeft: item.id == 0 ? 20 : 0,
              borderColor: item.selected ? 'palegreen' : 'gainsboro'
            },
          ]}>
          <Image source={item.image} style={styles.categoryItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
          <Text style={styles.categoryItemTitle}>{item.subtitle}</Text>
          <View
            style={[
              styles.categorySelectWrapper,
              {
                backgroundColor: item.selected ? colors.white : colors.secondary,
              },
            ]}>
            <Feather
              name="chevron-right"
              size={8}
              style={styles.categorySelectIcon}
              color={item.selected ? colors.black : colors.white}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderOfferItem = ({ item }) => {
    return (

      <TouchableOpacity onPress={() => {
        navigation.navigate("Vegitables");
      }} >
        <View
          style={[
            styles.offerItemWrapper
          ]}>
          <Image source={item.image} style={styles.offerItemImage} />


        </View>
      </TouchableOpacity>
    );
  };

  const renderSummerItem = ({ item }) => {
    return (

      <TouchableOpacity onPress={() => {
        navigation.navigate("Vegitables");
      }} >
        <View
          style={[
            styles.summerItemWrapper,
           
          ]}>
          <Image source={item.image} style={styles.summerItemImage} />
          <Text style={styles.categoryItemTitle}>{item.title}</Text>
        
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView >
          <View style={styles.header}>
            <View>
              <Text style={styles.headerText}>
                DailyNeeDs
              </Text>
            </View>
            <Icon name="cart" style={styles.iconCart} />
          </View>
          <View style={{ marginTop: 30, flexDirection: 'row' }}>
            <View style={styles.searchContainer}>
              {/* <Icon name="search" size={25} style={styles.icon} /> */}
              <TextInput placeholder="Search" style={styles.input} />
            </View>
            <View style={styles.sortBtn}>
              <Icon name="sort-descending" size={30} />
            </View>
          </View>
        </SafeAreaView >

        {/* for categories*/}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={popularData}
              renderItem={renderPopularItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* offer */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Offers</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={offerData}
              renderItem={renderOfferItem}
              keyExtractor={(item) => item.id}
              // horizontal
              showsHorizontalScrollIndicator={false}
              numColumns={2}
            />
          </View>

        </View>

        {/* dily */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Daily Mockup</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={dailyData}
              renderItem={renderDailyItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            
            />
          </View>
        </View>

        {/* summer */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Summer Fruits</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={summerData}
              renderItem={renderSummerItem}
              keyExtractor={(item) => item.id}
              // horizontal
              showsHorizontalScrollIndicator={false}
              numColumns={2}
            />
          </View>
        </View>


        <Footer></Footer>

      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, paddingHorizontal: 20,
    backgroundColor: "white",

  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red"
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 38,
    color: "limegreen",
    fontWeight: "bold"
  },
  iconCart: {
    color: "black",
    fontSize: 28,
    marginTop: 15
  },
  searchContainer: {
    height: 30,
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: "black",
    borderWidth: 2,
    borderColor: "gainsboro",
    height: 35,
    paddingLeft: 20
  },
  sortBtn: {
    marginLeft: 10,
    height: 40,
    width: 50,
    borderRadius: 10,
    backgroundColor: "palegreen",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5
  },
  icon: {
    color: "black"
  },
  categoriesWrapper: {
    marginTop: 20,

  },
  categoriesTitle: {
    fontSize: 16,


  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 30,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,

  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularItemWrapper: {
    flexDirection: 'row',
    width: 280,
    justifyContent: 'space-between',
    height: 130,
    marginRight: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'palegreen'
  },
  categoryPopularItemImage: {
    width: 120,
    height: '100%',
    marginTop: 0,
    alignSelf: 'center',
    borderRadius: 20
  },
  categoryPopulrItemTitle: {
    fontSize: 40,
    marginLeft: 40
  },
  categoryItemTop: {
    fontSize: 15,

  },
  imgStyle: {
    height: 150,
    width: 155,
    borderRadius: 10
  },
  imgStyleTwo: {
    height: 150,
    width: 155,
    marginLeft: 10,
    borderRadius: 10
  },
  dailyItemWrapper: {
    backgroundColor: '#F5CA48',
    width: 150,
    borderRadius: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 1

  },
  offerItemWrapper:{
    marginRight: 10,
    marginTop:10
    
  },
  offerItemImage:{
    width:155,
    height:150,
    borderRadius:5
  },
   summerItemWrapper:{
    marginRight: 5,
    marginTop:10,
    borderWidth:1,
    borderColor:'gainsboro',
    borderRadius:5
    
  },

  summerItemImage:{
    width:155,
    height:150,
    borderRadius:5
  }



});