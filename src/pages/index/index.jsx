import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Block } from '@tarojs/components'
import './index.scss'
import Home from '../../components/Home'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  toSecond () {
    Taro.navigateTo({
      url: '/pages/second/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <Home></Home>
        <Button onClick={this.toSecond}>进入二级页面</Button>
      </View>
    )
  }
}
