
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

                <ImageBackground source={require('./Resources/yuanMale.png') } style={{width:LEFTWIDTH,height:height}}>
                    {this.renderFlatListView()}
                </ImageBackground>

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
                    {key:'疯狂猿'},
                    {key:'猿猿资讯'},
                    {key:'技术专栏'},
                    {key:'段段传奇'},
                    {key:'我播专场'},
                    {key:'图图播报'},
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
    
        ExampleNavigationManager.drawerNavigation.navigate('DrawerClose');
        
        if (titleStr == '猿猿资讯'){
    
            ExampleNavigationManager.navNavigation.navigate('ExampleLatestNewsPage');
        } else if (titleStr == '技术专栏'){
    
            ExampleNavigationManager.navNavigation.navigate('TechnicalColumnPage');
        }else if (titleStr == '段段传奇'){


        }else if (titleStr == '我播专场'){


        }else if (titleStr == '图图播报'){


        }else if (titleStr == '关于我们'){


        }else if (titleStr == '热门推荐'){


        }
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
        color:'#FDCA42',
        backgroundColor:'transparent',
    }
    
});