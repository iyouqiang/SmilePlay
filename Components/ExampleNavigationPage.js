
import React,{ Component } from 'react';

import { StackNavigator,NavigationActions} from 'react-navigation';

import ExampleHomePage from './ExampleHomePage';
import ExampleNavigationManager from './ExampleNavigationManager';
import navigationOptionInfo from './NavigationOptionsInfo';
import ExampleTechnicalColumnPage from "./ExampleTechnicalColumnPage";
import ExampleLatestNewsPage from "./ExampleLatestNewsPage";
import ExampleWebDetailPage from './ExampleWebDetailPage';
import ExampleLoadingView from './Home/ExampleLoadingView';
import ExampleAboutUSPage from './ExampleAboutUSPage'
import ExamplePicturePage from './ExamplePicturePage'
import ExampleVideoPage from './ExampleAboutUSPage'

const Nav = StackNavigator(
    {
        Home:{
            screen:ExampleHomePage,
            // path: 'people/:name',
            // navigationOptions:({
            //     headerTitle:'我是都躲着的标题'
            // })
        },
        TechnicalColumnPage:{
            screen:ExampleTechnicalColumnPage,
        },
        ExampleLatestNewsPage: {
            screen:ExampleLatestNewsPage,
        },
        DetailWebPage:{
            screen:ExampleWebDetailPage,
        },
        ExampleLoadingView:{
            screen:ExampleLoadingView,
        },
        ExampleVideoPage:{
            screen:ExampleVideoPage,
        },
        ExamplePicturePage:{
            screen:ExamplePicturePage,
        },
        ExampleAboutUSPage:{
            screen:ExampleAboutUSPage,
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

