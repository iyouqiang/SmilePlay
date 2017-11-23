/**
 * Created by guiyongdong on 2017/5/20.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import SecondNavigation from './SecondNavigation';
import {NavigationActions} from 'react-navigation';

export default class FirstNavigation extends Component {

    static navigationOptions=({
        title:'首页',
        // header:(
        //     <View style={{width:Dimensions.get('window').width,height:64,backgroundColor:'red'}}/>
        // ),
        headerTitle:(
            <View style={{width:60,height:44,backgroundColor:'red'}}/>
        ),
        headerBackTitle:'哈哈哈哈哈',
        headerTruncatedBackTitle:'你好',
        headerRight:(
            <View>
                <Text>right</Text>
            </View>
        ),
        headerLeft:(
            <View>
                <Text>left</Text>
            </View>
        ),
        headerStyle: {
            backgroundColor:'yellow'
        },
        headerTitleStyle:{
            color:'red'
        },
        headerBackTitleStyle:{
            tintColor:'#789'
        },
        headerTintColor:'#956',
        gesturesEnabled:false
    });
 
    componentDidMount() {
        const backAction = NavigationActions.back({
            key: 'Profile'
        });
        this.props.navigation.dispatch(backAction)
    }

    render() {
    
        console.log(this.props.navigation);
        console.log(this.props.navigation.state);
        
        return(
            <View style={styles.container}>
                <TouchableOpacity style={[styles.bg]} onPress={()=>{
                    this.props.navigation.navigate('Second',{'data':'haha'});
                }}>
                    <Text>跳转到第二个界面</Text>
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
    },
    bg: {
        height:40
    }
});