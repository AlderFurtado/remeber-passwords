import { StyleSheet, Dimensions } from "react-native";
const {height} = Dimensions.get("screen")

const MARGIN_BOTTOM = height*.03
const MARGIN_RIGHT = 10

const styles = StyleSheet.create({
    
    container:{
        position:"absolute",
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor: "#2C6CBF",
        alignItems: "center",
        justifyContent: "center",
        bottom:MARGIN_BOTTOM,
        right:MARGIN_RIGHT,
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    }
})

export default styles