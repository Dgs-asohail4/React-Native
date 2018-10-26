import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StyleSheetFactory from './styles';
import FindFriends from '../../../../components/findFriends/container'
import Theme from '../../../../global/theme'

export default class Setting extends Component {
  render() {
  //  const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <View>
        <FindFriends />
      </View>
    );
  }
}