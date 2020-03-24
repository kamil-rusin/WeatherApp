import React from 'react';
import { View, StyleSheet, Text, ScrollView, RefreshControl } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActivityIndicator } from 'react-native-paper';

import { weatherConditions } from '../constants/WeatherConditions';
import { dateConverter, timeConverter } from '../utils/TimeConverter';
import { capitalizeFirstLetter } from '../utils/StringConverter';
import ErrorElement from './ErrorElement';
import SearchCityElement from './SearchCityElement';

const WeatherComponent = (props) => {
    const {
        weather,
        fetchingError,
        pending,
        temperature,
        pressure,
        sunSystem,
        dateTime,
        city,
        fetchData,
    } = props;

    if (weather != null) {
        return (
            <ScrollView
                contentContainerStyle={styles.weatherContainer}
                refreshControl={
                    <RefreshControl refreshing={pending} onRefresh={() => fetchData(city)} />
                }
            >
                <View
                    style={[
                        styles.weatherContainer,
                        { backgroundColor: weatherConditions[weather.main].color },
                    ]}
                >
                    <SearchCityElement weather={weather.main} fetchData={fetchData} />

                    {fetchingError && <ErrorElement message={fetchingError} />}

                    <View style={styles.headerContainer}>
                        <MaterialCommunityIcons
                            size={72}
                            name={weatherConditions[weather.main].icon}
                            color={'#fff'}
                        />
                        <Text style={styles.tempText}>{Math.round(temperature)}˚C</Text>
                    </View>
                    <View style={styles.dateTimeContainer}>
                        <Text style={styles.title}>{timeConverter(dateTime)}</Text>
                        <Text style={styles.title}>{dateConverter(dateTime)}</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <Text style={styles.title}>{city}</Text>
                        <Text style={styles.subtitle}>{pressure} hPa</Text>
                        <Text style={styles.description}>
                            {capitalizeFirstLetter(weather.description)}
                        </Text>
                        <View style={styles.row}>
                            <MaterialCommunityIcons
                                style={styles.sunIcon}
                                size={32}
                                name={'weather-sunset-up'}
                                color={'#fff'}
                            />
                            <Text style={styles.subtitle}>{timeConverter(sunSystem.sunrise)}</Text>
                            <MaterialCommunityIcons
                                style={styles.sunIcon}
                                size={32}
                                name={'weather-sunset-down'}
                                color={'#fff'}
                            />
                            <Text style={styles.subtitle}>{timeConverter(sunSystem.sunset)}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    } else {
        return (
            <View style={styles.indicatorContainer}>
                <ActivityIndicator size={'large'} color={'#fff'} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15,
    },
    indicatorContainer: {
        flex: 1,
        backgroundColor: '#1F1C2C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempText: {
        fontSize: 72,
        color: '#fff',
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40,
    },
    dateTimeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        color: '#fff',
    },
    subtitle: {
        fontSize: 18,
        color: '#fff',
        marginRight: 10,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    sunIcon: {
        marginRight: 5,
    },
    description: {
        fontSize: 36,
        color: '#fff',
    },
});

export default WeatherComponent;
