import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

export default function Catagories() {
    const items = [
        {
            image : require("../assets/images/shopBag.png"),
            name : 'Pick-up'
        },
        {
            image : require("../assets/images/drinks.png"),
            name : 'Coffee'
        },
        {
            image : require("../assets/images/donut.png"),
            name : 'Bakery Items'
        },
        {
            image : require("../assets/images/fastFood.png"),
            name : 'Fast Food'
        },
        {
            image : require("../assets/images/redDrinks.png"),
            name : 'Cold Drinks'
        },
        {
            image : require("../assets/images/desest.png"),
            name : 'Deserts'
        },
        {
            image : require("../assets/images/deals.png"),
            name : 'Deals'
        },

    ]
    return (
        <View style={{backgroundColor : '#fff', marginTop : 5, paddingVertical : 10, paddingHorizontal : 15}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection : 'row'}}>
                {items.map((item, index) => (
                    <View key={index} style={{marginRight : 13, alignItems : 'center'}}>
                        <Image source={item.image} style={{
                            height : 50,
                            width : 50,
                            resizeMode : 'contain'
                        }} />
                        <Text style={{fontSize : 13, fontWeight : '700'}}>{item.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
