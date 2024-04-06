import React, { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Link, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { black, red100, white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import stacknav from "./app/stacknav";
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Images = [
    {
        id: "apple",
        image_address: "/Users/aai/Desktop/AwesomeProject/assets/apple.png"
    },
    {
        id: "banana",
        image_address: "/Users/aai/Desktop/AwesomeProject/assets/banana.png"
    },
    {
        id: "orange",
        image_address: "/Users/aai/Desktop/AwesomeProject/assets/orange.png"
    }
]

const App = () => {
    return (
        // <View style={{ flex: 1 }}>
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray"
            }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    )
                }}
                >



                </Tab.Screen>
                <Tab.Screen name="Todo" component={Todo} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="add-to-list" size={size} color={color} />
                    )
                }}
                >
                </Tab.Screen>


            </Tab.Navigator>
        {/* <NavigationContainer>
            <Stack.Navigator>
                <Tab.Screen name="Homeees" component={Homeees} />
                <Tab.Screen name="Apple" component={Apple} />
                <Tab.Screen name="Banana" component={Banana} />
                <Tab.Screen name="Orange" component={Orange} />
            </Stack.Navigator>

        </NavigationContainer> */}
        </NavigationContainer>

    );
};

function Nested() {
    return (
        <Stack.Navigator>
            <Tab.Screen name="Homeees" component={ToDo} />
            {/* <Tab.Screen name="Apple" component={Apple} />
            <Tab.Screen name="Banana" component={Banana} />
            <Tab.Screen name="Orange" component={Orange} /> */}
        </Stack.Navigator>
    )
}

const Homeees = (props) => {
    return (
        <View>
            <View style={{ justifyContent: "center", alignContent: "center" }}>
                {/* <Text style={styles.h1_fond_size}>Logs</Text> */}
                <TouchableOpacity style={styles.InputBox} title="Apple" onPress={() => props.navigation.navigate("Apple")}>
                    <Text>Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.InputBox} title="Banana" onPress={() => props.navigation.navigate("Banana")}>
                    <Text>Banana</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.InputBox} title="Orange" onPress={() => props.navigation.navigate("Orange")}>
                    <Text>Orange</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Apple = (props) => {
    return (
        <View>
            {/* <Text style={styles.h1_fond_size}>Logs</Text> */}
            <TouchableOpacity title="Back" onPress={() => props.navigation.navigate("Homeees")}>
                <Text>{props}</Text>
            </TouchableOpacity>
            <Image source={require("/Users/aai/Desktop/AwesomeProject/assets/apple.png")} />
        </View>
    );
};

const Banana = (props) => {
    return (
        <View>
            {/* <Text style={styles.h1_fond_size}>Homees2</Text> */}
            <TouchableOpacity title="Back" onPress={() => props.navigation.navigate("Homeees")}>
                <Text>Back</Text>
            </TouchableOpacity>
            <Image source={require("/Users/aai/Desktop/AwesomeProject/assets/banana.png")} />
        </View>
    );
};

const Orange = (props) => {
    return (
        <View>
            {/* <Text style={styles.h1_fond_size}>Homees2</Text> */}
            <TouchableOpacity title="Back" onPress={() => props.navigation.navigate("Homeees")}>
                <Text>Back</Text>
            </TouchableOpacity>
            <Image source={require("/Users/aai/Desktop/AwesomeProject/assets/orange.png")} />
        </View>
    );
};



const Home = () => {

    return (
        <View>
            {/* ........................Doubt............................ */}
            {/* 
        1. <Text style={styles.h1_fond_size , {color:"red"}}>Hello World</Text>
        2. How to add style to existing one
        3. By default center pe hai (discription)
        4. moving to right flex:1 on any on one box

       */}
            <Text style={styles.h1_fond_size}>Hello</Text>
        </View>
    );
};

// const gotcolor = [
//     {
//         id: 1,
//         color: "red"
//     },
//     {
//         id: 2,
//         color: "yellow"
//     },
//     {
//         id: 3,
//         color: "green"
//     },
//     {
//         id: 4,
//         color: "skyblue"
//     },
//     {
//         id: 5,
//         color: "orange"
//     },
// ]

let i = 1;

const StackNev = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Tab.Screen name="Homeees" component={Homeees} />
                <Tab.Screen name="Apple" component={Apple} />
                <Tab.Screen name="Banana" component={Banana} />
                <Tab.Screen name="Orange" component={Orange} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};

