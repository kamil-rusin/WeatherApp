/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/screens/App';
import { name as appName } from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import color from 'color';
import React from 'react';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'white',
        accent: 'white',
        text: 'white',
        disabled: color('#fff')
            .alpha(0.26)
            .rgb()
            .string(),
        placeholder: color('#fff')
            .alpha(0.54)
            .rgb()
            .string(),
    },
};

const store = configureStore();

const WeatherApp = () => (
    <Provider store={store}>
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    </Provider>
);

AppRegistry.registerComponent(appName, () => WeatherApp);
