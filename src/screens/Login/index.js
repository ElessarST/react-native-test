import React from 'react';
import { Text, View, Button, KeyboardAvoidingView } from 'react-native';
import { InputWithIcon, Title, ErrorMessage } from '../../components';
import { FontAwesome } from '@expo/vector-icons';
import Styles from './styles';

const commonInputOptions = {
    autoCapitalize: 'none',
    spellCheck: false
}

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    updateUserName(username) {
        this.setState({ username });
    }

    updatePassword(password) {
        this.setState({ password });
    }

    onLogin() { 
        this.props.onLogin({
            username: this.state.username,
            password: this.state.password
        });
    }

    renderErrorMsg() {
        const error = this.props.error;
        if (!error || !error.length) return;
        return (
            <ErrorMessage text={error}/>
        )     
    }

    render() {
        return (
            <KeyboardAvoidingView style={Styles.container} behavior="padding">
                <Title text="Welcome"/>
                <View style={Styles.inputContainer}>
                    <InputWithIcon
                        icon={<FontAwesome name="user" size={24} />}
                        options={{
                            placeholder: "username",
                            onChangeText: (username) => this.updateUserName(username),
                            ...commonInputOptions
                        }}
                    />
                    <InputWithIcon
                        icon={<FontAwesome name="lock" size={24} />}
                        options={{
                            placeholder: "password",
                            onChangeText: (password) => this.updatePassword(password),
                            secureTextEntry: true,
                            ...commonInputOptions
                        }}
                    />
                </View>
                <View style={Styles.buttonContainer}>
                    <Button 
                        title="Log in"
                        onPress={() => this.onLogin()}
                    />
                    {this.renderErrorMsg()}
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default Login;