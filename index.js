/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/screens/App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import configureStore from './src/redux/Store';
import React from 'react';
import { MainTheme } from './src/constants/MainTheme';

const store = configureStore();

const WeatherApp = () => (
    <Provider store={store}>
        <PaperProvider theme={MainTheme}>
            <App />
        </PaperProvider>
    </Provider>
);

AppRegistry.registerComponent(appName, () => WeatherApp);
