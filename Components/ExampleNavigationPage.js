
import React,{ Component } from 'react';

import { StackNavigator,NavigationActions} from 'react-navigation';

import ExampleHomePage from './ExampleHomePage';
import ExampleNavigationManager from './ExampleNavigationManager';
import navigationOptionInfo from './NavigationOptionsInfo';
import ExampleTechnicalColumnPage from "./ExampleTechnicalColumnPage";
import ExampleLatestNewsPage from "./ExampleLatestNewsPage";
import ExampleWebDetailPage from './ExampleWebDetailPage';

const Nav = StackNavigator(
    {
        Home:{
            screen:ExampleHomePage,
        },
        TechnicalColumnPage:{
            screen:ExampleTechnicalColumnPage,
        },
        ExampleLatestNewsPage: {
            screen:ExampleLatestNewsPage,
        },
        DetailWebPage:{
            screen:ExampleWebDetailPage
        }
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
        ExampleNavigationManager.drawerNavigation = this.props.navigation;
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
        //console.log();
        //alert(this.props.navigation.state.params.info);
    }
}

