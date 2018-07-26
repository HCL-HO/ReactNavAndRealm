import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DB from '_database/hello';
import SQliteTest from '_database/sqliteTest';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text>HELLO HOME</Text>
                </View>
                <View style={styles.dbInfo}>
                    <SQliteTest />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        backgroundColor: '#fffbb9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dbInfo: {
        flex: 9,
        backgroundColor: '#ff8e6c',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
});