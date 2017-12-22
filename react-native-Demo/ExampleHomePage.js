
import React,{ Component } from 'react';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import {NavigationActions, StackNavigator} from "react-navigation";
import ExampleNavigationManager from './ExampleNavigationManager';
import loginView from './loginView';
export default class ExampleHomePage extends Component {
    
    render() {
        return (
            <SimpleStack/>
        );
    }
    
    componentDidMount() {
        
        ExampleNavigationManager.drawerNavigation = this.props.navigation;
        
    }
    
    _rendernavigation= ()=>{
        console.log('我来了');
    }
}

const homePage = ({ navigation }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
            //点击关闭侧滑
            //this.props.navigation.navigate('DrawerClose')
            navigation.navigate('Logo',{'data':'哥们是大佬', callBack:(userData) =>(console.log("hahaha"))})
        }}>
            {/*<Text>关闭侧滑栏</Text>*/}
            <Text>我是案例效果</Text>
        </TouchableOpacity>
    </View>
);


const SimpleStack = StackNavigator({
    Home: {
        screen: homePage,
        navigationOptions:({
            headerTitle:'我是主页',
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:'#3D444C',
            },
            headerLeft:(
                <TouchableOpacity onPress={()=>{
                    ExampleNavigationManager.drawerNavigation.navigate('DrawerOpen')
                }}>
                    <View style={{width:40, height:40, justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('./img/icon.png')} style={{width:40,height:40,borderRadius:20,}}/>
                    </View>
                </TouchableOpacity>
            ),
        })
    },
    Logo:{
        screen:loginView,
        navigationOptions:({
            headerTitle:'我是主页',
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:'#3D444C',
            },
            headerLeft:(
                <TouchableOpacity onPress={()=>{
                    ExampleNavigationManager.drawerNavigation.navigate('DrawerOpen')
                }}>
                    <View style={{width:40, height:40, justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('./img/icon.png')} style={{width:40,height:40,borderRadius:20,}}/>
                    </View>
                </TouchableOpacity>
            ),
        })
    },
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'center',
        alignItems:'center'
    }
});