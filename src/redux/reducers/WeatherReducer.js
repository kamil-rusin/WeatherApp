import {
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    UPDATE_CITY,
} from '../../constants/Types';

const initialState = {
    pending: false,
    weather: null,
    temperature: null,
    pressure: null,
    sunSystem: null,
    error: null,
    city: null,
    dateTime: null,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state,
                error: null,
                pending: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                weather: action.weather,
                temperature: action.temperature,
                pressure: action.pressure,
                sunSystem: action.sunSystem,
                dateTime: action.dateTime,
                city: action.city,
            };
        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        case UPDATE_CITY:
            return {
                ...state,
                city: action.city,
            };
        default:
            return state;
    }
};

export default weatherReducer;
