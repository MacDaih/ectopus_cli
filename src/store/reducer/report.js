import { GET_REPORTS, GET_REPORT, ERR_REPORTS, ERR_REPORT, GET_METRICS, ERR_METRICS } from '../type';

const initialState = {
    reports: [],
    report: {},
    metric: {},
    error: {}
}

export default function report(state = initialState, action) {
    switch(action.type) {
        case GET_REPORTS:
            return {
                ...state,
                reports: action.payload
            };
        case GET_REPORT:
            return {
                ...state,
                report: action.payload
            };
        case GET_METRICS:
            return {
                ...state,
                metric: action.payload
            }
        case ERR_REPORTS:
            return {
                ...state,
                error: action.payload
            };
        case ERR_REPORT:
            return {
                ...state,
                error: action.payload
            };
        case ERR_METRICS:
            return {
                ...state,
                error: action.payload
            };
        default: 
            return state;
    }
}