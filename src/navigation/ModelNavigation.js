/**
 * Created by guiyongdong on 2017/5/20.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

export default class ModelNavigation extends Component {

    render() {
        console.log(this.props.navigation);
        console.log(this.props.navigation.state);
        
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    // 这个key系统分配，需要修改组件内容容易崩溃 /node_modules/react-navigation/src/routers/StackRouter.js
                    // 没有提供有api获取组件的key
                    this.props.navigation.goBack('Profile')
                }}>
                    <Text>返回到第一个界面</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});