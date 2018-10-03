import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import {PopScreen} from '../../../../navigation/helper';


export default class ScreenNew extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
        <Button
          onPress={() => PopScreen(this.props)}
          title="Go Back"
        />
      </View>
    )
  }
}