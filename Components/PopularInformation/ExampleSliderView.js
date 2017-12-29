import React, {Component} from 'react';
import { View, ScrollView, Text, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './ExampleSliderItem.style'
import ExampleSliderItem from './ExampleSliderItem'
import styles, {infoStyle} from "./ExampleInfo.style";
import { ENTRIES1, ENTRIES2 } from '../Home/entries';

const SLIDER_1_FIRST_ITEM = 1;

export default class ExampleSliderView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }

}