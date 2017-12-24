import React, { Component } from 'react';
import {
    ScrollView,
    Image,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

import ExampleNavigationManager from '../Components/ExampleNavigationManager'

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var {height} = Dimensions.get('window');

export default  class scrollViewDemo extends Component {
    
    render() {
        return(
            <TouchableOpacity onPress={()=>{
                ExampleNavigationManager.drawerNavigation.navigate("DrawerOpen");
            }}>
                <ScrollView
                    //分页
                    pagingEnabled={true}
                    //滚动方向
                    horizontal={false}
                    //显示滚动条
                    showsVerticalScrollIndicator={false}
                >
                    {this.renderChildImageView()}
                    {/*{this.renderChilView()}*/}
                </ScrollView>
            </TouchableOpacity>
          
        )
    }
    
    renderChildImageView() {
        var imgArray = [
            <Image key={1}
                source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510555309018&di=39ef0b3334a12b29ac7800d99ca87dde&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F37d3d539b6003af3b7af2c8e3f2ac65c1138b6c3.jpg'}}
                style={styles.imageStyle}
            />,
            <Image key={2}
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510555431723&di=b141742fa25e8530ac06a82ddaf8af47&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F50da81cb39dbb6fdb22521cb0324ab18962b37e5.jpg'}}
        style={styles.imageStyle}
        />,
        <Image key={3}
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510555431724&di=a31b0bc832ce9595a69d3276b1e82c45&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9e3df8dcd100baa14fb94a6b4d10b912c9fc2e4c.jpg'}}
            style={styles.imageStyle}
        />,
        <Image key={4}
        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510555386302&di=348c98b5f3638dc103fb0ee2a3eeb145&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fcrop%253D0%252C0%252C500%252C320%2Fsign%3D8259ce8a5c4e9258b27bdcaea1b2fd68%2Fd009b3de9c82d15847c57f5f8a0a19d8bd3e429c.jpg'}}
        style={styles.imageStyle}
        />,
        <Image key={5}
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510555386303&di=095a51ec3983a4eb689fecc16e160105&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F11385343fbf2b211c5b2b4a6c08065380dd78ebd.jpg'}}
            style={styles.imageStyle}
        />,
        <Image key={6}
        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510555431724&di=a31b0bc832ce9595a69d3276b1e82c45&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9e3df8dcd100baa14fb94a6b4d10b912c9fc2e4c.jpg'}}
        style={styles.imageStyle}
        />,
        <Image key={7}
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510555386302&di=348c98b5f3638dc103fb0ee2a3eeb145&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fcrop%253D0%252C0%252C500%252C320%2Fsign%3D8259ce8a5c4e9258b27bdcaea1b2fd68%2Fd009b3de9c82d15847c57f5f8a0a19d8bd3e429c.jpg'}}
            style={styles.imageStyle}
        />,
        <Image key={8}
        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510555386303&di=095a51ec3983a4eb689fecc16e160105&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F11385343fbf2b211c5b2b4a6c08065380dd78ebd.jpg'}}
        style={styles.imageStyle}
        />
        ];
        
        return imgArray;
    }
    
    renderChilView(){
        var allChild=[];
        var colors = ['white', 'green', 'yellow', 'orange', 'purple']
        for(var i=0;i<colors.length;i++) {
            allChild.push(
                <View key={i}
                      style={{backgroundColor:colors[i],width:width ,height:height}}
                >
                    <Text style={{color:'red', fontSize:30}}>{i}</Text>
                </View>
            )
        }
        return allChild;
    }
}

const styles = StyleSheet.create({
    
    imageStyle:{
        height: 200,
        width:width-40,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
    }
})