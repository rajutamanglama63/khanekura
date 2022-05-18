import React from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function SearchBar() {
    return (
        <View style={styles.search}>
            <GooglePlacesAutocomplete 
             placeholder="search"
             styles={{
                 textInput : {
                     backgroundColor : '#eee',
                    //  borderWidth : 1,
                    //  borderColor : 'pink',
                     borderRadius : 20,
                     fontWeight : '700',
                     marginTop : 7
                 },
                 textInputContainer : {
                    //  borderWidth : 1,
                     backgroundColor : '#eee',
                     borderRadius : 50,
                     flexDirection : 'row',
                     alignItems : 'center',
                     marginRight : 10
                 }
             }}
             renderLeftButton={() => (
                <View style={{marginLeft : 10}}>
                    <Ionicons name="location-sharp" size={24} />
                </View> 
             )}
             renderRightButton={() => (
                <View style={{
                    flexDirection : 'row',
                    backgroundColor : '#fff',
                    borderRadius : 20,
                    alignItems : 'center',
                    padding : 9,
                    marginRight : 10
                }}>
                    <AntDesign name="clockcircle" size={11} style={{marginRight : 6}} />
                    <Text>search</Text>
                </View>
             )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search : {
        marginTop : 15,
        flexDirection : "row"

    }
})
