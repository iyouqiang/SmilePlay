
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Lightbox from 'react-native-lightbox';
import navigationOptionInfo from "./NavigationOptionsInfo";

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

export default class ExampleLightbox extends Component {
    
    static navigationOptions = props => navigationOptionInfo.commomHeader(props);
    
    render(){
        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
                <View style={styles.text}><Text>Time goes by so fast, people go in and out of your life. You must never miss the opportunity to tell these people how much they mean to you.</Text></View>
                <Lightbox underlayColor="white">
                    <Image
                        style={styles.contain}
                        resizeMode="contain"
                        source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3813428929,7673565&fm=27&gp=0.jpg' }} // https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg
                    />
                </Lightbox>
                <View style={styles.text}><Text>No matter how bad your heart has been broken, the world doesn’t stop for your grief. The sun comes right back up the next day. </Text></View>
                <View style={styles.text}><Text>If you wish to succeed, you should use persistence as your good friend, experience as your reference, prudence as your brother and hope as your sentry.</Text></View>
                <Lightbox
                    renderHeader={close => (
                        <TouchableOpacity onPress={close}>
                            <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                    )}>
                    <View style={styles.customHeaderBox}>
                        <Text>I have a custom header</Text>
                    </View>
                </Lightbox>
                <View style={styles.text}><Text>If you would hit the mark, you must aim a little above it. Every arrow that flies feels the attraction of earth. －Henry Wadsworth Longfellow. </Text></View>
                <View style={styles.row}>
                    <Lightbox style={styles.col}>
                        <View style={[styles.square, styles.squareFirst]}><Text style={styles.squareText}>I'm a square</Text></View>
                    </Lightbox>
                    <Lightbox style={styles.col}>
                        <View style={[styles.square, styles.squareSecond]}><Text style={styles.squareText}>I'm a square</Text></View>
                    </Lightbox>
                </View>
                <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: BASE_PADDING,
        backgroundColor:'#FFF2E8',
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
    customHeaderBox: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginLeft: -BASE_PADDING,
        marginRight: -BASE_PADDING,
    },
    col: {
        flex: 1,
    },
    square: {
        width: WINDOW_WIDTH / 2,
        height: WINDOW_WIDTH / 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    squareFirst: {
        backgroundColor: '#C0392B',
    },
    squareSecond: {
        backgroundColor: '#019875',
    },
    squareText: {
        textAlign: 'center',
        color: 'white',
    },
    carousel: {
        height: WINDOW_WIDTH - BASE_PADDING * 2,
        width: WINDOW_WIDTH - BASE_PADDING * 2,
        backgroundColor: 'white',
    },
    contain: {
        flex: 1,
        height: 150,
    },
    text: {
        marginVertical: BASE_PADDING * 2,
    },
});
