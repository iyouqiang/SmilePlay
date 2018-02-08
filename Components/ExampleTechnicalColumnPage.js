/**
 * Created by Yochi on 2017/12/23.
 */

import React,{ Component } from 'react';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Button,
} from 'react-native';

import { StackNavigator} from 'react-navigation';

import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'

import navigationOptionInfo from './NavigationOptionsInfo'
import ExampleWebDetailPage from './ExampleWebDetailPage'
import ExampleNavigationManager from './ExampleNavigationManager'
import Ionicons from "react-native-vector-icons/Ionicons";

import ExampleTechnicalListPage from './ExampleTechnicalListPage'

let Dimensions = require('Dimensions');
let SCREEN_WIDTH =  Dimensions.get('window').width;
let SCREEN_HEIGHT =  Dimensions.get('window').height;
var _scrollView: ScrollView;

export default class ExampleTechnicalColumnPage extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            
            leftBgColor:'white',
            leftTitleColor:'#3D444C',
            rightBgColor:'#3D444C',
            rightTitleColor:'white',
        }
    }
    
    static navigationOptions= props => ({
        
        // title:'首页',
        
        header:null,
        //     (
        //
        //     <View style={{width:SCREEN_WIDTH,height:64,backgroundColor:'#3D444C', flexDirection:'row',}}>
        //         <TouchableOpacity onPress={()=>{
        //
        //             props.navigation.goBack();
        //         }}>
        //             <View style={{width:60, top:29, left:10,}}>
        //                 <Ionicons name={ "ios-arrow-back-outline" }  size={25} color='white' style={{backgroundColor:'transparent'}}/>
        //             </View>
        //
        //         </TouchableOpacity>
        //
        //         <View style={styles.tabbarStyle} >
        //
        //             <View style={{backgroundColor:props.navigation.state.testColor, flex:1, justifyContent:'center'}}>
        //
        //                 <Text style={{textAlign:'center',color:'#3D444C'}} onPress={()=>props.navigation.state.params.navigatePress()}
        //                 >最热</Text>
        //
        //             </View>
        //
        //                 <View style={{backgroundColor:'#3D444C', flex:1, justifyContent:'center'}}>
        //
        //                     <Text style={{textAlign:'center', color:'white'}}
        //
        //                     >最新</Text>
        //
        //                 </View>
        //         </View>
        //     </View>
        // ),
        // headerTitle:(
        //     <View style={{width:60,height:44,backgroundColor:'red'}}/>
        // ),
        // headerBackTitle:'哈哈哈哈哈',
        // headerTruncatedBackTitle:'你好',
        // headerRight:(
        //     <View>
        //         <Text>right</Text>
        //     </View>
        // ),
        // headerLeft:(
        //     <View>
        //         <TouchableOpacity onPress={()=>{
        //             // 这个key系统分配，需要修改组件内容容易崩溃 /node_modules/react-navigation/src/routers/StackRouter.js
        //             // 没有提供有api获取组件的key
        //             ExampleNavigationManager.navNavigation.goBack()
        //         }}>
        //             <Text>返回到第一个界面</Text>
        //         </TouchableOpacity>
        //
        //     </View>
        // ),
        // headerStyle: {
        //     backgroundColor:'yellow'
        // },
        // headerTitleStyle:{
        //     color:'red'
        // },
        // headerBackTitleStyle:{
        //     tintColor:'#789'
        // },
        // headerTintColor:'#956',
        // gesturesEnabled:false
        
    });
    
    // static navigationOptions = props => navigationOptionInfo.commomHeader(props);
    
    render() {
        return (
            
            <View style={styles.container}>
                
                <View style={{width:SCREEN_WIDTH,height:64,backgroundColor:'#3D444C', flexDirection:'row',}}>
                    <TouchableOpacity onPress={()=>{
            
                        this.props.navigation.goBack();
                    }}>
                        <View style={{width:60, top:29, left:10,}}>
                            <Ionicons name={ "ios-arrow-back-outline" }  size={25} color='white' style={{backgroundColor:'transparent'}}/>
                        </View>
        
                    </TouchableOpacity>
        
                    <View style={styles.tabbarStyle} >
            
                        <View style={{backgroundColor:this.state.leftBgColor, flex:1, justifyContent:'center'}}>
                
                            <Text style={{textAlign:'center',color:this.state.leftTitleColor}} onPress={()=>this._onSelectedTabBar(0)}
                            
                            >最新</Text>
            
                        </View>
            
                        <View style={{backgroundColor:this.state.rightBgColor, flex:1, justifyContent:'center'}}>
                
                            <Text style={{textAlign:'center', color:this.state.rightTitleColor}} onPress={()=>this._onSelectedTabBar(1)}
                
                            >最热</Text>
            
                        </View>
                    </View>
                </View>
                
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            scrollEventThrottle={200}
                            //ref={'scrollContainer'}
                            ref={(scrollView) => { _scrollView = scrollView; }}
                            onMomentumScrollEnd={(event)=>this._onSelectedTabBar(event.nativeEvent.contentOffset.x/SCREEN_WIDTH)}
                            
                            scrollEventThrottle={200}
                >
                
                <ExampleTechnicalListPage pageType={1} navigation={this.props.navigation} >
                
                </ExampleTechnicalListPage>
                
                <ExampleTechnicalListPage pageType={2} navigation={this.props.navigation}>
                
                </ExampleTechnicalListPage>
                
                </ScrollView>
                
            </View>
        );
    }

    _onSelectedTabBar(index){
        
        switch (index) {
            case 0:
            {
                this.setState({
        
                    leftBgColor:'white',
                    leftTitleColor:'#3D444C',
                    rightBgColor:'#3D444C',
                    rightTitleColor:'white',
                });
    
                _scrollView.scrollTo({x:0});
            }
            break;
            case 1:
            {
                this.setState({
        
                    leftBgColor:'#3D444C',
                    leftTitleColor:'white',
                    rightBgColor:'white',
                    rightTitleColor:'#3D444C',
        
                });
    
                _scrollView.scrollTo({x:SCREEN_WIDTH});
            }
                break;
            }
    }
    
    componentDidMount() {
        
        // 类方法使用属性调用
        // this.props.navigation.setParams({
        //     navigatePress:this._onSelectedTabBar,
        // });
    }
}

