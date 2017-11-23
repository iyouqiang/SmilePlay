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
import {NavigationActions} from 'react-navigation';

export default class SecondNavigation extends Component {

    // 构造
      constructor(props) {
        super(props);

      }

    static navigationOptions = {
        title:'哈哈',
        gesturesEnabled:true
    };
    
    componentDidMount() {
        const setParamsAction = NavigationActions.setParams({
            params: { title: 'Hello' },
            key: 'Profile',
        });
        this.props.navigation.dispatch(setParamsAction)
    
        // var {setParams} = this.props.navigation;
        // setParams({'second':'大佬'});
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Model',{'data':'haha'});
                }}>
                    <Text>下一个界面</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    }
});