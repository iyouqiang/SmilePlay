/**
 * Created by Yochi on 2017/12/24.
 */

import React,{ Component } from 'react';
import {
    
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    
} from 'react-native';

import navigationOptionInfo from './NavigationOptionsInfo'

import Video from 'react-native-video';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class ExampleVideoPlayer extends Component {
    
    static navigationOptions = props => navigationOptionInfo.commomHeader(props);
    
    render() {
        return (
            <View style={styles.container}>
                <Video
                    
                    ref={(ref: Video) => {
                        this.video = ref
                    }}
                    source={{uri: this.props.navigation.state.params.videoURL}} // 视频的URL地址，或者本地地址，都可以.
                    rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                    volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                    muted={false}                // true代表静音，默认为false.
                    paused={false}               // true代表暂停，默认为false
                    resizeMode="cover"           // 视频的自适应伸缩铺放行为，
                    repeat={true}                // 是否重复播放
                    playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
                    playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                    onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                    onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
                    onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                    onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
                    onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
                    style={styles.backgroundVideo}/>
            </View>
        );
    }
    
    loadStart() {
    
    }
    
    setDuration() {
    
    }
    
    setTime() {
    
    }
    
    onEnd() {
    
    }
    
    videoError() {
    
    }
}
    

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    },

    
    backgroundVideo: {
        position: 'absolute',
        backgroundColor:'white',
        width:width,
        height:height,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
