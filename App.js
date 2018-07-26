import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import store from '_redux/store';
import Navigator from '_navigation/navigator';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <Navigator />
                </Root>
            </Provider>
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
