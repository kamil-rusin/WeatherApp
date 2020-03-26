import { DefaultTheme } from 'react-native-paper';
import color from 'color';

export const MainTheme = {
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
