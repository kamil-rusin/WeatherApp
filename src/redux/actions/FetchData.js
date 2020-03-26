import { fetchDataError, fetchDataPending, fetchDataSuccess } from './ActionCreators';
import { API } from '../../constants/Keys';
import { capitalizeFirstLetter } from '../../utils/StringConverter';

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
