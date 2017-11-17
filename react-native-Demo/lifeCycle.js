/**
 * Created by chmtech003 on 2017/11/8.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    TouchableOpacity,
    Image,
    Button,
} from 'react-native';

export default class App extends Component<{}> {
    state={
        title:'默认值',
        person:'yochi'
    }
    
    static defaultProps={
        age:18
    }
    render() {
        return (
            <View ref="topView" style={styles.container}>
                <Text style={{fontSize: 30}}>{this.state.person}</Text>
                <Text>{this.props.age}</Text>
                <Button title="我就是个Button"
                        color="red"
                        onPress={()=>this.click('点击')}
                />
            </View>
        );
    }
    
    click(event){
        //
        this.setState({
            title:event
        });
        
        //拿到View
        console.log(this.refs.topView)
    }
    
    //相当于OC中的ViewWillAppear
    componentWillMount(){
        AlertIOS.alert('WillMount来了')
    }
    
    //Render之后 -- 今后用来发送网络请求(第一次加载的数据)
    componentDidMount(){
        AlertIOS.alert('DidMount')
    }
    
    //这个方法!!刷新UI之后调用!!!第一次加载UI不会来!!
    componentDidUpdate(){
        AlertIOS.alert('DidUpdate');
    }
    
    componentWillUnmount() {
        // 卸载界面
    }
    
    //当组件传入的 props 发生变化时调用，例如：父组件状态改变，给子组件传入了新的prop值。用于组件 props 变化后，更新state。
    componentWillReceiveProps(nextProps) {
    
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});