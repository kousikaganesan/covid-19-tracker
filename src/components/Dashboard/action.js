import axios from 'axios';
import { GET_STAT_SUCCEEDED } from './actionTypes.js';

export const getStats = () => (dispatch) => {
    axios.get('https://api.covid19api.com/summary').then((res) => {
        dispatch({ type: GET_STAT_SUCCEEDED, payload: res.data })
    });
}