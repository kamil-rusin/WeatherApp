import React, { useRef, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { weatherConditions } from '../constants/WeatherConditions';
import { StyleSheet, View } from 'react-native';

const SearchCityElement = (props) => {
    const { weather, fetchData } = props;
    const [value, setValue] = useState('');
    const cityInput = useRef();

    return (
        <View style={styles.row}>
            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: weatherConditions[weather].color,
                    },
                ]}
                mode='outlined'
                label='Choose city'
                onChangeText={(text) => setValue(text)}
                ref={cityInput}
            />
            <Button
                style={styles.button}
                contentStyle={[
                    styles.buttonContent,
                    {
                        backgroundColor: weatherConditions[weather].color,
                    },
                ]}
                mode='outlined'
                compact={true}
                onPress={() => fetchData(value)}
            >
                CHECK
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    input: {
        margin: 10,
        marginRight: 0,
        width: '70%',
    },
    button: {
        margin: 10,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 14,
    },
    buttonContent: {
        margin: 10,
    },
});

export default SearchCityElement;