// const TechnicalColumnPage = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={()=>{
//             //点击关闭侧滑
//             navigation.navigate('DetailWebPage',{name:'web详情'})
//
//         }}>
//                 {/*<Text>关闭侧滑栏</Text>*/}
//                 <Text>我是技术专栏</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
//
// const TechnicalColumnPageNav = StackNavigator(
//     {
//         TechnicalColumnPage:{
//             screen:TechnicalColumnPage
//         },
//         DetailWebPage:{
//             screen:ExampleWebDetailPage
//         }
//     },
//     navigationOptionInfo.config('技术专栏')
// );

// ExampleTechnicalColumnPage.navigationOptions = props => {
//     const { navigation } = props;
//
//     return {
//         //headerTitle: `${params.name}`,
//         // Render a button on the right side of the header.
//         // When pressed switches the screen to edit mode.
//         // headerRight: (
//         //     <Button
//         //         title={params.mode === 'edit' ? 'Done' : 'Edit'}
//         //         onPress={() =>
//         //             setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
//         //     />
//         // ),
//
//         headerLeft:(
//             <TouchableOpacity onPress={()=>{
//                 navigation.goBack();
//             }}>
//                 <View style={{width:40, height:40, justifyContent:'center',alignItems:'center'}}>
//                     <Text style={{color:'white',}}>返回</Text>
//                 </View>
//             </TouchableOpacity>
//         ),
//
//         // headerStyle: {
//         //     backgroundColor: 'green'
//         // },
//         // headerTintColor:'red',
//     };
// };

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    tabbarStyle:{
        //backgroundColor:'red',
        height:30.0,
        width:SCREEN_WIDTH-150,
        left:15,
        top:25,
        borderRadius:5,
        borderColor:'white',
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        overflow: 'hidden',
    },
    scrollSubStyle1:{
    
        height:SCREEN_HEIGHT,
        width:SCREEN_WIDTH,
        backgroundColor:'red',
    },
    scrollSubStyle2:{
        
        height:SCREEN_HEIGHT,
        width:SCREEN_WIDTH,
        backgroundColor:'green',
    },
});
