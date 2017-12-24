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
} from 'react-native';

import { StackNavigator} from 'react-navigation';

import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'

import navigationOptionInfo from './NavigationOptionsInfo'

export default class ExampleLatestNewsPage extends Component {

    render() {
        return (
            <ExampleLatestNewsPageNav/>
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

const latestNewsPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
            //点击关闭侧滑
            navigation.navigate('DrawerOpen')

        }}>
                {/*<Text>关闭侧滑栏</Text>*/}
                <Text>我是最新资讯</Text>
            </TouchableOpacity>
        </View>
    );
}

const ExampleLatestNewsPageNav = StackNavigator(
    {
        latestNewsPage:{
            screen:latestNewsPage
        },
    },
    navigationOptionInfo.config('猿猿资讯')
);

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    }
});
