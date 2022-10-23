import React, {useState, useEffect} from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const [tasksData, setTasksData] = useState('')

    const tasks = [
        { id: 10, task: 'делай 1'},
        { id: 11, task: 'делай 2'},
        { id: 12, task: 'делай 3'},
        { id: 13, task: 'делай 4'},
        { id: 14, task: 'делай 5'},
        { id: 15, task: 'делай 6'},
        { id: 16, task: 'делай 7'},
        { id: 17, task: 'делай 8'},
        { id: 18, task: 'делай 9'},
    ]
    // const usrToken = AsyncStorage.getItem(token)
    // useEffect(() => {
    //     fetch('', {
    //         method:'POST',
    //         headers: {
    //             token:  usrToken
    //         }
    //     })
    //     .then(res => {
    //         setTasksData(res)
    //     })
    //     .catch(error => {
    //         alert(error)
    //     })
    // }, [])

    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <ScrollView>
                {
                    tasks.map(task => {
                        return(
                            <View key={task.id} style={styles.taskcontainer}>
                                <Text style={styles.textcontainer}>{task.task}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({


    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    taskcontainer:{
        height: 40,
        width: 200,
        margin: 20,
        backgroundColor: '#86ACFF',
    },
    textcontainer:{
        padding: 10,
        textAlign: 'center'        
    }

})