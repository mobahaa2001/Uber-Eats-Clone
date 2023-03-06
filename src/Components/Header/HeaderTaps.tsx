import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTaps() {
    const [btnTap,setBtnTap] = useState("Delivery")
    return (
      <View style={{flexDirection: "row", alignSelf:"center"}}>
        <HeaderButton 
            text="Delivery"
            btnColor="black"
            textColor = "white"
            btnTap={btnTap}
            setBtnTap={setBtnTap}
        />
        <HeaderButton 
            text="Pickup" 
            btnColor="white" 
            textColor = "black"
            btnTap={btnTap}
            setBtnTap={setBtnTap}
        />
      </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity 
        style={{
            backgroundColor: props.btnTap == props.text?"black": "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
        onPress={() => props.setBtnTap(props.text)}
    >
        <Text style={{
            color:props.btnTap == props.text? "white" : "black",
            fontSize:15,
            fontWeight: "900"   
        }}>{props.text}</Text>
    </TouchableOpacity>
    
)
