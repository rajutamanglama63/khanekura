import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export const localRestaurants = [
    {
      name: "Riverside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Bajeko Chekuwa",
      image_url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.f_vz7hpNCB4b-LHeCFjXDQHaDh%26pid%3DApi&f=1",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "Road House",
      image_url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IJ6rfU8yqLniU-G409j7SQHaE8%26pid%3DApi&f=1",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

export default function ResturantItems(props) {
    return (
        <>
            {props.resturantsData.map((resturant, index) => (
                <TouchableOpacity key={index} activeOpacity={1} style={{marginBottom : 10}}>
                    <View style={{marginTop : 10, padding : 15, backgroundColor : "#fff"}}>
                        <ResturantImage img={resturant.image_url} />
                        <ResturantInfo name={resturant.name} rating={resturant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}


const ResturantImage = (props) => (
    <>
        <Image source={{uri : props.img}} style={{width : "100%", height : 180}} />
        <TouchableOpacity  style={{position : "absolute", top : 20, right : 20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
)

const ResturantInfo = (props) => (
        <View style={{marginTop : 10, flexDirection : "row", alignItems : "center", justifyContent : 'space-between'}}>
            <View>
                <Text style={{fontSize : 15, fontWeight : 'bold'}}>{props.name}</Text>
                <Text style={{fontSize : 13, color : 'grey'}}>25-30 . min</Text>
            </View>
            <View style={{backgroundColor : "#eee", alignItems : 'center', justifyContent : 'center', height : 30, width : 30, borderRadius : 15}}>
                <Text>{props.rating}</Text>
            </View>
        </View>
)