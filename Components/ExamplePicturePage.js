/**
 * Created by Yochi on 2017/12/24.
 */

import React,{ Component } from 'react';
import {
    
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
    Alert,
    Button,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';

import navigationOptionInfo from './NavigationOptionsInfo'

import Lightbox from 'react-native-lightbox';

import Modal from 'react-native-modalbox';

import { StackNavigator} from 'react-navigation';

import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'
import ExamplePhotoBrowserScene from "./ExamplePhotoBrowserScene";

let AutoResponsive = require('autoresponsive-react-native');

var Dimensions  = require('Dimensions')
var {width}     = Dimensions.get('window');
var {height}    = Dimensions.get('window');

export default class ExamplePicturePage extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            picArray:[  'http://imgsrc.baidu.com/imgad/pic/item/cb8065380cd79123499f23a0a7345982b3b780e3.jpg',
                        'http://img1.3lian.com/2015/w22/51/d/105.jpg',
                        'http://img15.3lian.com/2016/h1/140/64.jpg',
                        'http://image16-c.poco.cn/mypoco/qing/20140621/16/4518368438513942784_1024x768_320.jpg',
                        'http://mvimg1.meitudata.com/551f2718c5cbf4963.jpg',
                        'http://img5.duitang.com/uploads/item/201411/30/20141130235726_8wPKU.jpeg',
                        'http://img2.100bt.com/upload/ttq/20131208/1386496341645_middle.jpg',
                        'http://i3.download.fd.pchome.net/t_960x600/g1/M00/11/0D/ooYBAFX6D2yIad-LAACwJX4RBUMAACsQgBH2eAAALA9242.jpg',
                        'http://images.ali213.net/picfile/pic/2014/12/10/927_2014121034411595.jpg',
                        'http://a3.topitme.com/9/12/1d/11173217399f41d129l.jpg'],
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
            currentIndex:0,
        }
    }
    
    static navigationOptions = props => navigationOptionInfo.commomHeader(props);
    
    render() {
        return (
            <View style={styles.container}>
                
                <ScrollView style={styles.container}
                            showsVerticalScrollIndicator={false}
                            scrollsToTop={true}
                >
                    <View style={styles.title}>
                        <Text onPress={this.onPressTitle} style={styles.titleText}>戳我全屏浏览</Text>
                    </View>
                    <AutoResponsive {...this.getAutoResponsiveProps()}>
                        {this.renderChildren()}
                    </AutoResponsive>
                </ScrollView>
                
                <Modal
                    style={[styles.modal]}
                    ref={"modal1"}
                    swipeToClose={this.state.swipeToClose}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}
                >
                    <TouchableHighlight onPress={()=>this.refs.modal1.close()}
                    >
                        <Image  source={{uri:this.state.picArray[this.state.currentIndex]}}
                                style={{resizeMode:'contain',width:width, height:height}}
                        />
                    </TouchableHighlight>
                </Modal>
            </View>
        );
    }
    
    getChildrenStyle() {
        return {
            width: (width - 20) / 2,
            height: parseInt(Math.random() * 20 + 12) * 10,
            backgroundColor: 'white',
            padding:5,
            borderRadius: 3,
        };
    }
    
    getAutoResponsiveProps() {
        return {
            itemMargin: 10,
        };
    }
    
    renderChildren() {
        return this.state.picArray.map((i, key) => {
            return (
                
                    <View style={this.getChildrenStyle()} key={key}>
                    
                        <Image  source={{uri:this.state.picArray[key]}}
                                style={styles.imgeStyle }
                        />
                        
                        {/*这不是个好控件 添加点击事件很难受*/}
                        <Text  style={{backgroundColor:'transparent', flex:1, position:'absolute', width:'100%',height:'100%'}}
                               onPress={() => this._clickPicture(key)} ></Text>
                    </View>
            );
        }, this);
    }
    
    _clickPicture=(index) => {
    
        this.setState({
    
            currentIndex:index,
        });
        this.refs.modal1.open()
    }
    
    onPressTitle = () => {
    
        let media = [
            {photo: 'http://fd.topitme.com/d/2b/0a/11236544043130a2bdo.jpg',},
            {photo: 'http://cdn.duitang.com/uploads/item/201602/14/20160214143920_ihZAQ.jpeg',},
            {photo: 'http://img5.duitang.com/uploads/item/201508/28/20150828223722_WeZ4z.jpeg',},
            {photo: 'http://img4.duitang.com/uploads/item/201501/24/20150124161745_NJmh4.thumb.700_0.jpeg',},
            {photo: 'http://img4.duitang.com/uploads/item/201410/25/20141025211701_i45C2.jpeg',},
            {photo: 'http://cdn.duitang.com/uploads/item/201603/11/20160311185930_rFRMN.thumb.700_0.jpeg',},
            {photo: 'http://img5.duitang.com/uploads/blog/201404/08/20140408055028_ar5Wc.thumb.700_0.jpeg',},
            {photo: 'http://img.zcool.cn/community/01a48856b5d21d32f875520fcfde2f.jpg@1280w_1l_2o_100sh.png',},
            {photo: 'http://img4.duitang.com/uploads/item/201504/18/20150418H3050_efFNW.jpeg',},
            {photo: 'http://img.zcool.cn/community/01fe5257a1997d0000018c1bf192ee.jpg@2o.jpg',},
            {photo: 'http://img5.duitang.com/uploads/item/201409/13/20140913141633_QyVPw.jpeg',},
            {photo: 'http://img.zcool.cn/community/01a98b554425e20000019ae9971fdd.jpg@1280w_1l_2o_100sh.jpg',},
            {photo: 'http://f9.topitme.com/9/b0/47/1157394357dc347b09o.jpg',},
            {photo: 'http://img.zcool.cn/community/0137c856d2bde932f875520ffa3880.jpg@2o.jpg',}];
        
        this.props.navigation.navigate('ExamplePhotoBrowserScene',{media:media, index:0});
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
        padding:5,
        //justifyContent:'center',
        //alignItems:'center'
    },
    title: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    titleText: {
        color: '#d0bbab',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        color: 'rgb(58, 45, 91)',
    },
    imgeStyle:{
        flex:1,
        // enum('cover', 'contain', 'stretch', 'repeat', 'center')
        resizeMode:'cover',
    },
    
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
    },
});
