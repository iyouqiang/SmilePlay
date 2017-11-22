/**
 * Created by guiyongdong on 2017/5/22.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export default class QQDrawerLeft extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('DrawerClose');
                }}>
                    <Text>QQ侧滑页点击关闭</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});


