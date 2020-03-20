import { fetchDataError, fetchDataPending, fetchDataSuccess } from './actionCreators';
import { API } from '../../constants/keys';

const fetchData = (city) => {
    return (dispatch) => {
        dispatch(fetchDataPending());
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&appid=${API}`,
        )
            .then((response) => response.json())
            .then((response) => {
                if (response.error) {
                    throw response.error;
                }
                dispatch(fetchDataSuccess(response));
                return response;
            })
            .catch((error) => {
                dispatch(fetchDataError(error));
            });
    };
};

export default fetchData;
