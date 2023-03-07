import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTaps from '../../Components/Header/HeaderTaps'
import SearchBar from '../../Components/Search/SearchBar'
import Categories from '../../Components/Categories/Categories'

export default function Home() {
  return (
    <SafeAreaView 
      style={{
        borderColor:"#eee", 
        flex: 1, 
        marginTop:20
      }}>
      <View 
        style={{
          borderColor:"#fff",
          padding: 15
        }}>
        <HeaderTaps />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  )
}
