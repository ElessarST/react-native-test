import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { LoginContainer } from "./containers";
import Drawer from './navigations';

const Root = ({ auth }) => {
    const authenticated = auth.authenticated;
    return (
        <View style={styles.container}>
        {
            !authenticated
            ? (<LoginContainer/>)
            : (<Drawer/>)
        }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Root);