import React from 'react';
import { View, Text } from 'react-native';
import Styles from './styles'

const Title = ({ text }) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>{text}</Text>
        </View>
    )
}

export default Title;