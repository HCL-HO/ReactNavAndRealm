import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Realm = require('realm');

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = { realm: null };
    }

    componentWillMount() {
        Realm.open({
            schema: [{ name: 'Dog', properties: { name: 'string' } }],
        }).then(realm => {
            realm.write(() => {
                realm.create('Dog', { name: 'Rex' });
            });
            this.setState({ realm });
        });
    }

    render() {
        const info = this.state.realm
            ? 'Number of dogs in this Realm: ' +
            this.state.realm.objects('Dog').length
            : 'Loading...';
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {info}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 25,
    },
});