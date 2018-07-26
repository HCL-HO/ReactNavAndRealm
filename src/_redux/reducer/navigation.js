import { NavigationActions } from 'react-navigation';
import { AppStackNavigator } from '_navigation/navigator';
import ReduxActionConst from '_redux/const';
import NavConst from '_navigation/PageConst';

const initialNavState = AppStackNavigator.router.getStateForAction(
    AppStackNavigator.router.getActionForPathAndParams(NavConst.HOME),
);

export default function navigation(state = initialNavState, action) {
    switch (action.type) {
    case ReduxActionConst.NAVIGATE:
        return AppStackNavigator.router.getStateForAction(action, state);

    case ReduxActionConst.BACK:
        return AppStackNavigator.router.getStateForAction(
            NavigationActions.back(),
            state,
        );

    case ReduxActionConst.RESET:
        return AppStackNavigator.router.getStateForAction(action, state);

    default:
        return state;
    }
}