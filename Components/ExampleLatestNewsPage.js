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
    SectionList,
} from 'react-native';

import navigationOptionInfo from './NavigationOptionsInfo'
import ExampleCommon from './ExampleCommonHeader'
import ExampleLatestNewsHeader from './ExampleHotNews/ExampleLatestNewsHeader'
import {ENTRIES1} from "./ExampleHotNews/ExampleJSONData";
import Ionicons from "react-native-vector-icons/Ionicons";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var CELLHEIGHT = 150;

export default class ExampleLatestNewsPage extends Component {
    
    static navigationOptions = props => navigationOptionInfo.commomHeader(props);
    
    constructor(props) {
        super(props);
        
        this.state = {
            
            MisArticle:{},
            hotarticle:[],
            article:[]
        };
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                
                <SectionList  style={styles.sectionStyle}
                
                              keyExtractor={this._extraUniqueKey}
                
                              sections={this.state.article}
                
                              stickySectionHeadersEnabled={false}
                
                              showsVerticalScrollIndicator={false}
                
                              getItemLayout = {
                    
                                  (data, index) => (
                        
                                      {length: CELLHEIGHT, offset:(CELLHEIGHT+2)*index, index}
                                  )
                              }
                
                              ItemSeparatorComponent={() => <View style={{height:10, backgroundColor:'transparent'}}></View>}
                
                              ListHeaderComponent={()=>{
                    
                                  return (
                                      <View>
                                          <ExampleLatestNewsHeader itemdata={ this.state.hotarticle } />
                                      </View>
                                  )
                              }}
                
                              renderItem= { this._renderCellItem }
                              renderSectionHeader = { this._renderSectionHeader }
                />
            
            </View>
        );
    }
    
    componentDidMount() {
        
        // 请求热门文章列表
        {this._requestHotNewsData()}
        
    }
    
    _requestHotNewsData(){
        
        //  http://www.qidianlife.com/Singular/index.php?m=App&c=MisArticle&a=getMisChoiceList&uid=(null)&page=1&pagesize=10
        ExampleCommon.request.get(ExampleCommon.config.api.qidianBase, {
            
            uid:'(null)',
            m:'App',
            c:'MisArticle',
            a:'getMisChoiceList',
            page:'1',
            pagesize:'10',
            
        }).then((data)=>{
            
            let tempData = [];
            tempData.push({key:'最新资讯', data:data.article})
            
            this.setState({
                MisArticle:data,
                hotarticle:data.hotarticle,
                article:tempData,
            })
        }).catch((error)=>{
            alert(error);
        })
    }
    
    _renderSectionHeader = ({section}) => (
        
        <View style={{top:0,left:0,backgroundColor:'white',  height:40, width:width,flexDirection:'row', alignItems:'center'}}>
            
            <View style={{backgroundColor:'#7FDEF9', width:1.5,height:20, marginLeft:10}}></View>
            
            <Text style={{fontFamily:'Helvetica', fontWeight:'bold',fontSize:15, marginLeft:10}}>{section.key}</Text>
        
        </View>
    );
    
    _renderCellItem = ({item, index, section}) => {
        
        return (
            
            <View style={{backgroundColor:'white', height:CELLHEIGHT, width:width}}>
                <TouchableOpacity activeOpacity={1.0} onPress={()=>{
                    
                    this.props.navigation.navigate('DetailWebPage',{'title':item.title, 'url':item.url});
                }}>
                    <View>
                        <Image source={{uri:item.pic}} style={{height: CELLHEIGHT, width:width-20,marginLeft:10 ,backgroundColor:'gray'}}/>
                        <View style={{position:'absolute'}}>
                            
                            <View style={{left:10,top:0,height: CELLHEIGHT , width:width-20,backgroundColor:'black', opacity:0.4}}></View>
                            
                            <View style={{position:'absolute',left:10 , justifyContent:'center'}}>
                                
                                <Text style={styles.mainTextStyle}>{item.title}</Text>
                                <View style={{position:'absolute', top:90, left:10, width:width-40,flexDirection:'row', justifyContent:'center'}}>
                                    
                                    <Text style={{ fontSize:12, top:2, backgroundColor:'transparent', color:'white',textAlignVertical:'center'}}>
                                        # 热点 |
                                    </Text>
                                    
                                    <Ionicons name={ "ios-eye-outline" }  size={20} color='white' style={{ left:5, backgroundColor:'transparent'}}/>
                                    <Text style={{ fontSize:12, top:2,left: 10, backgroundColor:'transparent', color:'white',textAlignVertical:'center'}}>
                                        {item.view}
                                        {/*{section.key}*/}
                                    </Text>
                                </View>
                            
                            </View>
                        
                        </View>
                    </View>
                
                </TouchableOpacity>
            </View>
        )
    };
    
    _extraUniqueKey(item ,index) {
        
        return "index"+index+item;
    }
}

const styles = StyleSheet.create({
    
    mainContainer:{
        flex:1,
        backgroundColor:'#FFF2E9',
        justifyContent:'center',
        alignItems:'center'
    },
    sectionStyle:{
        
        margin:0,
    },
    
    mainTextStyle:{
        color:'white',
        fontSize:14,
        marginLeft:10,
        marginTop:10,
        marginRight:10,
        justifyContent:'center',
        width:width-40,
        top:60,
        backgroundColor:'transparent',
        alignContent:'center',
        textAlign:'center',
    }
})

