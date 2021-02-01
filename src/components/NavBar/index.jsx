import Taro from '@tarojs/taro';
import { View, Button, Block, Text } from '@tarojs/components';
import './index.scss';

const app = Taro.getApp()

export default function CustomHeader() {

  function homeClick() {
    Taro.switchTab({url:'/pages/index/index'})
  }

  return (
    <Block>
        <View className='header'>
          <View>我是头部</View>
          <Button onClick={homeClick}>返回tabBar页面</Button>
        </View>
        <View className='header-height'></View>
    </Block>
  );
}
