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
// 引入数据
var Data = require('./Data.json');
var Dimensions = require('Dimensions');
var {width}    = Dimensions.get('window');
var cols = 3;
var boxw = 100;
//间距
var vMargin = (width - cols * boxw) / (cols+1);
var hMargin = 25;

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewStyle}>
                    {this.renderAllBaobao()}
                </View>
            </View>
        );
    }
    renderAllBaobao(){
        // 图片数组
        var images = [];
        for(var i = 0; i< Data.length; i ++) {
            var dataItem = Data[i];
            images.push(
                <View key={i} style={styles.outViewStyle}>
                    <Image source={{uri:dataItem['icon']}} style={styles.imageStyle} />
                    <Text>
                        {dataItem['name']}
                    </Text>
                </View>
            )
        }
        
        return images;
    }
    
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    viewStyle: {
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    outViewStyle: {
        backgroundColor:"#404040",
        alignItems:'center',
        width:boxw,
        height:boxw,
        marginLeft:vMargin,
        marginTop:hMargin,
    },
    imageStyle: {
        width:80,
        height:80,
    }
});
