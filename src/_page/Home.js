import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DB from '_database/hello';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HELLO HOME</Text>
                <DB/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});