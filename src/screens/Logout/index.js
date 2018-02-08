import React from 'react';
import { Text, View, Button, KeyboardAvoidingView } from 'react-native';
import { InputWithIcon, Title } from '../../components';
import { FontAwesome } from '@expo/vector-icons';
import Styles from './styles';

const Logout = ({ onLogout }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.logoContainer}>
                <Title text={`Good Bye`}/>
            </View>
            <View style={Styles.buttonContainer}>
                <Button 
                    title="Log Out"
                    onPress={() => onLogout()}
                />
            </View>
            <View style={Styles.paddingContainer}></View>
        </View>
    );
}
export default Logout;