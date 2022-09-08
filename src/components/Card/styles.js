import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container:{
        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
        backgroundColor: "white",
        borderRadius:8,
        padding:12,
        justifyContent: "space-between",
        flexDirection:"row",
    },
    containerText: {
        justifyContent: "space-between"
    },
    title: {
        fontSize:18,
        fontWeight:"bold",
    },
    subtitle: {
        fontSize:13,
        fontWeight:"300",
    },
    textDelete: {
        color:"#5BD987",
        fontWeight:"500"
    }
})

export default styles