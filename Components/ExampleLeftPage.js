
import React,{ Component } from 'react';
import {
    
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    ImageBackground,
} from 'react-native';

import ExampleNavigationManager from './ExampleNavigationManager'
import ExampleAboutUSPage from "./ExampleAboutUSPage";

var Dimensions = require('Dimensions');
var {width}    = Dimensions.get('window');
var {height}    = Dimensions.get('window');

let LEFTWIDTH = (2.0/3.0)*width;

export default class ExampleLeftPage extends Component {
    
    static navigationOptions=({
        gesturesEnabled:false,
    })
    
    render() {
        return (
    
            <View style={styles.container}>

                <ImageBackground source={require('./Resources/yuanfale.png') } style={{width:LEFTWIDTH,height:height}}>
                    {this.renderFlatListView()}
                </ImageBackground>
    
                {/*{this.renderFlatListView()}*/}

            </View>
        );
    }
    
    componentDidMount() {
        console.log(this.props.navigation);
    }
    
    // 自定义Demo列表
    renderFlatListView(){
        
        return (<FlatList style={{width:(2.0/3.0)*width}}
            data = {
                [
                    {key:'猿猿热点'},
                    {key:'技术专栏'},
                    {key:'猿猿段子'},
                    {key:'猿猿视频'},
                    {key:'猿猿美图'},
                    {key:'关于我们'}
                ]
            }
            
            showsVerticalScrollIndicator={false}
            renderItem={this._renderItem}
            //ItemSeparatorComponent={this._separator}
            ListHeaderComponent={this._listHeaderView}
            getItemLayout = {
                (data, index) => (
                    {length: 44, offset: (44+2) * index, index}
                )
            }
    />);
    }
    
    _renderItem = ({item,index}) => (
        
        <TouchableOpacity onPress={() => this._onPress(item,index)}>
            
            <View key={index} style={styles.cellViewStyle} >
                <Text  style={styles.cellTitleStyle}>{item.key}</Text>
            </View>
            
            </TouchableOpacity>
            );
    
    _listHeaderView = ()=> {
        return (
            <View style={styles.listheaderViewStyle}>
                <Image source={require('./Resources/icon.png')} style={styles.listHeaderIconStyle}>
                
                </Image>
            </View>
        )
    }
    
    _separator = ()=> {
        return <View style={styles.separatorStyle} ></View>
    }
    
    _onPress(evnet,index){

        var titleStr = evnet.key;
        
        if (titleStr == '猿猿热点'){
    
            ExampleNavigationManager.navNavigation.navigate('ExampleLatestNewsPage', {'title':'猿猿热点'});
        } else if (titleStr == '技术专栏'){
    
            ExampleNavigationManager.navNavigation.navigate('TechnicalColumnPage',{'title':'技术专栏'});
        }else if (titleStr == '猿猿段子'){
            
            ExampleNavigationManager.navNavigation.navigate('ExampleLoadingView',{'title':'猿猿段子'});
        }else if (titleStr == '猿猿视频'){
    
            ExampleNavigationManager.navNavigation.navigate('ExampleVideoPage',{'title':'猿猿视频'});
        }else if (titleStr == '猿猿美图'){
    
            ExampleNavigationManager.navNavigation.navigate('ExamplePicturePage',{'title':'猿猿美图'});
        }else if (titleStr == '关于我们'){
    
            ExampleNavigationManager.navNavigation.navigate('ExampleAboutUSPage',{'title':'关于我们'});
        }
    
        ExampleNavigationManager.drawerNavigation.navigate('DrawerClose');
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'#3D444C',
        alignItems:'center'
    },
    
    listheaderViewStyle: {
    
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:100,
    },
    
    listHeaderIconStyle:{
    
        width:200,
        height:80,
        //marginTop:50,
        borderRadius:40,
        //borderWidth:2,
        //borderColor:'orange',
        //marginBottom:30,
        backgroundColor:'transparent',
    },
    
    cellViewStyle:{
        height: 44,
        //backgroundColor:'#FFF2E8',
        justifyContent:'center',
        flexDirection:'column',
    },
    
    separatorStyle: {
        height:1,
        backgroundColor:'#E44E41'
    },
    
    cellTitleStyle:{
        fontFamily:'Arial',
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        //color:'#FDCA42',
        color:'white',
        backgroundColor:'transparent',
    }
    
});