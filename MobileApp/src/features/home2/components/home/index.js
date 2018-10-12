import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ChangeStack } from '../../../../navigation/helper';


import Button from '../../../../components/button'
import { COLOR_PRIMARY } from '../../../../global/theme/default';

export default class HomeNew extends Component {
  render() {
    return (
      <View>
        <Button
        color={COLOR_PRIMARY}
        onPress={() => {
          ChangeStack(this.props, "app.splash", "", false);
        }}
        text="Change to drawer"
      />
      </View>
    );
  }
}