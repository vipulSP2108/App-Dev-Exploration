import React from "react";
import {Text, View, Image } from "react-native";
import Styles from "../Data/Styles";
// import Images from "../Data/Images";

{/* ******* Not able to take data from file ******* */}

const Images = [
    {
        id: "apple",
        image_address: require("../assets/apple.png")
    },
    {
        id: "banana",
        image_address: require("../assets/banana.png")
    },
    {
        id: "orange",
        image_address: require("../assets/orange.png")
    }
];

const image_shower = (item) => {
    let image_add = null;
    Images.forEach((image_data) => {
        if (image_data.id === item.title.toLowerCase()) {
            image_add = image_data.image_address;
        }
    });
    return image_add;
};

const Individual = ({ route }) => {
    const { found } = route.params;
    const imageSource = image_shower(found);
    return (
        <View style={Styles.screen_center}>

{/* ******* Not able to combine style of text ******* */}

            <Text style={{ marginTop: 30, fontSize: 35, fontWeight: 500, color: "red" }}>{found.title}</Text>
            {imageSource && <Image source={imageSource} style={Styles.image} />}
        </View>
    );
};

export default Individual;