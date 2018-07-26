import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import PageConst from '_navigation/PageConst';

import HomePage from '_page/Home';

import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

export const AppStackNavigator = StackNavigator(
    {
        [PageConst.HOME]: {
            screen: HomePage,
        },
    },
    {
        headerMode: 'none',
    },
);


const Navigator = props => (
    <AppStackNavigator
        navigation={addNavigationHelpers({
            dispatch: props.dispatch,
            state: props.navigation,
            addListener,
        })}
    />
);

export default connect(state => ({
    navigation: state.navigation,
}))(Navigator);