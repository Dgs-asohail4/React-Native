import React, { Component } from 'react';
import { Text, View , Button} from 'react-native';
import styles from './styles';
import { ChangeStack } from '../../../../navigation/helper';
export default class HomeNew extends Component {
  render() {
    return (
      <View>
        <Button
        onPress={() => {
          ChangeStack(this.props, "app.splash", "", false);
        }}
        title="Change to drawer"
      />
      </View>
    );
  }
}