import { GET_REPORTS, GET_METRICS, ERR_REPORTS, ERR_METRICS } from '../type';
import axios from 'axios';

export const getReports = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/reports');
        dispatch({
            type: GET_REPORTS,
            payload: res.data
        })
    } catch(error) {
        dispatch({
            type: ERR_REPORTS,
            payload: error
        })
    }
}

export const getMetrics = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/metrics');
        dispatch({
            type: GET_METRICS,
            payload: res.data
        })
    } catch(error) {
        dispatch({
            type: ERR_METRICS,
            payload: error
        })
    }
}