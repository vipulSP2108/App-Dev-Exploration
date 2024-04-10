import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Styles from "../Data/Styles";
import Entry from "../Data/Entry";
import Data_fuctions from "../Components/Data_fuctions";

const Login = () => {
    const { GetData, SetData, DeleteData, status } = Data_fuctions();

    const navigation = useNavigation();
    const [Username, setUsername] = useState(null)
    const [Password, setPassord] = useState(null)

    const checkstutus = () => {
        GetData();
        if (status == "LoggedIN") {
            navigation.navigate('Main');
        }
        console.log(status)
    }
    const checkeligibility = (Username, Password) => {
        var eligible = false;
        Entry.forEach((entry_data) => {
            if (entry_data.dUsername == Username) {
                if (entry_data.dPassword == Password) {
                    // seteligible(true);
                    eligible = true;
                    SetData();
                    return eligible;
                }
            }
        })
        return eligible;
    }

    const nav = (Username, Password) => {
        const eligible = checkeligibility(Username, Password);
        return(
            eligible ? navigation.navigate('Main') : Alert.alert('Error', 'Wrong Username or Password')
        )
    }

    const addeligibility = (Username, Password) => {
        Username != "" && Password != "" ?
            Entry.push({dUsername:Username, dPassword:Password})
        :
        Alert.alert('Error', 'Enter Username and Password')
    }

    return (
        
        <View style={Styles.screen_center}>
            {checkstutus()}
            <Text style={{ marginTop: 30, fontSize: 35, fontWeight: 500, color: "red" }}>Login</Text>
            <TextInput style={[Styles.textbox, {width: 300}]}
                placeholder="User Name"
                placeholderTextColor={"white"}
                value={Username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput style={[Styles.textbox, {width: 300}]}
                placeholder="Password"
                placeholderTextColor={"white"}
                value={Password}
                onChangeText={(text) => setPassord(text)}
            />
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity style={Styles.Buttons} 
                    onPress={() => 
                        {nav(Username, Password)
                        // setData("name", "true")
                        setUsername("")
                        setPassord("")}
                    }
                >
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.Buttons, {marginLeft:7}]} 
                    onPress={() => addeligibility(Username, Password)}
                >
                    <Text style={Styles.Buttons_text}>Sign In</Text>
                </TouchableOpacity>
                {/* {stored == "true" ? navigation.navigate('Main') : null} */}
            </View>
        </View>
    )
}

export default Login