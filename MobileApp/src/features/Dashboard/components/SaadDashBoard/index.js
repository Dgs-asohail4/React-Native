import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

export default class DashBoardV3 extends Component {
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <View>
        <Text>Title</Text>
      </View>
    );
  }
}