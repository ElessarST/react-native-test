import ApiUtils from './api.util';
import { API_ENDPOINT } from '../const';

const DEFAULT_SIZE = 50;

function getQuestions(page = 0, size = 50) {
    return fetch(`${API_ENDPOINT}/questions?order=desc&sort=activity&tagged=react-native&site=stackoverflow&page=${page}&pagesize=${size}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          } 
    })
    .then(ApiUtils.checkStatus)
    .then((response) => response.json())
}

export default {
    getQuestions
};