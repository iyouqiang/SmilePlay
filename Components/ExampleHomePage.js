
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
import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'

import ExampleNavigationManager from './ExampleNavigationManager';

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
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                {this._renderSectionlistView()}
            </View>
        );
    }

    componentDidMount() {
        ExampleNavigationManager.navNavigation = this.props.navigation;
        {this._requestHomeinfo()}
    }
    
    _requestHotArticleInfo() {
        // 获取热门文章列表
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
    
    _requestHomeinfo() {
        // 获取首页信息
        request.get(config.api.qidianBase, {
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
                refreshing : false,
            })
        })
            .catch((error)=>{
                console.log('错误信息：'+error);
                this.setState({
                    refreshing : true,
                })
            })
    }
    
    _renderSectionlistView() {
        return (<SectionList style={styles.sectionListStyle}

                             sections={this.state.sections}

                             //stickySectionHeadersEnabled={false}
                             
                             keyExtractor = {this._extraUniqueKey}

                             refreshing={this.state.refreshing}

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
                             
                             renderItem={this._renderSectionItemCell}
                             renderSectionHeader={this._renderSectionItemHeader}
                             
                             //ListFooterComponent={() => }
        />);
    }
    
    _extraUniqueKey(item ,index) {
        
        return "index"+index+item;
    }
    
    _renderSectionItemHeader = ({section}) => (
        
        <View>
            <View style={{backgroundColor:'#FFF2E9',  height:10, width:width}}></View>
            <View style={{top:0,left:0,backgroundColor:'white',  height:40, width:width,flexDirection:'row', alignItems:'center'}}>
                <View style={{backgroundColor:'#7FDEF9', width:2,height:20, marginLeft:10}}></View>
                <Text style={{fontFamily:'Helvetica', fontWeight:'bold',fontSize:15, marginLeft:5}}>{section.key}</Text>
                <TouchableOpacity onPress={this._clickMoreInfo}>
                    <Text style={{fontFamily:'Helvetica',fontSize:12, width:50,color:'black', marginLeft:'70%'}}>更多 ></Text>
                </TouchableOpacity>
            </View>
        </View>
       
    );
    
    _clickMoreInfo(){
        
        console.log('查看更多信息');
        
        alert('wolail');
    }
    
    _renderSectionlistViewHeader() {
        
        return (
            <View style={styles.sectionListHeaderStyle}>
                
                <Swiper  horizontal={true}
                         autoplay = {true}
                         autoplayTimeout={3}
                         loop={true}
                    //index={1}
                         paginationStyle={{bottom:5}}
                         dot={<View style={{backgroundColor:'black', opacity:0.3, width:5, height:5, borderRadius:2.5, margin:5}}></View>}
                         activeDot={<View style={{backgroundColor:'white', width:10, height:5,borderRadius:2.5}}></View>}
                >
                    {this._loadHeaderImg()}
                </Swiper>
        </View>)
    }
    
    _loadHeaderImg(){
        
        var banners = [];
        for (var i = 0;i < this.state.mainHeaderInfo.length;i++) {
        
            var dataItem = this.state.mainHeaderInfo[i];
            banners.push(
                <Image key = {i} source={{uri:dataItem.pic}} style={{flex:1}}
                />
            )
        }
        
        return banners;
    }
    
    _renderSectionItemCell = ({item}) => (
        <View style={{flexDirection:'row', backgroundColor:'white', height:CELLHEIGHT, width:width, alignItems:'center'}}>
            <Image source={{uri:item.pic}} style={{height: 80, width:150, marginLeft:10,backgroundColor:'red'}}/>
            <View style={{position:'relative', height:80, width:width-160, flexDirection:'column'}}>
                <Text style={{fontSize:14, marginLeft:10, marginTop:10, marginRight:10}}>{item.title}</Text>
                <View style={{flexDirection:'row', marginLeft:10, marginTop:10, marginRight:10, height:30}}>
                    <Image />
                    <Text style={{color:'#BFBFBF', fontSize:12}}>
                        {item.view}
                    </Text>
                </View>
            </View>
        </View>);
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
    
    }
});
