import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={styles.headerTabs}>
            <HeaderBtns text="Delivery" btnBgColor="black" btnTxtColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
            <HeaderBtns text="Pickup" btnBgColor="white" btnTxtColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
    )
}


const HeaderBtns = (props) => (
    <TouchableOpacity style={{
            backgroundColor : props.activeTab === props.text ? "black" : "white",
            paddingHorizontal : 16,
            paddingVertical : 6,
            borderRadius : 30
    }}
    onPress={() => props.setActiveTab(props.text)}
    >
        <Text style={{
            fontSize : 15,
            fontWeight : "700",
            color : props.activeTab === props.text ? "white" : "black"

        }}>{props.text}</Text>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    headerTabs : {
        flexDirection : 'row',
        alignSelf : 'center',
    }
})