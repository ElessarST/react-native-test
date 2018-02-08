import { StackoverflowService } from '../services';

export const GET_QUESTIONS_LOADING = 'FETCH_QUESTIONS_LOADING';
export const GET_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';

export function getQuestions(page, loadMore = false) {
    return (dispatch) => {
        dispatch({
            type: GET_QUESTIONS_LOADING,
            payload: loadMore
        });

        StackoverflowService.getQuestions(page)
            .then(response => questionsSuccess(dispatch, response, page))
            .catch(error => questionsError(dispatch));
    }
}

function questionsSuccess(dispatch, response, page) {
    return dispatch({
        type: GET_QUESTIONS_SUCCESS,
        payload: {
            ...response,
            page
        }
    })
}

function questionsError(dispatch) {
    return dispatch({
        type: GET_QUESTIONS_ERROR
    });
}