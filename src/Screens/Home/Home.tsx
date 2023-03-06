import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTaps from '../../Components/Header/HeaderTaps'
import styles from './style'

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
      </View>
    </SafeAreaView>
  )
}
