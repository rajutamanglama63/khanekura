import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Catagories from '../components/Catagories'
import HeaderTabs from '../components/HeaderTabs'
import ResturantItems, { localRestaurants } from '../components/ResturantItems'
import SearchBar from '../components/SearchBar'

const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

export default function Home() {
    const [resturantData, setResturantData] = useState(localRestaurants)

    // const getResturantsFromYelpApi = () => {
    //     const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

    //     const apiOptions = {
    //         headers : {
    //             Authorization: `Bearer ${YELP_API_KEY}`,
    //         }
    //     }

    //     return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setResturantData(json.businesses))
    // }

    // useEffect(() => {
    //     getResturantsFromYelpApi();
    // }, [])
    return (
        <>
            <View style={styles.searchAndTabContainer}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Catagories />
                <ResturantItems resturantsData={resturantData} />
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    searchAndTabContainer : {
        padding : 15,
        backgroundColor : '#fff',
    }
})

