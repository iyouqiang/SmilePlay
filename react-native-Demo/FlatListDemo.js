import React, { Component } from 'react';
import {
    
    FlatList,
    StyleSheet,
    Text,
    View,
    SectionList,
} from 'react-native';

export default class FlatListDemo extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                {this.renderFlatListView()}
                {/*{this.renderSectionlistView()}*/}
            </View>
        );
    }
    
    renderFlatListView(){
    
        return (<FlatList
            data={
                [   {key: 'Devin'},
                    {key: 'yochi'},
                    {key: 'kung'},
                    {key: 'gong'},
                    {key: 'jojo'},
                    {key: 'daling'},
                    {key: 'adfas'},
                    {key: 'basd'},
                    {key: 'asdfasd'},
                ]
            }
            renderItem={({item}) => <View style={styles.subSontainer}>
                <Text style={styles.item}>{item.key}</Text>
            </View>}

            getItemLayout={(data,index)=>(
                {length: 100, offset: (100+2) * index, index}
            )}
        />);
    }
    
    renderSectionlistView() {
    
        return(
            <SectionList
                sections={[
                {title: 'D', data: [{key: 'Devin'}]},
                {title: 'j', data: [{key: 'yochi'},
                        {key: 'kung'},
                        {key: 'gong'},
                        {key: 'jojo'},
                        {key: 'daling'},
                        {key: 'adfas'},
                        {key: 'basd'},
                        {key: 'asdfasd'}]},
            ]}
                renderItem={({item}) => <View style={styles.subSontainer}>
                <Text style={styles.item}>{item.key}</Text></View>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            />
        );
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        paddingTop:22
    },
    item: {
        fontSize: 18,
        alignItems:'center',
        textAlign:'center',
       
    },
    
    subSontainer: {
        height:100,
        borderBottomWidth: 1,
        borderBottomColor:'red',
        justifyContent:'center',
        backgroundColor:'orange',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
})