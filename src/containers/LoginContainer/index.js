import React from 'react';
import { Login } from "../../screens";
import { connect } from 'react-redux';
import { loginAction } from '../../actions/auth.actions';

class LoginContainer extends React.Component {
    render() {
        return (
            <Login
                error={this.props.auth.error}
                onLogin={(credentials) => this.props.login(credentials)}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (credentials) => dispatch(loginAction(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);