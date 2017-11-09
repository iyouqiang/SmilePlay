import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    加载项目中的图片
                </Text>
                <Image source={require('./img/5.jpg')} style={styles.imgeStyle}></Image>
                <Text>
                    加载APP中的图片
                </Text>
                <Image source={{uri:'icon'}} style={styles.imgeStyle}></Image>
                <Text>
                    加载网络上的图片
                </Text>
                <Image source={{uri:'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'}} style={styles.imgeStyle}></Image>
        
                <ImageBackground source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490198964612&di=4437ef95ce00e4b4c5628eb4496c0099&imgtype=0&src=http%3A%2F%2Fv1.qzone.cc%2Favatar%2F201408%2F03%2F23%2F44%2F53de58e5da74c247.jpg%2521200x200.jpg'}} style={styles.imge1Stye}>
                    <Text style={styles.textStyle}>
                        设置图片为背景
                    </Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imgeStyle:{
        width:80,
        height:80,
        //      resizeMode:'cover',
        resizeMode:'stretch',
    },
    imge1Stye:{
        width:300,
        height:200,
        
    },
    textStyle:{
        paddingTop:80,
        // backgroundColor:'rgba(0,0,0,0)',
        backgroundColor:'transparent',
    }
});
