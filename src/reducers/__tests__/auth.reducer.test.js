import { auth, initialState } from '../auth.reducer'
import { 
    LOGIN,
    LOGOUT
} from "../../actions/auth.actions";
import { Messages } from '../../const';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(auth(undefined, {})).toEqual(initialState)
    })

    it('should handle LOGOUT', () => {
        const authenticatedState = {
            authenticated: true,
            error: null,
            user: {}
        };

        const action = {
            type: LOGOUT
        };

        expect(
            auth(authenticatedState, action)
        ).toEqual(
            {
                authenticated: false,
                user: null,
                error: null
            }
        );
    });


    it('shoud handle success LOGIN', () => {
        const user = {username: 'test'};
        const action = {
            type: LOGIN,
            payload: {
                users: [user]
            }
        };
        expect(
            auth(initialState, action)
        ).toEqual(
            {
                user,
                authenticated: true,
                error: null
            }
        );
    });

    it('should handle error LOGIN', () => {
        const action = {
            type: LOGIN,
            payload: {
                users: []
            }
        };
        expect(
            auth(initialState, action)
        ).toEqual(
            {
                user: null,
                authenticated: false,
                error: Messages.errorLogin
            }
        );
    })
})