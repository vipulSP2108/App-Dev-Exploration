import React from "react";
import {Text, TouchableOpacity, View } from "react-native";
import Data_fuctions from "../Components/Data_fuctions";
import Styles from "../Data/Styles";
import { useNavigation } from "@react-navigation/native";

export default Home = () => {
    const { GetData, SetData, DeleteData } = Data_fuctions();

    const navigation = useNavigation();

    return (
        <View style={Styles.screen_center}>

{/* ******* Not able to combine style of text ******* */}

            <Text style={{ marginTop: 30, fontSize: 35, fontWeight: 500, color: "green" }}>Home</Text>
            <TouchableOpacity style={[Styles.Buttons, {borderColor:"red"}]}
                onPress={() => {
                    DeleteData();
                    GetData();
                    navigation.navigate("Login");
                }
                }
            >
                <Text style={Styles.Buttons_text}>Log Out</Text>
            </TouchableOpacity>
        </View>

    )
}