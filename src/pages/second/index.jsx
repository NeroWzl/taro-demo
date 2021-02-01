import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Block } from '@tarojs/components'
import './index.scss'
import NavBar from '../../components/NavBar'

export default class Second extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '二级页面'
  }

  render () {
    return (
      <Block className='page-second'>
        <NavBar></NavBar>
        <View className='second'>
          <Text>我是二级页面</Text>
        </View>
      </Block>
    )
  }
}
