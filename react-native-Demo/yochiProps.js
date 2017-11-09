/**
 * Created by chmtech003 on 2017/11/6.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/**
    if(Platform.OS==='android'){
        //如果是android平台
    }else{
    
    }
 * */

var Dimensions = require('Dimensions');
let screenwidth  = Dimensions.get('window').width;
let screenheight = Dimensions.get('window').height;
export default class App extends Component<{}> {
    render() {
        let pic = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510032153026&di=76ab30a83d21b5fe34e6f5ce3712948e&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F9%2F55c86ca552ca4.jpg'
        };
        
        return (
                <View style={styles.container}>
                    <ImageBackground source={pic} style={styles.bgImage}>
                        <View>
                            <Greeting name="显示吧，分辨率"/>
                            <Text style={styles.welcome}>当前屏幕的宽度：{Dimensions.get('window').width}</Text>
                            <Text style={styles.welcome}>当前屏幕的高度：{Dimensions.get('window').height}</Text>
                            <Text style={styles.welcome}>当前屏幕的分辨率：{Dimensions.get('window').scale}</Text>
                        </View>
                    </ImageBackground>
                </View>
        );
    }
}

class Greeting extends Component {
    render(){
        
        return (
          
            <Text style={styles.welcome}>
                Hello {this.props.name}!
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'white',
    },
    
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    
    bgImage:{
        alignItems:'center',
        justifyContent:'center',
        width:screenwidth,
        height:screenheight,
        backgroundColor:'rgba(0,0,0,0)',
    }
    
});