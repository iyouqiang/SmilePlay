import React,{ Component } from 'react';
import Spinkit from 'react-native-spinkit'
import {

    StyleSheet,
    View,
    
} from 'react-native';

export  default  class ExampleLoadingView extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            showLoading :true,
        };
    }
    
    render() {
    
        return (
            <View style={styles.container}>
                <Spinkit style={styles.spinner}
                         index={0}
                         size={50}
                         // types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
                         type={'ThreeBounce'}
                         color="#3D444C"
                         isVisible={this.state.showLoading}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        position:'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    spinner: {
        marginBottom: 50
    },
});