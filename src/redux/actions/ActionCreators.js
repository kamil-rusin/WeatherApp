import {
    FETCH_DATA_ERROR,
    FETCH_DATA_PENDING,
    FETCH_DATA_SUCCESS,
    UPDATE_CITY,
} from '../../constants/Types';

export const fetchDataPending = () => {
    return {
        type: FETCH_DATA_PENDING,
    };
};

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        weather: data.weather[0],
        temperature: data.main.temp,
        pressure: data.main.pressure,
        sunSystem: {
            sunrise: data.sys.sunrise + data.timezone,
            sunset: data.sys.sunset + data.timezone,
        },
        dateTime: data.dt + data.timezone,
        city: data.name,
    };
};

export const fetchDataError = (error) => {
    return {
        type: FETCH_DATA_ERROR,
        error: error,
    };
};

export const updateCity = (key) => {
    return {
        type: UPDATE_CITY,
        city: key,
    };
};
