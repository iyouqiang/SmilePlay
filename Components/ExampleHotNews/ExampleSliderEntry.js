import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles, { sliderWidth, slideHeight, outslideHeight } from './ExampleSliderEntry.style';
import ExampleNavigationManager from '../ExampleNavigationManager';

export default class SliderEntry extends Component {
    
    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };
    
    get image () {
        const { data: { pic }, parallax, parallaxProps, even } = this.props;
        
        return parallax ? (
            <ParallaxImage
                source={{ uri: pic }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
            <Image
                source={{ uri: pic }}
                style={styles.image}
            />
        );
    }
    
    render () {
        const { data: { title, url }, even } = this.props;
        
        // const uppercaseTitle = title ? (
        //     <Text
        //       style={[styles.title, even ? styles.titleEven : {}]}
        //       numberOfLines={2}
        //     >
        //         { title.toUpperCase() }
        //     </Text>
        // ) : false;
        
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                activeOpacity={1.0}
                onPress={()=>{
                    ExampleNavigationManager.navNavigation.navigate('DetailWebPage',{'title':title, 'url':url});
                }}
            >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <Text style={{fontSize: 16,color:'white', left:10, right:10, top:(outslideHeight - 20)*0.5,textAlignVertical:'center',position:'absolute',backgroundColor:'transparent',flex:1}}>{title}</Text>
                    {/*<View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />*/}
                </View>
                {/*<View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>*/}
                {/*{ uppercaseTitle }*/}
                {/*<Text*/}
                {/*style={[styles.subtitle, even ? styles.subtitleEven : {}]}*/}
                {/*numberOfLines={2}*/}
                {/*>*/}
                {/*{ subtitle }*/}
                {/*</Text>*/}
                {/*</View>*/}
            </TouchableOpacity>
        );
    }
}
