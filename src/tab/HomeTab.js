/**
 * Created by guiyongdong on 2017/5/21.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class HomeTab extends Component {
    render() {
        console.log('render');
        return(
            <View style={styles.container}>
                <Text>HomeTab</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});