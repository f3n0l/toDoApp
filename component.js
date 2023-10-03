import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'; // Import the styles from the styles.js file

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, React Native!</Text>
            <TouchableOpacity style={styles.button}>
                <Text>Press Me</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyComponent;