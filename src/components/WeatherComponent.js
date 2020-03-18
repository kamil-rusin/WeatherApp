import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { weatherConditions } from '../constants/weatherConditions';
import { timeConverter } from '../utils/timeConverter';

const WeatherComponent = (props) => {
    const { weather, fetchingError, pending, temperature, pressure, sunSystem } = props;

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
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>Berlin</Text>
                    <Text style={styles.subtitle}>{pressure} hPa</Text>
                    <Text style={styles.title}>{weather.main}</Text>
                    <Text style={styles.subtitle}>{weather.description}</Text>
                    <Text style={styles.subtitle}>Sunrise: {timeConverter(sunSystem.sunrise)}</Text>
                    <Text style={styles.subtitle}>Sunset: {timeConverter(sunSystem.sunset)}</Text>
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
    title: {
        fontSize: 60,
        color: '#fff',
    },
    subtitle: {
        fontSize: 24,
        color: '#fff',
    },
});

export default WeatherComponent;
