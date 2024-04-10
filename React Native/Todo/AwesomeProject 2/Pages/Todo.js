import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { } from "react-native";
import {Text, View, FlatList, TextInput, TouchableOpacity} from "react-native";
import Styles from "../Data/Styles";
import Getcolor from "../Data/Getcolor";

export default Todo = () => {
    const navigation = useNavigation();
    const [bg_todo_color, setbg_todo_color] = useState("white");
    const [todo_text, settodo_text] = useState("");
    const [todo_list, settodo_list] = useState([]);
    const [edit_todo_text, setedit_todo_text] = useState("");

    const add_to_list = () => {
        if (todo_text !== "") {
            settodo_list([...todo_list, {
                id: Date.now().toString(), title: todo_text,
                bg: bg_todo_color 
            }]);
        }
        settodo_text("");
        // i = i + 1;
    }

    delete_todo_id = (id) => {
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

    // const color_todo_box = () => {
    //     return (
    //         Getcolor.map((item, index) => {
    //             return (
    //                 <TouchableOpacity onPress={() => setbg_todo_color(item.color.toString())}>
    //                     <View style={{ height: 24, width: 24, borderRadius: 12, borderWidth: 1, borderColor: "black", backgroundColor: item.color.toString(), marginBottom: 12 }}></View>
    //                 </TouchableOpacity>
    //             );
    //         })
    //     )
    // }

    const rendergotdata = ({ item, index }) => {
        let bgcolor = item.bg
        return (
            <TouchableOpacity style={{ ...Styles.textbox, justifyContent: 'space-between', backgroundColor: bgcolor, borderColor: "black" }}
                onPress={() => navigation.navigate('Individual', { found: item })}
            >
                <Text style={Styles.textbox_text}>{item.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => edit_todo_id(item)}>
                        <Text style={[Styles.textbox_text, { color: "green", fontWeight: "bold" }]}>
                            Edit
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => delete_todo_id(item.id)}>
                        <Text style={[Styles.textbox_text, { color: "red", fontWeight: "bold", marginLeft: 7 }]}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        
        <View style={{ paddingHorizontal: 12, flex: 1, flexDirection: 'column' }}>

{/* ******* Not able to combine style of text fontWeight ******* */}

            {
                todo_list.length === 0 ?
                    <View>
                        <Text style={[Styles.red_text ,{fontWeight: 500, color:"green"}]}>Congrats!</Text>
                        <Text style={Styles.textbox_text}>Assigned tasks completed.</Text>
                    </View>
                    :
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: "baseline" }}>
                            <Text style={Styles.textbox_text}>Finish </Text>
                            <Text style={[Styles.red_text ,{fontWeight: 500}]}>Mission!</Text>
                        </View>
                        <FlatList
                            data={todo_list}
                            renderItem={rendergotdata}
                        // horizontal={true}
                        // pagingEnabled={true}
                        />
                    </View>
            }
            
            <View style={Styles.bottom_inputs}>
                {/* <View style={{ marginTop: 12, flexDirection: "row", gap: 5, justifyContent: "center" }}>{color_todo_box()}</View> */}
                <View style={{ flexDirection: "row", justifyContent: 'space-around'}}>
                    <TextInput
                        style={[Styles.textbox, {width: 290, marginBottom: 7, marginLeft:0, borderColor:"red"}]}
                        placeholder="Add it !!!"
                        placeholderTextColor="white"
                        value={todo_text}
                        onChangeText={(text) => {
                            settodo_text(text)
                        }}
                    />

                    {
                        edit_todo_text ?
                            <TouchableOpacity
                                style={[Styles.Buttons, {width: 70}]}
                                // onPress={() => add_to_list()}
                                onPress={() => edit_todo_list()}
                            >
                                <Text style={Styles.Buttons_text}>
                                    SAVE
                                </Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                style={[Styles.Buttons, {width: 70}]}
                                onPress={() => add_to_list()}
                            >
                                <Text style={Styles.Buttons_text}>
                                    ADD
                                </Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
};