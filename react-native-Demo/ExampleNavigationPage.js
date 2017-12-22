
import React,{ Component } from 'react';
import {
    
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { StackNavigator, SafeAreaView } from 'react-navigation';

export default class ExampleLeftPage extends Component {
    
    render() {
        return (
            
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    //点击关闭侧滑
                    //this.props.navigation.navigate('DrawerClose')
                    this.props.navigation.navigate('DrawerClose')
                }}>
                    {/*<Text>关闭侧滑栏</Text>*/}
                    <Text>我是案例列表</Text>
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