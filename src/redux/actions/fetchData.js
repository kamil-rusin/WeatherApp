import { fetchDataError, fetchDataPending, fetchDataSuccess } from './actionCreators';
import { API } from '../../constants/keys';
import { capitalizeFirstLetter } from '../../utils/stringConverter';

const fetchData = (city) => {
    return (dispatch) => {
        dispatch(fetchDataPending());
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&appid=${API}`,
        )
            .then((response) => response.json())
            .then((response) => {
                if (response.message) {
                    throw capitalizeFirstLetter(response.message);
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
