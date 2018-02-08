import React from 'react';
import { Logout } from "../../screens";
import { connect } from 'react-redux';
import { logoutAction } from '../../actions/auth.actions';

class LogoutContainer extends React.Component {
    render() {
        return (
            <Logout onLogout={() => this.props.logout()}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: (credentials) => dispatch(logoutAction())
    }
}

export default connect(null, mapDispatchToProps)(LogoutContainer);