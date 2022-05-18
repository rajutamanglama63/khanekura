import { View, Text, StyleSheet, StatusBar } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff"  />
      <View style={styles.container}>
        <Home />
     </View>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#eee'
  }
})
