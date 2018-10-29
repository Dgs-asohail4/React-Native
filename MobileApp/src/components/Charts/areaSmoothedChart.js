import React, {Component} from 'react';

import {
  View,
  Text,
  Dimensions,
} from 'react-native';

import {
  VictoryChart,
  VictoryAxis,
  VictoryArea,
} from 'victory-native';

import Theme from '../../global/theme'

export default class AreaSmoothedChart extends Component {
  state = {
    data: [
      [
        { x: 1, y: 1.0, key: 0 },
        { x: 2, y: 1.5, key: 1 },
        { x: 3, y: 1.0, key: 2 },
        { x: 4, y: 0.5, key: 3 },
        { x: 5, y: 1.0, key: 4 },
        { x: 6, y: 2.0, key: 5 },
        { x: 7, y: 2.5, key: 6 },
      ],
      [
        { x: 1, y: 1.5, key: 0 },
        { x: 2, y: 2.0, key: 1 },
        { x: 3, y: 1.5, key: 2 },
        { x: 4, y: 0.8, key: 3 },
        { x: 5, y: 1.5, key: 4 },
        { x: 6, y: 2.6, key: 5 },
        { x: 7, y: 3.3, key: 6 },
      ],
      [
        { x: 1, y: 2.0, key: 0 },
        { x: 2, y: 2.5, key: 1 },
        { x: 3, y: 2.0, key: 2 },
        { x: 4, y: 1.1, key: 3 },
        { x: 5, y: 2.0, key: 4 },
        { x: 6, y: 3.2, key: 5 },
        { x: 7, y: 4.0, key: 6 },
      ],
      [
        { x: 1, y: 2.5, key: 0 },
        { x: 2, y: 3.0, key: 1 },
        { x: 3, y: 2.5, key: 2 },
        { x: 4, y: 1.4, key: 3 },
        { x: 5, y: 2.5, key: 4 },
        { x: 6, y: 3.7, key: 5 },
        { x: 7, y: 4.7, key: 6 },
      ],
    ],
  };

  componentWillMount() {
    this.size = Dimensions.get('window').width;
  }

  renderChartAreas = (colors) => this.state.data.reverse().map((area, index) => (
    <VictoryArea
      key={`${area.length * index}`}
      interpolation="natural"
      style={{
          data: {
            fill: colors[index],
            stroke: colors[index],
          },
        }}
      data={area}
    />
  ));

  render = () => {
    var colors = Theme[this.props.theme].colors.charts.followersArea;
    const {header4, baseColor} = this.props.globalStyles.textStyle;
    var RkTheme = {};
    RkTheme.current = Theme[this.props.theme];
    return (
    <View>
      <Text style={[header4,baseColor]}>NEW FOLLOWERS</Text>
      <VictoryChart
        padding={{
          top: 20, left: 40, right: 15, bottom: 40,
        }}
        width={this.size - 60}>
        <VictoryAxis
          tickValues={['Sun', 'Mon', 'Tue', ' Wed', 'Thu', 'Fri', 'Sat']}
          style={{
              axis: { stroke: 'transparent' },
              tickLabels: {
                fontSize: 14,
                stroke: RkTheme.current.colors.text.secondary,
                fill: RkTheme.current.colors.text.secondary,
                fontFamily: RkTheme.current.fonts.family.regular,
                strokeWidth: 0.5,
              },
            }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={['10k', '20k', '30k', '40k']}
          style={{
              axis: { stroke: 'transparent' },
              grid: { stroke: RkTheme.current.colors.disabled, strokeWidth: 0.5 },
              tickLabels: {
                fontSize: 14,
                stroke: RkTheme.current.colors.text.secondary,
                fill: RkTheme.current.colors.text.secondary,
                fontFamily: RkTheme.current.fonts.family.regular,
                strokeWidth: 0.5,
              },
            }}
        />
        {this.renderChartAreas(colors)}
      </VictoryChart>
    </View>
  )}
}
