/**
 * Created by guiyongdong on 2017/5/20.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';

import DrawerHomePage from './DrawerHomePage';
import DrawerLeftPage from './DrawerLeftPage';

import {DrawerNavigator} from 'react-navigation';

const CustomDrawerContentComponent = (props)=>{
    return(
        <DrawerLeftPage style={styles.container} {...props}>

        </DrawerLeftPage>
    );
};
const Drawer = DrawerNavigator(
    {
        Home:{
            screen:DrawerHomePage,
        }
    },
    {
        drawerWidth:300,
        drawerPosition:'left',
        contentComponent:(CustomDrawerContentComponent)
    }
);

export default class DrawerPage extends Component {
    render() {
        return(
            <Drawer/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});