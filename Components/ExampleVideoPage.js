/**
 * Created by Yochi on 2017/12/24.
 */

import React,{ Component } from 'react';
import {
    
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native';

import navigationOptionInfo from './NavigationOptionsInfo'

import { StackNavigator} from 'react-navigation';

import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'

import Modal from 'react-native-modalbox';
import Video from 'react-native-video';
import ExampleVideoPlayer from "./ExampleVideoPlayer";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

const colums = 2;
const itemWH = (width-(colums+1)*10)/colums;


export default class ExampleVideoPage extends Component {
    
    static navigationOptions = props => navigationOptionInfo.commomHeader(props);
    
    constructor(props){
        super(props)
    
        this.state = {
            
            swipeToClose: true,
            sliderValue: 0.3,
            currentitemData:'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                {this.renderCollectionView()}
    
                <Modal
                    animationType='fade'            // 淡入淡出
                    transparent={true}
                    style={[styles.modal]}
                    ref={"modal1"}
                    swipeToClose={this.state.swipeToClose}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}
                >
                    <TouchableOpacity
                        activeOpacity={0}
                        onPress={()=>this.refs.modal1.close()}
                    >
    
                        <Video
    
                            ref={(ref: Video) => {
                                this.video = ref
                            }}
                            source={{uri: this.state.currentitemData}} // 视频的URL地址，或者本地地址，都可以.
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
                               style={styles.backgroundVideo} />
                        
                    </TouchableOpacity>
                </Modal>
            </View>
        );
    }
    
    loadStart(){
    
    }
    setDuration(){
    
    }
    
    setTime(){
    
    }
    
    onEnd(){
    
    }
    
    videoError(){
    
    }
    
    renderCollectionView(){
        return(
            <FlatList
                data={
                    [
                        {
                            title: '阳光下的泡沫，是彩色的',
                            img: 'http://a3.topitme.com/9/12/1d/11173217399f41d129l.jpg',
                            vidoe:'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
                        },
                        {
                            title: '就像被骗的我，是幸福的',
                            img: 'http://img5.duitang.com/uploads/item/201409/13/20140913141633_QyVPw.jpeg',
                            vidoe:'https://www.w3schools.com/html/movie.mp4',
                        },
                        {
                            title: '追究什么对错，你的谎言',
                            img: 'http://img.zcool.cn/community/01a98b554425e20000019ae9971fdd.jpg@1280w_1l_2o_100sh.jpg',
                            vidoe:'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
                        },
                        {
                            title: '基于你还爱我',
                            img: 'http://img4.duitang.com/uploads/item/201504/18/20150418H3050_efFNW.jpeg',
                            vidoe:'https://player.vimeo.com/external/188350983.sd.mp4?s=0bdf01fb5f5c66e43ddae76f573cef2a7786de64&profile_id=164',
                        },
                        {
                            title: '阳光下面的泡沫',
                            img: 'http://img.zcool.cn/community/0137c856d2bde932f875520ffa3880.jpg@2o.jpg',
                            vidoe:'https://player.vimeo.com/external/188355959.sd.mp4?s=e5eea0f749282013db81a7e5cd047c57e066e2b9&profile_id=164',
                        },
                        {
                            title: '虽然一刹花火',
                            img: 'http://img.zcool.cn/community/0137c856d2bde932f875520ffa3880.jpg@2o.jpg',
                            vidoe:'https://player.vimeo.com/external/188355959.sd.mp4?s=e5eea0f749282013db81a7e5cd047c57e066e2b9&profile_id=164',
                        },
                    ]
                }

                renderItem={({item})=>this.renderRow(item)}

                //contentContainerStyle={styles.contentViewStyle}

                keyExtractor = {this._extraUniqueKey}

                showsVerticalScrollIndicator={false}
                
                numColumns={colums}
        
                getItemLayout={(data,index)=>(
                    {length: itemWH, offset: (itemWH+2) * index, index}
                )}
            />
        );
    }
    
    _extraUniqueKey(item ,index) {
        
        return "index"+index+item;
    }
    
    renderRow(item){
        return(
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>this.clickAction(item)}
                // onPressIn={()=>this.clickAction('按下')}
                // onPressOut={()=>this.clickAction('抬起')}
                // onLongPress={()=>this.clickAction('长按')}
            >
                <View style={styles.itemStyle}>
                    <Image source={{uri:item.img}} style={styles.itemImageStyle}/>
                    <Text style={styles.itemtitleStyle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
            
        )
    }
    
    clickAction(item){
        
        this.setState({
            currentitemData:item.vidoe,
        })
        
        //this.refs.modal1.open()
    
        this.props.navigation.navigate('ExampleVideoPlayer',{'videoURL':this.state.currentitemData, title:item.title});
    }
    
    componentDidMount() {
        
        request.get(config.api.qidianBase,
            {   m:'App',
                c:'MisArticle',
                a:'getMisChoiceList',
                page:'1',
                pagesize:'10'})
            .then((data)=>{
                
                console.log(data);
            })
            .catch((error)=>{
                
                console.log('错误：'+error);
            })
    }
}
// const latestNewsPage = ({ navigation }) => {
//     return (
{/*<View style={styles.container}>*/}
{/*<TouchableOpacity onPress={()=>{*/}
{/*//点击关闭侧滑*/}
{/*navigation.navigate('DrawerOpen')*/}

{/*}}>*/}
{/*/!*<Text>关闭侧滑栏</Text>*!/*/}
{/*<Text>我是最新资讯</Text>*/}
{/*</TouchableOpacity>*/}
{/*</View>*/}
//     );
// }

// const ExampleLatestNewsPageNav = StackNavigator(
//     {
//         latestNewsPage:{
//             screen:latestNewsPage
//         },
//     },
//     navigationOptionInfo.config('猿猿资讯')
// );

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    },
    contentViewStyle: {
      
        flexDirection:'row',
        //flexWrap:'wrap',
    },
    
    itemStyle: {
        backgroundColor:'black',
        // 对齐方式
        alignItems:'center',
        //justifyContent:'center',
        // 尺寸
        width:itemWH,
        //height:itemWH + 40,
        margin:5,
        marginTop:10,
        overflow: 'hidden',
    },
    
    itemImageStyle: {
        // 尺寸
        width:itemWH,
        height:itemWH,
        // 间距
        marginBottom:5,
    },
    itemtitleStyle: {
        color:'white',
        fontSize:13,
        textAlign:'left',
        //alignContent:'center',
        //justifyContent:'center',
        //alignItems:'center',
        marginBottom:5,
        lineHeight:15,
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
