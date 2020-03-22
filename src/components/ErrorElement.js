import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ErrorElement = (props) => {
    const { message } = props;

    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>{message.toString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    errorContainer: {
        borderRadius: 3,
        backgroundColor: '#cf0007',
        marginTop: 85,
        width: '94%',
        alignSelf: 'center',
        justifyContent: 'center',
        zIndex: 1,
        position: 'absolute',
    },
    errorMessage: {
        fontSize: 18,
        color: 'white',
        margin: 5,
    },
});

export default ErrorElement;
