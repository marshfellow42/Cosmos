import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import { SafeAreaView } from   'react-native-safe-area-context';
export function Home(){
    return(
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={styles.header}>
                    <Text style={styles.title}>Cosmos</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.default}>Nothing here. To add some task press the button below.</Text>
                </View>
                <TouchableOpacity style={styles.button}> <Text style={styles.buttonText}>+</Text> </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "purple",
        flex:1
    },

    header:{
        height: 80,
        backgroundColor: "purple",
        justifyContent: "center",
        paddingLeft: "3%"
    },
    
    title:{
        fontSize: 23,
        fontWeight: "bold",
        color: "#FFF"
    },

    content:{
        height:"100%",
        alignItems: "center",
        padding: "2%",
        backgroundColor:"#FFF"
    },

    default:{
        color:"gray"
    },

    button:{
        height:50,
        width:50,
        backgroundColor: "rgba(131, 52, 235, 0.6)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        position:"absolute",
        right:20,
        bottom: 20,
    },

    buttonText:{
        color:"#FFF",
        fontSize: 20,
        elevation: 10,
        shadowColor: "#000",
    }
})