import {
    FETCH_DATA_ERROR,
    FETCH_DATA_PENDING,
    FETCH_DATA_SUCCESS,
    UPDATE_CITY,
} from '../../constants/types';

export const fetchDataPending = () => {
    return {
        type: FETCH_DATA_PENDING,
    };
};

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        data: data,
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
        searchKey: key,
    };
};
