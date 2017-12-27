
import React,{ Component } from 'react';

import {
    DrawerNavigator
} from 'react-navigation';

import ExampleLeftPage from './ExampleLeftPage';
import ExampleNavigationPage from './ExampleNavigationPage';
// import ExampleNavigationManager from './ExampleNavigationManager'
// import ExampleTechnicalColumnPage from './ExampleTechnicalColumnPage';
// import ExampleLatestNewsPage from './ExampleLatestNewsPage'

var Dimensions = require('Dimensions');
var {width}    = Dimensions.get('window');
let LEFTWIDTH  = (2.0/3.0)*width;

const CustomDrawerContentComponent = (props) => {
    
    return(
        <ExampleLeftPage {...props} />
    )
}

const ExampleDrawer = DrawerNavigator(
    {
        Home:{
            screen:ExampleNavigationPage,
        },
        // TechnicalColumnPage:{
        //     screen:ExampleTechnicalColumnPage,
        // },
        // ExampleLatestNewsPage: {
        //     screen:ExampleLatestNewsPage,
        // }
    },
    {
        //unlocked：不锁定，可以响应打开和关闭操作，默认值;

        //locked-losed：抽屉保持关闭，不能用手势打开

        //locked-open：抽屉保持打开，不能用手势关闭;
    
        NavigationDrawerScreenOptions:{
            gesturesEnabled:false,
            drawerLockMode: 'closed',
        },
        drawerLockMode: 'unlocked' | 'locked-closed' | 'locked-open',
        drawerWidth:LEFTWIDTH,
        drawerPosition: 'left',
        drawerBackgroundColor: 'black',
        useNativeAnimations: true,
        gesturesEnabled:false,
        contentComponent:(CustomDrawerContentComponent),
    }
);

export default class ExampleDrawerPage extends Component {

    render() {
        return (
            
            <ExampleDrawer/>
        );
    }
}

