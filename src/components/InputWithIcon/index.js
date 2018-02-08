import React from 'react';
import { View, TextInput } from 'react-native';
import Styles from './styles'

const InputWithIcon = ({ icon, options }) => {
    return (
        <View style={Styles.container}>
            { icon }
            <TextInput
                style={Styles.textInput}
                {...options}
            />
        </View>
    )
}

export default InputWithIcon;