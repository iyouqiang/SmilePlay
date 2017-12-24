
import React,{ Component } from 'react';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'

import ExampleNavigationManager from './ExampleNavigationManager';

export default class ExampleHomePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
            //点击关闭侧滑
            this.props.navigation.navigate('TechnicalColumnPage')
        }}>
                    <Text>我是案例效果</Text>
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

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    }
});

