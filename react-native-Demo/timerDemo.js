import React, { Component } from 'react';
import {
    
    View,
    Text,
    StyleSheet,
    
} from 'react-native'

export default class timerDemo extends Component {
    
    
    /**
     
     setTimeout, clearTimeout  尽可能快的执行（在iPhone5S上有可能每秒1000次以上）。
     setInterval, clearInterval：设置间隔执行
     setImmediate, clearImmediate：在当前JavaScript执行块结束的时候执行
     requestAnimationFrame, cancelAnimationFrame：在每帧刷新之后执行一次
     ***************************************************************************************
     InteractionManager
     原生应用感觉如此流畅的一个重要原因就是在互动和动画的过程中避免繁重的操作。在React Native里，我们目前受到限制，因为我们只有一个JavaScript执行线程。不过你可以用InteractionManager来确保在执行繁重工作之前所有的交互和动画都已经处理完毕。
     
     应用可以通过以下代码来安排一个任务，使其在交互结束之后执行：
     InteractionManager.runAfterInteractions(() => {
            ...需要长时间同步执行的任务...
     });
     ***************************************************************************************
     我们来把它和之前的几个任务安排方法对比一下：
     
     requestAnimationFrame(): 用来执行在一段时间内控制视图动画的代码
     setImmediate/setTimeout/setInterval(): 在稍后执行代码。注意这有可能会延迟当前正在进行的动画。
     runAfterInteractions(): 在稍后执行代码，不会延迟当前进行的动画。
     触摸处理系统会把一个或多个进行中的触摸操作认定为'交互'，并且会将runAfterInteractions()的回调函数延迟执行，直到所有的触摸操作都结束或取消了。
     ***************************************************************************************
     
     * */
    constructor(props) {
        
        super(props);
        
        this.state = {
            showText: true,
            titleShow: '我来了',
            titleHidden: '我走了',
            titleDelay:'',
            count: 0 };
    }
    
    render(){
        let display = this.state.showText ? this.state.titleShow : this.state.titleHidden;
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>
                        {display}
                    </Text>
                    <Text style={styles.textTitle}>
                        {this.state.count}
                    </Text>
                    <Text style={styles.textTitle}>
                        {this.state.titleDelay}
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
            () => { console.log('每秒哥们来一次');
                this.setState(previousState => {
                    return { showText: !previousState.showText, count: previousState.count+1 };
                });
            },
            1000,
        )
    }
    
    timerDelay() {
        
        //10 秒后控制台打印
        this.timer = setTimeout(
            () => { console.log('把一个定时器的引用挂在this上');
                    this.setState({
                        titleDelay: '我以等待十秒',
                    });
            },
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

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    
    textTitle:{
        textAlign:'center',
        color: 'red',
        fontSize: 30,
    }
})