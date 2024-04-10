import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";

import "react-native-gesture-handler";

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "./Pages/Home";
import Individual from "./Pages/Individual";
import Todo from "./Pages/Todo";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Login from "./Pages/Login";
// import eligibility from "./Components/eligibility";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
    // const { checkeligibility, eligible } = eligibility();

    return (

        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Main" component={BottomNav} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function BottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" size={30} color={color} />
                )
            }} />
            <Tab.Screen name="Checklist" component={StackNav} options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="add-to-list" size={30} color={color} />
                )
            }} />
            {/* <Tab.Screen name="Login" component={Login} /> */}
        </Tab.Navigator>
    )
}
function StackNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Todo" component={Todo} />
            <Stack.Screen name="Individual" component={Individual} />
        </Stack.Navigator>
    )
}

const Homees = () => {
    return (
        <View style={styles.homes}>
            <Text style={{ marginTop: 30, fontSize: 35, fontWeight: 500, color: "red" }}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    h1_fond_size: {
        fontSize: 35,
        margin: 5,

    },
    homes: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})


// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Touchable, TouchableOpacity } from 'react-native'
// import Styles from "./Data/Styles";

// const App = () => {
//     const GetData = async() => {
//         const status = await AsyncStorage.getItem("status");
//         console.log(status);
//     }
//     const SetData = async() => {
//         await AsyncStorage.setItem("status", "LoggedIN");
//     }
//     const DeleteData = async() => {
//         await AsyncStorage.setItem("status", "LoggedOFF");
//     }

//     return (
//         <View>
//             {console.log("HI")}
//             <TouchableOpacity style={Styles.Buttons} onPress={()=> GetData()}>
//                 <Text style={Styles.Buttons_text}> GetData </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={Styles.Buttons} onPress={()=> SetData()}>
//                 <Text style={Styles.Buttons_text}> SetData </Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={Styles.Buttons} onPress={()=> DeleteData()}>
//                 <Text style={Styles.Buttons_text}> DeleteData </Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default App