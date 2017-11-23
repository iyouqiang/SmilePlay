import React, { Component } from 'react';
import {
    
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default  class FetchRequestDemo extends Component
{
    render(){
        return(
            <View style={styles.container}>

            </View>
        );
    }
    
    componentDidMount() {
    
        
        console.log("哥们来了");
        
        // {this.simpleFetch()};
        // {this.customFetch()};
        // {this.getMoviesFromApiAsync()};
        // {this.getMoviesFromApi()};
    }
    
    simpleFetch(){
    
        fetch('http://www.uuzcat.com/appIndex/main')
    }
    customFetch(){
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })
    }
    
    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.movies);
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    // 注意这个方法前面有async关键字 ES7
    async getMoviesFromApi() {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch('https://facebook.github.io/react-native/movies.json');
            let responseJson = await response.json();
            return responseJson.movies;
        } catch(error) {
            console.error(error);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});