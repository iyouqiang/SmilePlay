
import React,{ Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';

import {
    DrawerNavigator
} from 'react-navigation';

import ExampleHomePage from './ExampleHomePage';
import ExampleLeftPage from './ExampleLeftPage';
import scrollViewDemo from './scrollViewDemo';
import loginView from './loginView';
var Dimensions = require('Dimensions');
var {width}    = Dimensions.get('window');

const CustomDrawerContentComponent = (props) => {
    
    return(
        
        <ExampleLeftPage style={styles.container} {...props} />
    )
}

const ExampleDrawer = DrawerNavigator(
    {
        Home:{
            screen:ExampleHomePage,
        },
        Left:{
            screen:ExampleLeftPage,
        },
    
        Login:{
            screen:loginView,
        },
        ScrollView:{
          
            screen:scrollViewDemo,
        }
    },
    {
        drawerWidth:(2.0/3.0)*width,
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

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});