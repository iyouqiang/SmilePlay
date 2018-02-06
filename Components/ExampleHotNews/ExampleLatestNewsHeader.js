
import React, {Component} from 'react';
import {
    
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    
} from 'react-native'

import PropTypes from 'prop-types';


import Carousel, { Pagination } from 'react-native-snap-carousel';
import {ENTRIES1} from "./ExampleJSONData";
import SliderEntry from "./ExampleSliderEntry"
import { sliderWidth, itemWidth } from './ExampleSliderEntry.style';
import styles, { colors } from '../Home/index.style';

const SLIDER_1_FIRST_ITEM = 1;

// 自定义头部控件
export default class ExampleLatestNewsHeader extends Component {
    
    static propTypes = {
        itemdata: PropTypes.array.isRequired,
    }
    
    constructor(props) {
        super(props);
        
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }
    
    render() {
        const { itemdata } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Carousel
                        ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                        data={ itemdata }
                        renderItem={this._renderItemWithParallax}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        hasParallaxImages={true}
                        firstItem={SLIDER_1_FIRST_ITEM}
                        inactiveSlideScale={0.85}
                        inactiveSlideOpacity={0.6}
                        enableMomentum={false}
                        containerCustomStyle={styles.slider}
                        contentContainerCustomStyle={styles.sliderContentContainer}
                        loop={true}
                        loopClonesPerSide={2}
                        autoplay={true}
                        autoplayDelay={500}
                        autoplayInterval={3000}
                        onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                    />
                    {/*<Pagination*/}
                    {/*dotsLength={ENTRIES1.length}*/}
                    {/*activeDotIndex={this.state.slider1ActiveSlide}*/}
                    {/*containerStyle={styles.paginationContainer}*/}
                    {/*dotColor={'rgba(255, 255, 255, 0.92)'}*/}
                    {/*dotStyle={styles.paginationDot}*/}
                    {/*inactiveDotColor={colors.black}*/}
                    {/*inactiveDotOpacity={0.4}*/}
                    {/*inactiveDotScale={0.6}*/}
                    {/*carouselRef={this.state.slider1Ref}*/}
                    {/*tappableDots={!!this.state.slider1Ref}*/}
                    {/*/>*/}
                </View>
            </View>
        );
    }
    
    _renderItem ({item, index}) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
            />
        );
    }
    
    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }
    
    componentWillMount() {
        //console.log("我的菜");
    }
    
    componentDidMount() {
    
        //console.log("菜吃完了");
    }
}
