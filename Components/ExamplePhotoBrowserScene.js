import PhotoBrowser from 'react-native-photo-browser';
import React, {Component} from 'react';
// import {
//
//     Alert,
// } from 'react-native';

export default class ExamplePhotoBrowserScene extends Component {

    static navigationOptions = {
        header:null,
    }
    
    _goBack = ()=> {
        this.props.navigation.goBack()
    }
    
    _longPress = ()=> {
        alert('长按保存保存图片');
    }
    
    render() {
    
        const { params } = this.props.navigation.state;
        const media = params.media
        const index = 0
        
        return(
          <PhotoBrowser mediaList={media}
                        onBack={()=>this._goBack()}
                        initialIndex={index}
                        displayActionButton={true}
                        displayTopBar={true}
                        onPhotoLongPress={()=>this._longPress()}
          />
        );
    }
}
