
import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles'

const ErrorMessage = ({ text }) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.error}>{text}</Text>
        </View>
    )
}

export default ErrorMessage;