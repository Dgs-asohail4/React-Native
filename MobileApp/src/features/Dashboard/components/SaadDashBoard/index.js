import React, { Component } from 'react';
import PieChartExample from '../../../../components/pieChartExample/container'
import StackedBarChartExample from '../../../../components/StackedBarChartExample/container'
import { Text, View } from 'react-native';

import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

export default class DashBoardV3 extends Component {
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <View>

        <PieChartExample />
        <StackedBarChartExample />
      </View>
      
          );
  }
  
}