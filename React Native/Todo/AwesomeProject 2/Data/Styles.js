import { Dimensions, StyleSheet} from "react-native";

const { width: screenWidth } = Dimensions.get('window');

export default Styles = StyleSheet.create({
    Buttons: {
        marginTop: 12,
        backgroundColor: "gray",
        borderColor: "green",
        borderWidth: 3,
        borderRadius: 6,
        height: 60,
        width: 120,
        alignItems: "center",
        justifyContent: "center",
    },
    h1_fond_size: {
      fontSize:35,
      margin: 5,
      
    },
    screen_center: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    red_text: { 
        marginTop: 20, 
        fontSize: 35, 
        // fontWeight: 500, 
        color: "red" 
    },
    Buttons_text: { 
        color: "white", 
        fontSize: 20, 
        fontWeight: "bold"
    },
    image: {
        marginTop: 7,
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    textbox_text:{
        color: "black", fontSize: 21
    },
    InputBox: {
        paddingHorizontal: 12,
        width: 290,
        // marginTop: 12,
        marginBottom: 7,
    },
    textbox: {
        flexDirection: "row",
        justifyContent: 'center',
        borderColor: "green",
        borderWidth: 3,
        borderRadius: 6,
        color: "white",
        height: 60,
        marginTop: 12,
        marginLeft: 6,
        fontSize: 20,
        paddingHorizontal: 16,
        alignItems: "center",
        backgroundColor: "black",
        opacity: 0.8,
    },
    bottom_inputs: {
        padding:5, width: screenWidth, bottom: 0.1, position: 'absolute', justifyContent: "center", backgroundColor: "black", opacity: 0.8 
    }
})