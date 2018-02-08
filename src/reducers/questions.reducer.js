import { 
    GET_QUESTIONS_LOADING,
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_ERROR
} from "../actions/questions.actions";
import { Messages } from "../const";

export const initialState = {
    data: {
        items: []
    },
    loading: false,
    loadingMore: false,
    error: null
}

export function questions(state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS_LOADING:
            return { ...state, loading: !action.payload, loadingMore: action.payload }
        case GET_QUESTIONS_SUCCESS:
            const response = action.payload;
            const newItems = state.loadingMore ? state.data.items.concat(response.items) : response.items;
            return { 
                ...state,
                loading: false,
                loadingMore: false,
                data: { ...response, items: newItems },
                error: null 
            }
        case GET_QUESTIONS_ERROR:
            return { ...state, loading: false, loadingMore: false, error: Messages.errorRequest}
        default:
            return state;
    }
}
