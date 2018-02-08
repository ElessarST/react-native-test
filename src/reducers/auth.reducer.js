import { 
    LOGIN,
    LOGOUT
} from "../actions/auth.actions";
import { Messages } from "../const";

export const initialState = {
    authenticated: false,
    error: null,
    user: null
}

export function auth(state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        const { users } = action.payload;
        const errorCred = users.length === 0;
        const user = !errorCred ? users[0] : null;
        const error = errorCred ? Messages.errorLogin : null;
        return { ...state, authenticated: !errorCred, user, error };
      case LOGOUT:
        return { ...state, authenticated: false, user: null, error: null };
      default:
        return state;
    }
}
