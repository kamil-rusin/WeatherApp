import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { weatherConditions } from '../constants/weatherConditions';
import { dateConverter, timeConverter } from '../utils/timeConverter';
import { capitalizeFirstLetter } from '../utils/stringConverter';

const WeatherComponent = (props) => {
    const { weather, fetchingError, pending, temperature, pressure, sunSystem, dateTime } = props;

    if (weather != null) {
        return (
            <View
                style={[
                    styles.weatherContainer,
                    { backgroundColor: weatherConditions[weather.main].color },
                ]}
            >
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
                    <Text style={styles.title}>Gliwice</Text>
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
        );
    } else {
        return (
            <View>
                <Text>Oh no, something went wrong</Text>
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
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-evenly',
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
