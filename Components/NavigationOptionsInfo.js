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

let navigationOptionInfo={

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
                    ExampleNavigationManager.navNavigation.navigate('DrawerOpen')
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