/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *建议用yarn安装依赖包   yarn  add  包名
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

//导入TabNavigator组件
import TabNavigator from 'react-native-tab-navigator';

//导入tab栏组件
import Home from './components/tabbars/home.js'
import Search from './components/tabbars/search.js'
import Shopcar from './components/tabbars/shopcar.js'
import Me from './components/tabbars/me.js'





export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home' // 选中的tab栏名称
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
            {/*首页组件*/}
            <TabNavigator.Item
                  selected={this.state.selectedTab === 'home'}
                  title="首页"
                  renderIcon={() => <Image style={styles.iconstyle} source={require('./images/home.png')} />}
                  //renderSelectedIcon={() => <Image source={require('./images/home.png')} />}
                  //badgeText="0"
                  onPress={() => this.setState({ selectedTab: 'home' })}
            >
                  <Home></Home>
            </TabNavigator.Item>

            {/*搜索组件*/}
            <TabNavigator.Item
                  selected={this.state.selectedTab === 'search'}
                  title="搜索"
                  renderIcon={() => <Image style={styles.iconstyle} source={require('./images/search.png')} />}
                  //renderSelectedIcon={() => <Image source={...} />}
                  //renderBadge={() => <CustomBadgeView />}
                  onPress={() => this.setState({ selectedTab: 'search' })}
            >
                  <Search></Search>
            </TabNavigator.Item>
            {/*购物车组件*/}
            <TabNavigator.Item
                selected={this.state.selectedTab === 'shopcar'}
                title="购物车"
                renderIcon={() => <Image style={styles.iconstyle} source={require('./images/shop_car.png')} />}
                //renderSelectedIcon={() => <Image source={...} />}
                //renderBadge={() => <CustomBadgeView />}
                badgeText="0"
                onPress={() => this.setState({ selectedTab: 'shopcar' })}
            >
                <Shopcar></Shopcar>
            </TabNavigator.Item>
            {/*我的组件*/}
            <TabNavigator.Item
                selected={this.state.selectedTab === 'me'}
                title="我的"
                renderIcon={() => <Image style={styles.iconstyle} source={require('./images/me.png')} />}
                //renderSelectedIcon={() => <Image source={...} />}
                //renderBadge={() => <CustomBadgeView />}
                onPress={() => this.setState({ selectedTab: 'me' })}
            >
                <Me></Me>
            </TabNavigator.Item>
        </TabNavigator>






      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconstyle:{
       width: 25,
       height:25
    }
});



