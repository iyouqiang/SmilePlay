import React,{ Component } from 'react';
import  {
    StyleSheet,
    TouchableOpacity,
    AlertIOS,
    View,
    Text,
    TouchableHighlight,
    Touchable,
} from 'react-native';

export default class touchableDemo extends Component {
    state={
        title:'默认值'
    }
    
    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={()=>this.click('点击')}
                                  onPressIn={()=>this.click('按下')}
                                  onPressOut={()=>this.click('抬起')}
                                  onLongPress={()=>this.click('长按')}
                >
                
                <View>
                    <Text>
                        {this.state.title}
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
        );
    }
    
    click(event){
        this.setState({
            title:event
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    }
})