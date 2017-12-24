
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import {
    DrawerNavigator
} from 'react-navigation';

import ExampleLeftPage from './ExampleLeftPage';
import ExampleNavigationPage from './ExampleNavigationPage';
import ExampleNavigationManager from './ExampleNavigationManager'
import ExampleTechnicalColumnPage from './ExampleTechnicalColumnPage';
import ExampleLatestNewsPage from './ExampleLatestNewsPage'

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
        TechnicalColumnPage:{
            screen:ExampleTechnicalColumnPage,
        },
        ExampleLatestNewsPage: {
            screen:ExampleLatestNewsPage,
        }
    },
    {
        drawerWidth:LEFTWIDTH,
        drawerPosition: 'left',
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

