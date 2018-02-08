import { AuthServce } from '../services';

export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

export function loginAction(credentials) {
    return (dispatch) => {
        dispatch({
            type: LOGIN,
            payload: {
                users: AuthServce.login(credentials)
            }
        });
    }
}

export function logoutAction(credentials) {
    return (dispatch) => {
        dispatch({
            type: LOGOUT
        });
    }
}