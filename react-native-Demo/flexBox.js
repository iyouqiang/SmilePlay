/**
 * Created by chmtech003 on 2017/11/6.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//FlexBox指南：http://www.w3cplus.com/css3/a-guide-to-flexbox-new.html

// noinspection JSAnnotator
export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.MyStyle}>
                {/*<Text style={styles.welcome}>*/}
                {/*Yochi_Image*/}
                {/*</Text>*/}
                {/*<Text style={styles.instructions}>*/}
                {/*To get started, edit App.js*/}
                {/*</Text>*/}
                {/*<Text style={styles.instructions}>*/}
                {/*{instructions}*/}
                {/*</Text>*/}
                
                <View style={styles.oneViewStyle}>
                    <Text>
                       flexbox我是第一个View
                    </Text>
                </View>
                <View style={styles.twoViewStyle}>
                    <Text>
                        我是老二
                    </Text>
                </View>
                
                <View>
                    <Text style={styles.thirdViewStyle}>
                        我是老三
                    </Text>
                </View>
                <View>
                    <Text style={styles.fourthViewStyle}>
                        我是老四
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#F5FCFF',
    // },
    // welcome: {
    //   fontSize: 20,
    //   textAlign: 'center',
    //   margin: 10,
    // },
    //
    // instructions: {
    //   textAlign: 'center',
    //   color: '#333333',
    //   marginBottom: 5,
    // },
    //
    MyStyle:{
        flex:1,
        backgroundColor:'red',
        flexDirection:'row', //主轴方向
        justifyContent:'space-around',// 主轴方向的对齐方式
        alignItems:'flex-end',// 次轴方向的对齐方式
        
    },
    oneViewStyle:{
        //flex:10,
        backgroundColor:'blue',
        width:100,
        height:100,
    },
    twoViewStyle:{
        flex:10,
        backgroundColor:'green',
        width:100,
        height:100,
    },
    thirdViewStyle:{
        //flex:10,
        backgroundColor:'#BBEDF7',
        width:100,
        height:100,
    },
    fourthViewStyle:{
        //flex:10,
        backgroundColor:'#258AF9',
        width:100,
        height:100,
    }
});
