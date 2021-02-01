import Taro from '@tarojs/taro';
import { View, Button, Block, Text } from '@tarojs/components';
import './index.scss';
import Homeblock from '../Block'

const app = Taro.getApp()

export default function CustomHeader() {

  return (
    <View>
        <Homeblock></Homeblock>
    </View>
  );
}
