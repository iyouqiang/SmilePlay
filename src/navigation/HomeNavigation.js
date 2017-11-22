/**
 * Created by guiyongdong on 2017/5/20.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import FirstNavigation from './FirstNavigation';
import SecondNavigation from './SecondNavigation';
import ModelNavigation from './ModelNavigation';

/**
 * http://www.guiyongdong.com/2017/05/20/ReactNative%E5%AF%BC%E8%88%AA%E6%96%B0%E5%AE%A0%E5%84%BFreact-navigation/
 * */

const Nav = StackNavigator(
    {
        First:{
            screen:FirstNavigation,
            page:'home',
            path: 'people/:name',
        },
        Second:{
            screen:SecondNavigation,
            navigationOptions:({navigation}) => ({
                title: "sss"
            })
        },
        Model:{
            screen:ModelNavigation
        }
    },
    {
        initialRouteName:'First',
        initialRouteParams:{
            data:'haha'
        },
        navigationOptions:{
            headerTintColor:'red'
        },
        mode:'card',
        headerMode:'screen',
        cardStyle:({backgroundColor:'blue'}),
        onTransitionStart:((route)=>{
            console.log('开始动画');
        }),
        onTransitionEnd:((route)=>{
            console.log('结束动画');
        }),
    }
);

export default class HomeNavigation extends Component {
    render() {
        return(
            <Nav/>
        );
    }
}
