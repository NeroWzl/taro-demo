import Taro from '@tarojs/taro';
import { View, Button, Block, Text } from '@tarojs/components';
import './index.scss';

const app = Taro.getApp()

export default function CustomHeader() {

  return (
    <View>
        <View >
            我是首页
        </View>
    </View>
  );
}
