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
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                //点击关闭侧滑
                this.props.navigation.navigate('TechnicalColumnPage')
            
            }}>
                {/*<Text>关闭侧滑栏</Text>*/}
                <Text>我是最新资讯</Text>
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

ExampleLatestNewsPage.navigationOptions = props => {
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

// const latestNewsPage = ({ navigation }) => {
//     return (
        {/*<View style={styles.container}>*/}
            {/*<TouchableOpacity onPress={()=>{*/}
            {/*//点击关闭侧滑*/}
            {/*navigation.navigate('DrawerOpen')*/}
        
        {/*}}>*/}
                {/*/!*<Text>关闭侧滑栏</Text>*!/*/}
                {/*<Text>我是最新资讯</Text>*/}
            {/*</TouchableOpacity>*/}
        {/*</View>*/}
//     );
// }

// const ExampleLatestNewsPageNav = StackNavigator(
//     {
//         latestNewsPage:{
//             screen:latestNewsPage
//         },
//     },
//     navigationOptionInfo.config('猿猿资讯')
// );

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    }
});
