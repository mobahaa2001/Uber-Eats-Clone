import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTaps from '../../Components/Header/HeaderTaps'
import styles from './style'

export default function Home() {
  return (
    <View style={{flex: 1,
        marginTop:20}}>
      <HeaderTaps />
    </View>
  )
}
