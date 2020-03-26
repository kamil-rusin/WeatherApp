/**
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import WeatherContainer from './WeatherContainer';
import { safeAreaViewStyle } from '../styles/SafeAreaViewStyle';

const App: () => React$Node = () => {
    return (
        <>
            <SafeAreaView style={safeAreaViewStyle.container}>
                <WeatherContainer />
            </SafeAreaView>
        </>
    );
};

export default App;
