/**
 * Created by Yochi on 2017/12/24.
 */
'use strict'

import React,{ Component } from 'react';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

import ExampleNavigationManager from './ExampleNavigationManager';
import Ionicons from "react-native-vector-icons/Ionicons";

let navigationOptionInfo = {

}

navigationOptionInfo.commomHeader = (props) => {
    
    const { navigation } = props;
    const { state } = navigation;
    const { params } = state;
    
    return {
        headerTitle: `${params.title}`,
        headerLeft:(
            <TouchableOpacity onPress={()=>{
                
                navigation.goBack();
            }}>
                <View style={{width:60, bottom:0, left:10}}>
                    <Ionicons name={ "ios-arrow-back-outline" }  size={25} color='white' style={{backgroundColor:'transparent'}}/>
                </View>
            
            </TouchableOpacity>
        ),
    };
}

navigationOptionInfo.config = (title) => {

    return ({
        navigationOptions:({
            
            headerTitle:title,
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:'#3D444C',
            },
            headerLeft:(
                <TouchableOpacity onPress={()=>{
                    ExampleNavigationManager.drawerNavigation.navigate('DrawerOpen')
                }}>
                    <View style={{width:40, height:40, justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('./Resources/icon.png')} style={{width:40,height:40,borderRadius:20,}}/>
                    </View>
                </TouchableOpacity>
            ),
        }),

        mode:'card',
        headerMode:'screen',
        /**
         headerMode: 导航栏的显示模式:
         float: 无透明效果, 默认
         screen: 有渐变透明效果, 如微信QQ的一样
         none: 隐藏导航栏
         * */
        cardStyle:({backgroundColor:'blue'}),
        onTransitionStart:((route)=>{
            console.log('开始动画');
        }),
        onTransitionEnd:((route)=>{
            console.log('结束动画');
        }),
    });
}

module.exports = navigationOptionInfo;