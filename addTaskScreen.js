import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTaskScreen = ({ onAddTask, navigation }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        onAddTask(taskText);
        setTaskText('');
        navigation.goBack();
    };

    return (
        <View>
            <TextInput
                value={taskText}
                onChangeText={setTaskText}
                placeholder="Enter task"
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};

export default AddTaskScreen;
