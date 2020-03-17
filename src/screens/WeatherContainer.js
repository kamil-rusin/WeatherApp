import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchDataAction from '../redux/actions/fetchData';
import WeatherComponent from '../components/WeatherComponent';

const getError = (state) => state.weatherReducer.error;
const getCity = (state) => state.weatherReducer.city;
const getPending = (state) => state.weatherReducer.pending;
const getWeather = (state) => state.weatherReducer.weather;
const getTemperature = (state) => state.weatherReducer.temperature;
const getPressure = (state) => state.weatherReducer.pressure;
const getSunSystem = (state) => state.weatherReducer.sunSystem;

const WeatherContainer = (props) => {
    const weatherData = useSelector(getWeather);
    const fetchingError = useSelector(getError);
    const chosenCity = useSelector(getCity);
    const pending = useSelector(getPending);
    const temperature = useSelector(getTemperature);
    const pressure = useSelector(getPressure);
    const sunSystem = useSelector(getSunSystem);
    const dispatch = useDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchDataAction('Berlin'));
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <WeatherComponent
                weather={weatherData}
                temperature={Number(temperature)}
                pressure={pressure}
                sunSystem={sunSystem}
                city={chosenCity}
                fetchingError={fetchingError}
                pending={pending}
            />
        </>
    );
};

export default WeatherContainer;
