import { questions, initialState } from '../questions.reducer'
import { 
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_LOADING
} from "../../actions/questions.actions";
import { Messages } from '../../const';

describe('questions reducer', () => {

    const oldItem = {name: 'old item'};
    const stateWithData = {
        ...initialState,
        data: {
            items: [oldItem]
        }
    }

    it('should return the initial state', () => {
        expect(questions(undefined, {})).toEqual(initialState)
    });

    it('should handle refresh start action', () => {
        const action = {
            type: GET_QUESTIONS_LOADING,
            payload: false
        };
        expect(
            questions(initialState, action)
        ).toEqual(
            {
                ...initialState,
                loading: true,
                loadingMore: false
            }
        );
    });

    it('should handle load more start action', () => {
        const action = {
            type: GET_QUESTIONS_LOADING,
            payload: true
        };
        expect(
            questions(initialState, action)
        ).toEqual(
            {
                ...initialState,
                loading: false,
                loadingMore: true
            }
        );
    });
    
    it('should handle refresh success action', () => {
        const newItem = { name: 'new item' };
        const action = {
            type: GET_QUESTIONS_SUCCESS,
            payload: {
                items: [ { name: 'new item' } ]
            }
        };
        expect(
            questions({...stateWithData, loading: true }, action)
        ).toEqual(
            {
                ...stateWithData,
                data: {
                    items: [newItem]
                },
                loadingMore: false,
                loading: false
            }
        );
    });

    it('should handle load more success action', () => {
        const newItem = { name: 'new item' };
        const action = {
            type: GET_QUESTIONS_SUCCESS,
            payload: {
                items: [{ name: 'new item' }]
            }
        };

        expect(questions({...stateWithData, loadingMore: true }, action)).toEqual(
            {
                ...stateWithData,
                data: {
                    items: [oldItem, newItem]
                },
                loadingMore: false,
                loading: false
            }
        );
    });
    
    it('should handle error action', () => {
        const newItem = { name: 'new item' };
        const action = {
            type: GET_QUESTIONS_ERROR
        };

        expect(questions({...stateWithData, loadingMore: true }, action)).toEqual(
            {
                ...stateWithData,
                loadingMore: false,
                loading: false,
                error: Messages.errorRequest
            }
        );
    });
})