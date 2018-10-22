import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

export default class Navigation extends Component {
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <View>
        <Text>Hello World !</Text>
      </View>
    );
  }
}