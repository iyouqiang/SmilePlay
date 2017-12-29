import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './ExampleSliderItem.style'

export default class ExampleSliderItem extends Component {
    
    // 类型检查
    static propTypes = {
        
        data: PropTypes.object.isRequired, // 必须传入
        even: PropTypes.bool,
        parallax:PropTypes.bool,
        parallaxProps: PropTypes.object
    }
    
    _sliderImage() {
        
        const {data:{illustration}, parallax, parallaxProps, even } = this.props;
        
        return parallax? (
            
            <ParallaxImage
                source={{uri: illustration}}
                containerStyle={[styles.imageContainer,even?styles.imageContainer:{}]}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ):(
        
            <Image
                source={{ uri: illustration }}
                style={styles.image}
            />
        );
    }
    
    render(){
    
        const {data: {title, subtitle}, even} = this.props;
    
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => { alert(`You've clicked '${title}'`); }}
            >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
            </TouchableOpacity>
        );
    }
}