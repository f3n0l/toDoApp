import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from './TaskListScreen';
import AddTaskScreen from './AddTaskScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TaskList">
                <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Task List' }} />
                <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Add Task' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
