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
} from 'react-native';

import { StackNavigator} from 'react-navigation';

import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'

import navigationOptionInfo from './NavigationOptionsInfo'
import ExampleWebDetailPage from './ExampleWebDetailPage'
import ExampleNavigationManager from './ExampleNavigationManager'

export default class ExampleTechnicalColumnPage extends Component {

    // static navigationOptions=({
    //     title:'首页',
    //     // header:(
    //     //     <View style={{width:Dimensions.get('window').width,height:64,backgroundColor:'red'}}/>
    //     // ),
    //     headerTitle:(
    //         <View style={{width:60,height:44,backgroundColor:'red'}}/>
    //     ),
    //     headerBackTitle:'哈哈哈哈哈',
    //     headerTruncatedBackTitle:'你好',
    //     // headerRight:(
    //     //     <View>
    //     //         <Text>right</Text>
    //     //     </View>
    //     // ),
    //     headerLeft:(
    //         <View>
    //             <TouchableOpacity onPress={()=>{
    //                 // 这个key系统分配，需要修改组件内容容易崩溃 /node_modules/react-navigation/src/routers/StackRouter.js
    //                 // 没有提供有api获取组件的key
    //                 ExampleNavigationManager.navNavigation.goBack()
    //             }}>
    //                 <Text>返回到第一个界面</Text>
    //             </TouchableOpacity>
    //
    //         </View>
    //     ),
    //     headerStyle: {
    //         backgroundColor:'yellow'
    //     },
    //     headerTitleStyle:{
    //         color:'red'
    //     },
    //     headerBackTitleStyle:{
    //         tintColor:'#789'
    //     },
    //     headerTintColor:'#956',
    //     gesturesEnabled:false
    // });

    render() {
        return (

           // <TechnicalColumnPageNav/>
            <View>
                <TouchableOpacity onPress={()=>{
                    //点击关闭侧滑
                    ExampleNavigationManager.navNavigation.navigate('DetailWebPage',{name:'web详情'})
                }}>
                    {/*<Text>关闭侧滑栏</Text>*/}
                    <Text>我是技术专栏</Text>
                </TouchableOpacity>
            </View>
        );
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

ExampleTechnicalColumnPage.navigationOptions = props => {
    const { navigation } = props;
 
    return {
        //headerTitle: `${params.name}`,
        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode.
        // headerRight: (
        //     <Button
        //         title={params.mode === 'edit' ? 'Done' : 'Edit'}
        //         onPress={() =>
        //             setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
        //     />
        // ),
        
        headerLeft:(
            <TouchableOpacity onPress={()=>{
                navigation.goBack();
            }}>
                <View style={{width:40, height:40, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',}}>返回</Text>
                </View>
            </TouchableOpacity>
        ),

        // headerStyle: {
        //     backgroundColor: 'green'
        // },
        // headerTintColor:'red',
    };
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    }
});
