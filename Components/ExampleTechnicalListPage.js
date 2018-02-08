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
    ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';

import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'

var Dimensions  = require('Dimensions')
var {width}     = Dimensions.get('window');
var {height}    = Dimensions.get('window');

var pageIndex = 1;//当前第几页

export default class ExampleTechnicalListPage extends Component {
    
    propTypes:{
        
        // 1 第一页面 2 第二页面
        pageType:PropTypes.number,
        navigation:PropTypes.object.isRequired,
    }
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            
            dataItem:[],
            titleStr:'默认第一页',
            totalPage:0,
    
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            showFoot:0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据
        }
    }
    
    render() {
        return (
            
            <View style={styles.container}>
                <FlatList
    
                keyExtractor={this._extraUniqueKey}
                
                data={
                        this.state.dataItem
                    }
                    renderItem={this._renderCellItem}
        
                    getItemLayout={(data,index)=>(
                        
                        {length: 100, offset: (100+2) * index, index}
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{height:0.8, backgroundColor:'#C5C5C5'}}></View>}

                    ListFooterComponent={this._renderFooter.bind(this)}
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={0}
                />
            </View>
        );
    }
    
    _extraUniqueKey(item ,index) {
        
        return "index"+index+item;
    }
    
    _renderCellItem = ({item,index})=>{
        
        const {avatar} = item.user;
        
        return (
            <TouchableOpacity onPress={()=>this._showDetail(item)}
            >
            <View style={styles.subSontainerStyle} key={index}>
                
                    <View style={styles.titleViewStyle}>
                        <Text style={styles.titleTextStyle}>
                            {item.title}
                        </Text>
                        <Text style={styles.subTextStyle}>发布于{item.ctime_str}  阅读{item.read_count}</Text>
                    </View>
                    
                    <View style={styles.avatarViewStyle}>
                        
                        <Image style={styles.avatarStyle}
                               source={{uri:avatar}}
                        />
                        <Text style={styles.nickNameStyle}>{item.user.nickname}</Text>
                    </View>
            </View>
            </TouchableOpacity>
        );
    }
    
    _showDetail(item){
        
        const {id} = item;
        let url = 'http://www.rntools.co/article/'+id+'?p=app';
        console.log(url);
        this.props.navigation.navigate('DetailWebPage',{'title':item.title, 'url':item.url, method:'POST'});
    };
    
    _renderFooter() {
    
        if (this.state.showFoot === 1) {
            return (
                <View style={{height:30,alignItems:'center',justifyContent:'flex-start',}}>
                    <Text style={{color:'#999999',fontSize:14,marginTop:5,marginBottom:5,textAlign:'center'}}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if(this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator />
                    <Text style={{color:'#999999',fontSize:14,marginTop:5,marginBottom:5,textAlign:'center'}}>正在加载更多数据...</Text>
                </View>
            );
        } else if(this.state.showFoot === 0){
            return (
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            );
        }
    }
    
    _onEndReached() {
    
        //如果是正在加载中或没有更多数据了，则返回
        if(this.state.showFoot != 0 ){
            return ;
        }
        //如果当前页大于或等于总页数，那就是到最后一页了
        if((pageIndex!=1) && (pageIndex>=this.state.totalPage)){
            return;
        } else {
            pageIndex++;
        }
        //底部显示正在加载更多数据
        this.setState({showFoot:2});
        
        console.log(pageIndex);
        
        //获取数据
        this.fetchData( pageIndex );
    }
    
    fetchData(pageIndex) {
    
        const { pageType } = this.props;
    
        if (pageType == 2) {
        
            request.post(config.api.reactBase+'?type=hot', {"format": "json",
                "page": String(pageIndex)})
            
                .then((data)=>{
                    
                    let foot = 0;
                    if(pageIndex>=toString(data.data.pages)){
                        foot = 1;//listView底部显示没有更多数据了
                    }
                    
                    let tempArray = [];
                    if(pageIndex != 1){
                        tempArray = this.state.dataItem;
                        tempArray.push.apply(tempArray, data.data.articles);
                    }else  {
                        tempArray = data.data.articles;
                    }
                    
                    this.setState({
                    
                        dataItem:tempArray,
                        totalPage:data.data.pages,
                        isLoading: false,
                        showFoot:foot,
                        isRefreshing:false,
                    });
                
                }).catch(
            
                (error)=>{
                    alert(error);
                }
            )
        }else {
        
            request.post(config.api.reactBase+'?type=new', {"format": "json",
                "page": String(pageIndex)})
            
                .then((data)=>{
    
                    let foot = 0;
                    if(pageIndex>=toString(data.data.pages)){
                        foot = 1;//listView底部显示没有更多数据了
                    }
    
                    let tempArray = [];
                    if(pageIndex != 1){
                        tempArray = this.state.dataItem;
                        tempArray.push.apply(tempArray, data.data.articles);
                    }else  {
                        tempArray = data.data.articles;
                    }
                    
                    console.log(tempArray.length);
                    
                    this.setState({
        
                        dataItem:tempArray,
                        totalPage:data.data.pages,
                        isLoading: false,
                        showFoot:foot,
                        isRefreshing:false,
                    });
                
                }).catch(
            
                (error)=>{
                    alert(error);
                }
            )
        }
    }
    
    componentDidMount() {
        
        {this.fetchData(pageIndex)}
    }
    
}

const styles = StyleSheet.create({
    
    container: {
        
        flex:1,
        backgroundColor:'#FFF2E8',
        padding:5,
        width:width,
    },
    
    subSontainerStyle:{
        
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    
    titleViewStyle:{
        width:width-80,
    },
    
    avatarViewStyle:{
        width:80,
        justifyContent:'center',
        alignItems:'center',
    },
    
    titleTextStyle:{
        marginTop:15,
        marginBottom:10,
        color:'#69D3D4',
        fontSize:18,
    },
    
    subTextStyle:{
        
        marginBottom:15,
        fontSize:12,
        color:'#3D444C',
    },
    
    nickNameStyle:{
        
        fontSize:12,
        color:'#3D444C',
        width:80,
        textAlign:'center',
        marginTop:5,
    },
    
    avatarStyle:{
        width:40,
        height:40,
        borderRadius:20,
        //margin:5,
        //justifyContent:'center',
    }
});

// ctime
//     :
//     "2018-01-22T07:09:09.558Z"
// ctime_str
//     :
//     "2018-01-22 15:09"
// html
//     :
//     ""
// id
//     :
//     "5a658e15819b0f455b2fc715"
// read_count
//     :
//     134
// thumb
//     :
//     ""
// title
//     :
//     "仿腾讯课堂固定滚动列表ReactNative组件"
// type
//     :
//     "link"
// user
//     :
// {_id: "57beb75ec144b61128162004", avatar: "http://tva2.sinaimg.cn/crop.0.0.1022.1022.180/006yDYm6jw1f72w1khwyzj30sg0sgq51.jpg", nickname: "RN小助手"}
// _id
//     :
//     "5a658e15819b0f455b2fc715"
