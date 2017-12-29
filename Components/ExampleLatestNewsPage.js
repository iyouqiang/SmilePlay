/**
 * Created by Yochi on 2017/12/24.
 */

import React,{ Component } from 'react';
import {

    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

import navigationOptionInfo from './NavigationOptionsInfo'

import config from './ECNetwork/config'
import request from './ECNetwork/ecRequest'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {ENTRIES1} from "./Home/entries";
import SliderEntry from "./Home/SliderEntry"
import { sliderWidth, itemWidth } from './Home/SliderEntry.style';
import styles, { colors } from './Home/index.style';

const SLIDER_1_FIRST_ITEM = 1;

export default class ExampleLatestNewsPage extends Component {
    
    static navigationOptions = props => navigationOptionInfo.commomHeader(props);
    
    constructor(props) {
        super(props);
    
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }
    
    render() {
        return (
        <View style={styles.container}>
            <View>
                <Carousel
                    ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                    data={ ENTRIES1 }
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.9}
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
    
    componentDidMount() {

        request.get(config.api.qidianBase,
            {   m:'App',
                c:'MisArticle',
                a:'getMisChoiceList',
                page:'1',
                pagesize:'10'})
            .then((data)=>{
                console.log(data);
            })
            .catch((error)=>{
                console.log('错误：'+error);
            })
    }
}

