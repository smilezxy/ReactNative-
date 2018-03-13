//这才是项目的根组件
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ActivityIndicator,
    StyleSheet

} from 'react-native';
//导入路由相关的组件
import  {Router,Stack,Scene} from  'react-native-router-flux'
import  App from './App.js'
import  MovieList from './components/movie/movieList.js'
import  MovieDetail from './components/movie/movieDetail.js'


export default class Main extends Component {
    constructor (props) {
        super (props)
        this.state = {
        }


    }
    render() {
        return (
                <Router sceneStyle={{backgroundColor:'white'}}>
                    {/*所有的路由规则都要写在这里*/}
                    {/*第一个scene是默认展示的首页*/}
                    {/*key属性  表示路由规则名称，将来可以使用这个key，进行编程式导航，每个路由都要有一个唯一的key*/}
                    <Stack key="root">
                        <Scene key="app" component={App} title="App组件"/>
                        <Scene key="movielist" component={MovieList} title="热映电影列表"/>
                        <Scene key="moviedetail" component={MovieDetail} title="电影详情"/>
                    </Stack>
                </Router>
        )

    }
}