const Todo = () => {
    // const [bg_todo_color, setbg_todo_color] = useState("grey");
    const [todo_text, settodo_text] = useState("");
    const [todo_list, settodo_list] = useState([]);
    const [edit_todo_text, setedit_todo_text] = useState("");

    const add_to_list = () => {
        if (todo_text !== "") {
            settodo_list([...todo_list, {
                id: Date.now().toString(), title: todo_text,
                // bg: bg_todo_color 
            }]);
        }
        settodo_text("");
        // i = i + 1;
    }

    delete_todo_id = (id) => {
        // const copy_todo_list = todo_list.filter((todo) => todo.id !== id)
        const copy_todo_list = todo_list.filter((todo) => todo.id !== id)
        settodo_list(copy_todo_list);
        settodo_text("");
        setedit_todo_text(null);
    }

    edit_todo_id = (item) => {
        settodo_text(item.title);
        setedit_todo_text(item);
    }

    edit_todo_list = () => {
        // <----------- gets updated but after page updation --------->
        // todo_list[edit_todo_text.id - 1].title = todo_text
        // console.log(todo_text)

        const whole_todo_update = todo_list.map((item) => {
            if (item.id === edit_todo_text.id) {
                return { ...item, title: todo_text }
            }
            return item
        })
        settodo_list(whole_todo_update)

        settodo_text("")
        setedit_todo_text(null)
    }

    // const color_todo_box = ({item, index}) => {
    //   // gotcolor.map(item, (index) => {})
    //   // var colors = item.color
    //   // colors.toString()
    //   return(
    //     <View style={{height:10, width:10, borderRadius:50, backgroundColor:"red", marginBottom:12}}></View>
    //   );
    // }

    // const color_todo_box = () => {
    //     return (
    //         gotcolor.map((item, index) => {
    //             // console.log(item.color.toString());
    //             return (
    //                 <TouchableOpacity onPress={() => setbg_todo_color(item.color.toString())}>
    //                     <View style={{ height: 24, width: 24, borderRadius: 12, borderWidth: 1, borderColor: "black", backgroundColor: item.color.toString(), marginBottom: 12 }}></View>
    //                 </TouchableOpacity>
    //             );
    //         })
    //     )
    // }

    const image_shower = (item) => {
        // create tab from list
        Images.map((image_data, index) => {
            if (image_data.id == item.title.toLowerCase()) {
                console.log(image_data.image_address);
            }
            else {
                console.log("No Data");
            }
        });
    }

    const rendergotdata = ({ item, index }) => {
        let bgcolor = item.bg
        return (
            // <View>
            //     <stacknav key={item.id} item={item} navigation={navigation} />
            //     <Text style={{ flex: 1, color: "black", fontSize: 15, fontWeight: "bold" }}>{item.title}</Text>
            //     {/* {item.map(item => (
            //         <stacknav key={item.id} item={item} navigation={navigation} />
            //     ))} */}
            // </View>
            <TouchableOpacity style={{ ...styles.TextBox, backgroundColor: bgcolor }} onPress={() => image_shower(item)}>
                {/* {console.log(item)} */}

                <Text style={{ flex: 1, color: "black", fontSize: 15, fontWeight: "bold" }}>{item.title}</Text>
                <Text style={{ flex: 1, color: "black", fontSize: 15, fontWeight: "bold" }}>{item.bg}</Text>
                <TouchableOpacity onPress={() => edit_todo_id(item)}>
                    <Text style={{ color: "green", fontSize: 20, fontWeight: "bold" }}>
                        Edit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => delete_todo_id(item.id)}>
                    <Text style={{ color: "red", fontSize: 20, fontWeight: "bold", marginLeft: 7 }}>
                        Delete
                    </Text>
                </TouchableOpacity>
                {/* <IconButton iconColor="white" icon="pencil" onPress={() => edit_todo_id(item)} /> */}
                {/* <IconButton iconColor="white" icon="trash-can" onPress={() => delete_todo_id(item.id)} /> */}

            </TouchableOpacity>
        );
    };

    return (
        <View style={{ paddingHorizontal: 12, flex: 1, flexDirection: 'column' }}>
            {
                todo_list.length === 0 ?
                    <View>
                        <Text style={{ marginTop: 30, fontSize: 35, fontWeight: 500, color: "red" }}>Congrats!</Text>
                        <Text style={{ fontSize: 28, fontWeight: 300 }}>Assigned tasks completed.</Text>
                    </View>
                    :
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: "baseline" }}>
                            <Text style={{ fontSize: 28, fontWeight: 300 }}>Finish </Text>
                            <Text style={{ fontSize: 35, fontWeight: 500, color: "red" }}>Mission!</Text>
                        </View>
                        <FlatList
                            data={todo_list}
                            renderItem={rendergotdata}
                        // horizontal={true}
                        // pagingEnabled={true}
                        />
                    </View>
            }

            <View style={{ paddingVertical: 8, paddingHorizontal: 12, bottom: 0.1, position: 'absolute', justifyContent: "center", backgroundColor: "black", opacity: 0.8 }}>
                {/* <View style={{ marginTop: 12, flexDirection: "row", gap: 5, justifyContent: "center" }}>{color_todo_box()}</View> */}
                <View style={{ flexDirection: "row", gap: 15 }}>
                    <TextInput
                        style={styles.InputBox}
                        placeholder="Add it !!!"
                        placeholderTextColor="white"
                        value={todo_text}
                        onChangeText={(text) => {
                            settodo_text(text)
                        }}
                    // onChangeText={(text)=>
                    //   {console.log(text)
                    //   settodo_text(text)}}
                    />

                    {
                        edit_todo_text ?
                            <TouchableOpacity
                                style={styles.Buttons}
                                // onPress={() => add_to_list()}
                                onPress={() => edit_todo_list()}
                            >
                                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                                    SAVE
                                </Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                style={styles.Buttons}
                                onPress={() => add_to_list()}
                            >
                                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                                    ADD
                                </Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    InputBox: {
        borderColor: "green",
        color: "white",
        borderWidth: 3,
        borderRadius: 6,
        paddingHorizontal: 12,
        // paddingVertical: 16,
        height: 60,
        width: 290,
        // marginTop: 12,
        marginBottom: 7,
        fontSize: 20,
    },
    Buttons: {
        // marginTop: 12,
        borderColor: "green",
        backgroundColor: "gray",
        borderWidth: 3,
        borderRadius: 6,
        height: 60,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    TextBox: {
        height: 60,
        marginTop: 12,
        marginLeft: 6,
        // backgroundColor: bg_todo_color,
        // backgroundColor: "grey",
        borderWidth: 4,
        borderRadius: 6,
        borderColor: 'black',
        paddingHorizontal: 16,
        // paddingVertical:30,
        alignItems: "center",
        color: "black",
        flexDirection: "row"
    }
});

export default App
