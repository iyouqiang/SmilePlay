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
    //     // headerLeft:(
    //     //     <View>
    //     //         <Text>left</Text>
    //     //     </View>
    //     // ),
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

            <TechnicalColumnPageNav/>
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

const TechnicalColumnPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
            //点击关闭侧滑
            navigation.navigate('DetailWebPage',{name:'web详情'})

        }}>
                {/*<Text>关闭侧滑栏</Text>*/}
                <Text>我是技术专栏</Text>
            </TouchableOpacity>
        </View>
    );
}

const TechnicalColumnPageNav = StackNavigator(
    {
        TechnicalColumnPage:{
            screen:TechnicalColumnPage
        },
        DetailWebPage:{
            screen:ExampleWebDetailPage
        }
    },
    navigationOptionInfo.config('技术专栏')
);

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    }
});
