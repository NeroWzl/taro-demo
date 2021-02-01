import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'

export default class My extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '我的'
  }

  toSecond () {
    Taro.navigateTo({
      url: '/pages/second/index'
    })
  }

  render () {
    return (
      <View className='my'>
        <Text>我是我的页</Text>
        <Button onClick={this.toSecond}>进入二级页面</Button>
      </View>
    )
  }
}
