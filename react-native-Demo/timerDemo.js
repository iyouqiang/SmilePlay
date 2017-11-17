import React, { Component } from 'react';
import {
    
    View,
    Text,
} from 'react-native'

export default class timerDemo extends Component {
    
    /**
 
     setTimeout, clearTimeout
     setInterval, clearInterval
     setImmediate, clearImmediate
     requestAnimationFrame, cancelAnimationFrame
     requestAnimationFrame(fn)和setTimeout(fn, 0)不同，前者会在每帧刷新之后执行一次，而后者则会尽可能快的执行（在iPhone5S上有可能每秒1000次以上）。
 
     setImmediate则会在当前JavaScript执行块结束的时候执行，就在将要发送批量响应数据到原生之前。注意如果你在setImmediate的回调函数中又执行了setImmediate，它会紧接着立刻执行，而不会在调用之前等待原生代码。
 
     Promise的实现就使用了setImmediate来执行异步调用。
     
     我们来把它和之前的几个任务安排方法对比一下：
 
     requestAnimationFrame(): 用来执行在一段时间内控制视图动画的代码
     setImmediate/setTimeout/setInterval(): 在稍后执行代码。注意这有可能会延迟当前正在进行的动画。
     runAfterInteractions(): 在稍后执行代码，不会延迟当前进行的动画。
     触摸处理系统会把一个或多个进行中的触摸操作认定为'交互'，并且会将runAfterInteractions()的回调函数延迟执行，直到所有的触摸操作都结束或取消了。
     * */
    
    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <View style={{backgroundColor: 'red'}}>
                    <Text>
                        我是计时器界面
                    </Text>
                </View>
            </View>
        );
    }
    
    componentDidMount() {
        
        {this.timerDelay()}
        
        {this.timerImtervalfunc()}
    }
    
    timerImtervalfunc() {
    
        // 重复调用
        this.timerInterval = setInterval(
            () => { console.log('每秒哥们来一次'); },
            1000,
        )
    }
    
    timerDelay() {
        
        //10 秒后控制台打印
        this.timer = setTimeout(
            () => { console.log('把一个定时器的引用挂在this上'); },
            10000
        );
    }
    
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写
        
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
        this.timerInterval && clearInterval(this.timerInterval)
    }
}