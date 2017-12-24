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
    Button,
} from 'react-native';


export default class ExampleWebDetailPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
            //点击关闭侧滑
            navigation.navigate('DrawerOpen')

        }}>
                    {/*<Text>关闭侧滑栏</Text>*/}
                    <Text>我是详情界面</Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {


    }
}

ExampleWebDetailPage.navigationOptions = props => {
    const { navigation } = props;
    const { state, setParams } = navigation;
    const { params } = state;
    return {
        headerTitle: `${params.name}`,
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
