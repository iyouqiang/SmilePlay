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

export default class DrawerHomePage extends Component {

    static navigationOptions = {
        drawerLabel:'首页',
        drawerIcon:({tintColor}) => {
            return (
                <Image
                    source={require('../images/home.png')}
                    style={[{width:24,height:24},{tintColor:tintColor}]}
                />
            );
        },
    };
    
    render() {
        return(
              <View style={styles.container}>
                  <TouchableOpacity onPress={()=>{
                      //点击打开抽屉
                      this.props.navigation.navigate('DrawerOpen')
                  }}>
                      <Text>我是home栏</Text>
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



