import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Login({navigation}) {

  const [data, setData] = useState(() => {
    return {
    login:'',
    password:'',
    }
  });
  const changeInputLogin = val => {
    setData({
        ...data,
        login: val,
    })
  }
  const changeInputPassword = val => {
    setData({
        ...data,
        password: val,
    })
  }
  const submitCheckin = () => {
    console.log(data.login + ' + ' + data.password)
    fetch('', {
        method: 'POST',
        body: JSON.stringify({
            login: data.login,
            password: data.password,
        })
    })
    .then(token => {
        AsyncStorage.setItem(token);
        navigation.navigate('Home')
    })
    .catch(error => {
        alert(error)
        navigation.navigate('Login')
    })
  }

  return (
    <View style={styles.container}>

      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={require("../assets/icons/log-in.png")} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Login"
          placeholderTextColor="#003f5c"
          onChangeText={(login) => changeInputLogin(login)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => changeInputPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => {/*submitCheckin();*/ navigation.navigate('Home')}}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  imagecontainer: {

  },

  image: {
    width: 90,
    height: 90,
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#9EBCFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
    justifyContent: "center",
  },
 
  TextInput: {
    width: '70%',
    height: 50,
    flex: 1,
    // padding: 10,
    marginLeft: '50%',
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3371FF",
  },
});