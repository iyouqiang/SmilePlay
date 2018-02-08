
import React,{ Component } from 'react';
import {
    SectionList,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Ionicons from "react-native-vector-icons/Ionicons";
import ExampleNavigationManager from './ExampleNavigationManager';
import Spinkit from 'react-native-spinkit'
import Toast from 'react-native-root-toast';
import ExampleLatestNewsPage from './ExampleLatestNewsPage';
import ExampleCommon from './ExampleCommonHeader'

var Dimensions = require('Dimensions');
var {width}    = Dimensions.get('window');
var {height}   = Dimensions.get('window');
var CELLHEIGHT = 100;

export default class ExampleHomePage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            homeinfo:{},
            sections: [],
            mainHeaderInfo:[],
            refreshing :false,
            showLoading:true,
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                {this._renderSectionlistView()}
                
                <View style={styles.loadingcontainer}>
                    <Spinkit style={styles.spinner}
                             index={0}
                             size={50}
                            // types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
                             type={'ThreeBounce'}
                             color="#3D444C"
                             isVisible={this.state.showLoading}
                    />
                </View>
            </View>
        );
    }

    componentDidMount() {
        ExampleNavigationManager.navNavigation = this.props.navigation;
        {this._requestHomeinfo()}
    }
    
    _requestHotArticleInfo() {
        // 获取热门文章列表
        ExampleCommon.request.get(ExampleCommon.config.api.qidianBase,
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
    
    _requestHomeinfo() {
        // 获取首页信息 http://www.qidianlife.com/Singular/index.php?
        // a=articleIndex
        // &c=Index
        // &m=App
        // &page=1
        // &pagesize=6
        // &uid=%28null%29
        ExampleCommon.request.get(ExampleCommon.config.api.qidianBase, {
            uid:'(null)',
            m:'App',
            c:'Index',
            a:'articleIndex',
            page:'1',
            pagesize:'6',
        }).then((data)=>{
        
            let tempData = [];
            tempData.push({key:'最新资讯', data:data.misarticle})
            tempData.push({key:'热门推荐', data:data.hotarticle})
            
            this.setState({
                homeinfo:data,
                mainHeaderInfo:data.banner,
                sections:tempData,
                refreshing:false,
                showLoading:false,
            })
        })
            .catch((error)=>{
                console.log('错误信息：'+error);
                this.setState({
                    refreshing: false,
                    showLoading: false,
                })
            })
    }
    
    _renderSectionlistView() {
        return (<SectionList style={styles.sectionListStyle}

                             sections={this.state.sections}

                             //stickySectionHeadersEnabled={false}
                             
                             keyExtractor = {this._extraUniqueKey}

                             refreshing={this.state.refreshing}

                             enableEmptySections={
                                 <View>
                                     <Text>暂无数据</Text>
                                 </View>
                             }
                             
                             onRefresh = {

                                 () => {
                                     this.setState({
                                         refreshing : true,
                                     });
                                     {this._requestHomeinfo()}
                                 }
                             }
                             onEndReachedThreshold={0.1}
                             onEndReached={(info) => {
                                 this.setState({
                                     refreshing : true,
                                 }),
                                     this.setState({
                                         refreshing : false,
                                     })
                                 console.log('我是刷新'+ info);
                             } }

                             showsVerticalScrollIndicator={false}

                             getItemLayout = {
                                 (data, index) => (
                                     {length: CELLHEIGHT, offset: (CELLHEIGHT+2) * index, index}
                                 )
                             }
                             
                             ItemSeparatorComponent={() => <View style={{height:1, backgroundColor:'#FFF2E9'}}></View>}

                             ListHeaderComponent={this._renderSectionlistViewHeader()}
                             
                             renderItem={

                                 this._renderSectionItemCell
                             }
                             renderSectionHeader={this._renderSectionItemHeader}
                             
                             //ListFooterComponent={() => }
        />);
    }
    
    _extraUniqueKey(item ,index) {
        
        return "index"+index+item;
    }
    
    _renderSectionItemHeader = ({section}) => (
        
        <View>
            {/*<View style={{backgroundColor:'#FFF2E9',  height:10, width:width}}></View>*/}
            <View style={{top:0,left:0,backgroundColor:'white',  height:40, width:width,flexDirection:'row', alignItems:'center'}}>
                <View style={{backgroundColor:'#7FDEF9', width:1.5,height:20, marginLeft:10}}></View>
                <Text style={{fontFamily:'Helvetica', fontWeight:'bold',fontSize:15, marginLeft:10}}>{section.key}</Text>
                <TouchableOpacity onPress={
    
                    ()=>this._clickMoreInfo(section)
                     //this._clickMoreInfo
                }
                >
                    {/*<Text style={{fontFamily:'Helvetica',fontSize:12, width:50,color:'black', marginLeft:'69%'}}>更多 >></Text>*/}
                    {/*<ion-icon name="more"></ion-icon>*/}
                    <Ionicons name={ "ios-more-outline" } size={30} style={{marginLeft:'79 %'}} />
                </TouchableOpacity>
            </View>
        </View>
    );
    
    _clickMoreInfo(section) {
        
        if (section.key == '最新资讯') {
    
            this.props.navigation.navigate('ExampleLatestNewsPage',{'title':'猿猿热点'});
        }else  {
    
            Toast.show('更多信息稍后更新', {
                duration: Toast.durations.SHORT, // Toast.durations.LONG : Toast.durations.SHORT,
                position:Toast.positions.CENTER, //TOP CENTER
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                onShow: () => {
                    // calls on toast\`s appear animation start
                },
                onShown: () => {
            
                    // calls on toast\`s appear animation end.
                },
                onHide: () => {
                    // calls on toast\`s hide animation start.
                },
                onHidden: () => {
                    // calls on toast\`s hide animation end.
                }
            });
        }
    }
    
    _renderSectionlistViewHeader() {
        
        return (
            
            <View style={styles.sectionListHeaderStyle}>
                
                <Swiper  horizontal={true}
                         autoplay = {true}
                         autoplayTimeout={3}
                         loop={true}
                         //scrollEnabled={false}
                         //onTouchStart={()=>{this._showDetailView('1')}}
                         //index={1}
                         paginationStyle={{bottom:5}}
                         dot={<View style={{backgroundColor:'black', opacity:0.3, width:5, height:5, borderRadius:2.5, margin:5}}></View>}
                         activeDot={<View style={{backgroundColor:'white', width:10, height:5,borderRadius:2.5}}></View>}
                >
                        {this._loadHeaderImg()}
                </Swiper>
                <View style={{backgroundColor:'#FFF2E9',  height:10, width:width}}></View>
            </View>
        )
    }
    
    _loadHeaderImg(){
        
        var banners = [];
        for (var i = 0;i < this.state.mainHeaderInfo.length;i++) {
        
            var dataItem = this.state.mainHeaderInfo[i];
            banners.push(
    
                <Image  key = {i} source={{uri:dataItem.pic}} style={{flex:1}}/>
            )
        }
        
        return banners;
    }
    
    _renderSectionItemCell = ({item, index, section}) => {

        if (section.key == '最新资讯') {

            return (

                <View style={{backgroundColor:'white', height:CELLHEIGHT + 60, width:width}}>
                    <TouchableOpacity activeOpacity={1.0} onPress={()=>{
    
                        // const setParamsAction = NavigationActions.setParams({
                        //     params: {'title':item.title, 'url':item.url},
                        //     key: 'DetailWebPage',
                        // });
                        // this.props.navigation.dispatch(setParamsAction)
                        
                        this.props.navigation.navigate('DetailWebPage',{'title':item.title, 'url':item.url});
                    }}>
                    <View>
                        <Image source={{uri:item.pic}} style={{height: CELLHEIGHT + 10, width:width-20, marginTop:10,marginLeft:10,backgroundColor:'gray'}}/>
                        <View style={{position:'absolute'}}>
                            <View style={{left:10,top:CELLHEIGHT,backgroundColor:'black', opacity:0.4, height:20, width:width-20}}></View>
                            <View style={{position:'absolute',left:10,top:CELLHEIGHT,flexDirection:'row', justifyContent:'center'}}>
                                <Ionicons name={ "ios-eye-outline" }  size={20} color='white' style={{left:10,backgroundColor:'transparent'}}/>
                                <Text style={{ fontSize:12, left:15, top:2, backgroundColor:'transparent', color:'white',textAlignVertical:'center'}}>
                                    {item.view}
                                    {/*{section.key}*/}
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/*<View style={{position:'relative', height:80, width:width-160, flexDirection:'column'}}>*/}
                        {/*<Text style={{fontSize:14, marginLeft:10, marginTop:10, marginRight:10}}>{item.title}</Text>*/}
                        {/*<View style={{flexDirection:'row',alignItems:'center', marginLeft:10, marginTop:10, marginRight:10, height:30}}>*/}
                            {/*/!*<Image />*!/*/}
                            {/*<Ionicons name={ "ios-eye-outline" }  size={20}/>*/}
                            {/*<Text style={{ fontSize:12, marginLeft:5}}>*/}
                                {/*/!*{item.view}*!/*/}
                                {/*{section.key}*/}
                            {/*</Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                    <Text style={{fontSize:14, marginLeft:10, marginTop:10, marginRight:10}}>{item.title}</Text>
                    </TouchableOpacity>
                </View>
            )
        }else  {

            return (
    
                <TouchableOpacity activeOpacity={1.0} onPress={()=>{
        
                    // const setParamsAction = NavigationActions.setParams({
                    //     params: {'title':item.title, 'url':item.url},
                    //     key: 'DetailWebPage',
                    // });
                    // this.props.navigation.dispatch(setParamsAction)
        
                    this.props.navigation.navigate('DetailWebPage',{'title':item.title, 'url':item.url});
                }}>
                <View style={{flexDirection:'row', backgroundColor:'white', height:CELLHEIGHT, width:width, alignItems:'center'}}>
                    <Image source={{uri:item.pic}} style={{height: 80, width:150, marginLeft:10,backgroundColor:'gray'}}/>
                    <View style={{position:'relative', height:80, width:width-160, flexDirection:'column'}}>
                        <Text style={{fontSize:14, marginLeft:10, marginTop:10, marginRight:10}}>{item.title}</Text>
                        <View style={{flexDirection:'row',alignItems:'center', marginLeft:10, marginTop:10, marginRight:10, height:30}}>
                            {/*<Image />*/}
                            <Ionicons name={ "ios-eye-outline" }  size={18}/>
                            <Text style={{ fontSize:12, marginLeft:5}}>
                                {item.view}
                                {/*{section.key}*/}
                            </Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
            )
        }
    };
    
    _showDetailView(index) {
        // this.props.navigation.navigate('DetailWebPage');
        alert(index);
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    },
    
    sectionListStyle:{
      
        width:width,
        height:height,
        margin:0,
    },
    
    sectionListHeaderStyle: {
        
        width:width,
        height:180,
        backgroundColor:'transparent',
    },
    
    sectionListHeaderImgIconStyle:{
    
        flex:1,
    },
    
    sectionOneCellStyle:{
    
    },
    sectionTwoCellStyle:{
    
    },
    loadingcontainer: {
        position:'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    spinner: {
        marginBottom: 50
    },
});
