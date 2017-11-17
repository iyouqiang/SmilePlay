import React,{ Component } from  'react';
import  {
    
    NavigatorIOS,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

export default class NavigationIOSDemo extends Component {
    
    render(){
        return(
            <NavigatorIOS
                initialRoute={{
                    component: MyScene,
                    title: 'My Initial Scene',
                }}
                style={{flex: 1}}
            />
        );
    }
}

class MyScene extends Component {
    
    static propTypes = {
        // title: PropTypes.string.isRequired,
        // navigator: PropTypes.object.isRequired,
    }
    
    constructor(props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }
    
    _onForward() {
        this.props.navigator.push({
            title: 'Scene ' + nextIndex,
        });
    }
    
    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
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