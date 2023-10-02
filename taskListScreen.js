import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const TaskListScreen = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        setTasks([...tasks, { id: tasks.length + 1, text: taskText, completed: false }]);
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <View>
            <FlatList
                data={tasks}
                keyExtractor={(task) => task.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.text}</Text>
                        <Button title={item.completed ? 'Mark Incomplete' : 'Mark Complete'} onPress={() => toggleTaskCompletion(item.id)} />
                        <Button title="Delete" onPress={() => removeTask(item.id)} />
                    </View>
                )}
            />
            <Button title="Add Task" onPress={() => navigation.navigate('AddTask', { addTask })} />
        </View>
    );
};

export default TaskListScreen;


//add iOS/android