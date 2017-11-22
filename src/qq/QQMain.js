/**
 * Created by guiyongdong on 2017/5/22.
 */
import React,{Component} from 'react';
import {DrawerNavigator} from 'react-navigation';

import {
    StyleSheet,
    Dimensions
} from 'react-native';


import QQDrawerLeft from './QQDrawerLeft';
import QQDrawerHome  from './QQDrawerHome';

const CustomDrawerContentComponent = (props)=>{
    return(
        <QQDrawerLeft style={styles.container} {...props}>

        </QQDrawerLeft>
    );
};
const Drawer = DrawerNavigator(
    {
        Home:{
            screen:QQDrawerHome,
        }
    },
    {
        drawerWidth:Dimensions.get('window').width-80,
        drawerPosition:'left',
        contentComponent:(CustomDrawerContentComponent)
    }
);

export default class QQMain extends Component {
    render() {
        return(
            <Drawer/>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

