import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper'
// Actions 表示要进行路由的JS操作了，可以跳转到新路由
import { Actions } from 'react-native-router-flux'

var styles = StyleSheet.create({
    box: {
        width: "33.33%",
        alignItems: "center",
        marginTop: 15
    }


})

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lunbotu: []
        }

    }
    //在组件将要挂载的时候请求一下数据
    componentWillMount() {
        fetch('http://vue.studyit.io/api/getlunbo')
            .then(res => res.json())
            .then(data => {
                //console.warn(JSON.stringify(data,null,"  "))
                this.setState({
                    lunbotu: data.message
                })
            })
    }

    render() {
        return (
            <View>
                <View style={{height: 220}}>
                    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                        {
                            this.state.lunbotu.map((item, i) => {
                                return <View key={i}>
                                    <Image source={{uri: item.img}} style={{width: '100%', height: '100%'}}></Image>
                                </View>
                            })
                        }

                    </Swiper>
                </View>
                {/*在RN中，默认就已经为所有的View使用了弹性盒模型，默认的主轴是纵向*/}
                <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu1.png')} style={{width: 60, height: 60}}/>
                        <Text>新闻资讯</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu2.png')} style={{width: 60, height: 60}}/>
                        <Text>图片分享</Text>
                    </View>

                    <View style={styles.box}>
                        <Image source={require('../../images/menu3.png')} style={{width: 60, height: 60}}/>
                        <Text>商品购买</Text>
                    </View>

                    <View style={styles.box}>
                        <Image source={require('../../images/menu4.png')} style={{width: 60, height: 60}}/>
                        <Text>视频专区</Text>
                    </View>
                    <TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={styles.box}>
                        < View>
                            <Image source={require('../../images/menu5.png')} style={{width: 60, height: 60}}/>
                            <Text>热映电影</Text>
                        </View>
                    </TouchableHighlight>


                    <View style={styles.box}>
                        <Image source={require('../../images/menu6.png')} style={{width: 60, height: 60}}/>
                        <Text>联系我们</Text>
                    </View>
                </View>
            </View>

        )
    }

    //去电影列表页面
    goMovieList = () => {
        // 在这里要跳转到电影列表，需要使用 编程式导航
        Actions.movielist()
    }
}
