import React,{ Component } from  'react';
import {
    
    View,
    Text,
    
} from 'react-native';


export default class arrowFunctionDemo extends Component<{}> {
    
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <View style={{backgroundColor: 'red'}}>
                    <Text>
                        箭头函数练习demo
                    </Text>
                </View>
            </View>
        );
    }
    
}