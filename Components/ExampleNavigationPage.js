
import React,{ Component } from 'react';

import {

    TouchableOpacity,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import { StackNavigator,NavigationActions} from 'react-navigation';

import ExampleHomePage from './ExampleHomePage';
import ExampleNavigationManager from './ExampleNavigationManager';
import navigationOptionInfo from './NavigationOptionsInfo';

const Nav = StackNavigator(
    {
        Home:{
            screen:ExampleHomePage,
        },
    },
    navigationOptionInfo.config('疯狂猿')
)

export default class ExampleNavigationPage extends Component {

    render() {

        return (

            <Nav/>
        );
    }

    componentDidMount() {
        ExampleNavigationManager.navNavigation = this.props.navigation;
    }

    componentDidUpdate() {

        // const navigationAction = NavigationActions.navigate({
        //     routeName: this.props.navigation.state.params.data,
        //     params: {},
        //
        //     // navigate can have a nested navigate action that will be run inside the child router
        //     action: NavigationActions.navigate({ routeName: this.props.navigation.state.params.data})
        // })
        // this.props.navigation.dispatch(navigationAction)
        //
        // console.log(this.props.navigation.state.params.data);
    }
}

