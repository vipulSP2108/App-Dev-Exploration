import React, { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { black, red100, white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Todo" component={Todo} />
      </Tab.Navigator>
    </NavigationContainer>
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
      <Text style={styles.h1_fond_size}>Hello World</Text>
    </View>
  );
};

const gotcolor = [
  {
    id: 1,
    color: "red"
  },
  {
    id: 2,
    color: "yellow"
  },
  {
    id: 3,
    color: "green"
  },
  {
    id: 4,
    color: "skyblue"
  },
  {
    id: 5,
    color: "orange"
  },
]

let i = 1;


const Todo = () => {
  const [bg_todo_color, setbg_todo_color] = useState("grey");
  const [todo_text, settodo_text] = useState("");
  const [todo_list, settodo_list] = useState([]);
  const [edit_todo_text, setedit_todo_text] = useState("");

  const add_to_list = () => {
    if (todo_text !== "") {
      settodo_list([...todo_list, { id: i, title: todo_text, bg: bg_todo_color }]);
    }
    settodo_text("");
    i = i + 1;
  }

  delete_todo_id = (id) => {
    // const copy_todo_list = todo_list.filter((todo) => todo.id !== id)
    const copy_todo_list = todo_list.filter((todo) => todo.id !== id)
    settodo_list(copy_todo_list)
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

  const color_todo_box = () => {
    return (
      gotcolor.map((item, index) => {
        // console.log(item.color.toString());
        return (
          <TouchableOpacity onPress={() => setbg_todo_color(item.color.toString())}>
            <View style={{ height: 24, width: 24, borderRadius: 12, borderWidth: 1, borderColor: "black", backgroundColor: item.color.toString(), marginBottom: 12 }}></View>
          </TouchableOpacity>
        );
      })
    )
  }


  const rendergotdata = ({ item, index }) => {
    let bgcolor = item.bg
    return (
      <View style={{ ...styles.TextBox, backgroundColor: bgcolor }}>
        <Text style={{ flex: 1, color: "white", fontSize: 15, fontWeight: "bold" }}>{item.title}</Text>
        <Text style={{ flex: 1, color: "white", fontSize: 15, fontWeight: "bold" }}>{item.bg}</Text>
        <IconButton iconColor="white" icon="pencil" onPress={() => edit_todo_id(item)} />
        <IconButton iconColor="white" icon="trash-can" onPress={() => delete_todo_id(item.id)} />
      </View>
    );
  };

  return (
      <View style={{ paddingHorizontal: 12, flex: 1, flexDirection: 'column'}}>
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
          <View style={{ marginTop: 12, flexDirection: "row", gap: 5, justifyContent: "center" }}>{color_todo_box()}</View>
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
    borderColor: "gray",
    color: "white",
    borderWidth: 2,
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
    backgroundColor: "gray",
    borderWidth: 2,
    borderRadius: 6,
    height: 60,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  TextBox: {
    height: 200,
    marginTop: 12,
    marginLeft: 6,
    // backgroundColor: bg_todo_color,
    // backgroundColor: "grey",
    borderWidth: 4,
    borderRadius: 6,
    paddingHorizontal: 16,
    // paddingVertical:30,
    alignItems: "center",
    color: "white",
    flexDirection: "row"
  }
});

export default App
