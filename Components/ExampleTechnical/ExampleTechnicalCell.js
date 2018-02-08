import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Image,
} from 'react-native';

let Dimensions = require('Dimensions');
let SCREEN_WIDTH = Dimensions.get('window').width;
let SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ExampleTechnicalCell extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            dataArray: [],
        }
    }
    
    render(){
        
        return(
            <View style={styles.container}>
                <Text>我是谁</Text>
            </View>
        );
    }
    
    componentDidMount() {
    
    }
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#FFF2E8',
        justifyContent:'flex-start',
        alignItems:'center'
    }
});