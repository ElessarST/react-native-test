import React from 'react';
import { Home } from "../../screens";
import { connect } from 'react-redux';
import { signInAction } from '../../actions/auth.actions';

const HomeContainer = ({ auth }) => {
    return (
        <Home user={auth.user}/>
    );
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(HomeContainer);