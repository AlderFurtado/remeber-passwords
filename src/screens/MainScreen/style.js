import { StyleSheet,Dimensions } from "react-native";

const {height} = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        alignItems:"center",
        justifyContent: "space-between",
        paddingTop: height * 0.2,
        paddingBottom: height * 0.1
    },

    text: {
        marginTop:8,
        fontSize: 36,
        fontWeight:"200",
        color: "white"
    }
})

export default styles