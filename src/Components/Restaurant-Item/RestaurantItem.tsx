import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const items =[
  {
    image : require("../../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image : require("../../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image : require("../../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image : require("../../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image : require("../../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image : require("../../../assets/images/desserts.png"),
    text: "Desserts",
  },
  
]

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30,}}>
      <View
        style= {{
          marginTop: 10,
          padding: 15,
          backgroundColor: "white",
        }}
      >
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  )
}

const RestaurantImage = () => (
  <>
    <Image 
        source={{ 
            uri:"https://www.qantas.com/content/dam/travelinsider/images/explore/australia/victoria/melbourne/the-best-restaurants-in-melbourne/6409ad30-102a-40a8-bf50-c89966204992.jpg"
        }}
        style={{
            width:"100%",
            height:180,
            borderTopRightRadius: 9,
            borderTopLeftRadius:9
        }}
    />
    <TouchableOpacity 
      style={{
        position: "absolute",
        right: 20,
        top: 20
      }}>
      <MaterialCommunityIcons name='heart-outline' size={28} color="#fff"/>
    </TouchableOpacity>
  </>
)

const RestaurantInfo = () => (
  <View 
    style ={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,

    }}
  >
    <View>
      <Text 
        style= {{
          fontSize: 15,
          fontWeight: 'bold',
        }}
      >Farmhouse kitchen thai cuisine</Text>
      <Text 
        style = {{
          fontSize: 13,
          color: "#555"
        }}
      >30-45 * min</Text>
    </View>
    <View 
      style = {{
        backgroundColor: "#eee",
        width:30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>4.5</Text>
    </View>
  </View>
)



{/*
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
*/}