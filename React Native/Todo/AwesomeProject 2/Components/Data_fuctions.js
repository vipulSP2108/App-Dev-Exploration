import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';

export default Data_fuctions = () => {
    const [status, setstatus] = useState();

    const GetData = async() => {
        const internal = await AsyncStorage.getItem("status");
        console.log(internal);
        setstatus(internal);
    }
    const SetData = async() => {
        await AsyncStorage.setItem("status", "LoggedIN");
    }
    const DeleteData = async() => {
        await AsyncStorage.setItem("status", "LoggedOFF");
    }

    return { GetData, SetData, DeleteData, status};
    // How to USE const { GetData, SetData } = Data_fuctions();
}