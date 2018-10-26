import React, { Component } from 'react';
import { Text, View } from 'react-native';

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'

export default class Ellipsis extends Component {
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
      <View style={styles.container}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    );
  }
}