import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import MyCardView from '../../../../components/CardView';
export default class CardView extends Component {
  render() {
    return (
      <View>
        <MyCardView/>
      </View>
    );
  }
}