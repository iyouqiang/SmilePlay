/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import
    React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
import ExampleNavigationManager from '../Components/ExampleNavigationManager'

export default class loginView extends Component {

    render() {
        return (
            <View style={styles.container}>
               {/*头像*/}
                <Image source={require('./../Components/Resources/icon.png')}
                style={styles.iconStyle}
                />
                {/*账号密码*/}
                <TextInput placeholder={'请输入账号'}
                           style={styles.textInputStyle}
                />
                <TextInput placeholder={'请输入密码'}
                           style={styles.textInputStyle}
                           password={true}
                />
                {/*登录*/}
                <TouchableOpacity onPress={()=>{
                    ExampleNavigationManager.drawerNavigation.navigate('DrawerOpen')
                }}>
    
                    <View style={styles.loginBtnStyle}>
                        <Text style={{color:'white'}}>登录</Text>
                    </View>
                    
                </TouchableOpacity>
               
                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                {/*三方登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>其他登录方式</Text>
                    <Image source={require('./img/icon3.png')}
                           style={styles.otherImageStyle}
                    />
                    <Image source={require('./img/icon7.png')}
                           style={styles.otherImageStyle}
                    />
                    <Image source={require('./img/icon8.png')}
                           style={styles.otherImageStyle}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle:{
        width:80,
        height:80,
        marginTop:50,
        borderRadius:40,
        borderWidth:2,
        borderColor:'orange',
        marginBottom:30,
    },
    textInputStyle:{
        backgroundColor:'white',
        width:width,
        height:40,
        marginBottom:1,
        // paddingLeft:15,
        textAlign:'center'
    },
    loginBtnStyle:{
        height:40,
        width:width*0.8,
        backgroundColor:'blue',
        marginTop:30,
        marginBottom:30,
    //    flex 布局
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    settingStyle:{
        flexDirection:'row',
        // backgroundColor:'red',
        width:width*0.8,
        justifyContent:'space-between',
    },
    otherLoginStyle:{
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        left:20
    },
    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:10
    }
});

//输出一个类
module.exports = loginView;
