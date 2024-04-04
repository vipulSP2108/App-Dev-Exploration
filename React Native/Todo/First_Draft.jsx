import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator(); 

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Todo" component={Todo}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {

  return(
    <View>
      {/* ........................Doubt............................ */}
      {/* 
        1. <Text style={styles.h1_fond_size , {color:"red"}}>Hello World</Text>
        2. How to add style to existing one
        3. By default center pe hai (discription)
        4. adding style to button (common-css + moving to right delete botton)
       */}
      <Text style={styles.h1_fond_size}>Hello World</Text>
    </View>
  );
};

let rendered = "Congrats! You Have Completed all Task";

const Todo = () => {
  const [store_title, setstore_title] = useState("");
  const [store_discription, setstore_discription] = useState("");
  const [list_task, setlist_task] = useState([]);

  let copy_list_task = [...list_task];

  list_task.length === 0 ?
  <Text>{rendered}</Text>
  : 
  rendered = list_task.map((t,i) => {
    return(
      <Text>
        {i+1+". "+t.store_title+" "+t.store_discription}
        <Button 
          title="delete"
          onPress={(i) => {
            copy_list_task.pop(i)
            setlist_task(copy_list_task)
          }}
        >
        </Button>
        {"\n"}
      </Text>
    )
  })

  return(
    <View>
      <Text style={styles.h1_fond_size}>Hello World</Text>
      <TextInput
        style = {styles.Small_input_box}
        value= {store_title}
        placeholder = "Title"
        onChangeText = {(text)=>setstore_title(text)}
      />
      <TextInput
        style = {styles.Big_input_box}
        value= {store_discription}
        placeholder = "Discription"
        onChangeText = {(text)=>setstore_discription(text)}
      />
      <Button 
        style = {styles.h2_fond_size}
        title='Add'
        onPress={() => {
          setlist_task([...list_task, {store_title, store_discription}]);
          setstore_discription('');
          setstore_title('');
        }}>
      </Button>
      <Text style = {styles.tasks}>
        {rendered}
      </Text>
    </View>

  );
};

const styles = StyleSheet.create({
  h1_fond_size: {
    fontSize:35,
    margin: 5
  },
  h2_fond_size: {
    width: 5
  },
  tasks: {
    fontSize:25,
    marginTop: 5,
    backgroundColor: "grey"
  },
  Small_input_box: {
    fontSize:25,
    padding: 7,
    borderWidth: 2,
    color: "black",
    margin: 7,
  },
  Big_input_box: {
    fontSize:20,
    padding: 7,
    borderWidth: 2,
    color: "black",
    margin: 7,
    height: 200
  },
});

export default App
