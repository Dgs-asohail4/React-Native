import React, {Component} from 'react';
import { View } from 'react-native';

import { VictoryPie } from 'victory-native';
import { Svg, Text as SvgText } from 'react-native-svg';
import { scale } from '../../utils/scale';
import StyleSheetFactory from './styles';

export default class ProgressChart extends Component {
  state = {
    percents: 72,
  };
  size = 120;
  fontSize = 25;

  componentDidMount() {
    this.setStateInterval = setInterval(this.updatePercent, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.setStateInterval);
  }

  updatePercent = () => {
    let positive = Math.random() > 0.5;
    if (this.state.percents > 95) {
      positive = false;
    } else if (this.state.percents < 60) {
      positive = true;
    }
    this.setState({
      percents: positive ? this.state.percents + 1 : this.state.percents - 1,
    });
  };

  getChartData = () => [
    { x: 1, y: this.state.percents },
    { x: 2, y: 100 - this.state.percents },
  ];

  onChartFill = (data) => {
    const themeColor = Theme[this.props.theme].colors.charts.followersProgress;
    return data.x === 1 ? themeColor : 'transparent';
  };

  render = () => {
    var RkTheme = {}
    RkTheme.current = Theme[this.props.theme];
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header4,header2,secondary2,baseColor} = this.props.globalStyles.textStyle;
    return(
    <View>
      <Text styles={[header4,baseColor]}>FOLLOWERS</Text>
      <View style={styles.chartContainer}>
        <Svg width={scale(this.size)} height={scale(this.size)}>
          <VictoryPie
            labels={[]}
            padding={0}
            standalone={false}
            width={scale(this.size)}
            height={scale(this.size)}
            style={{ data: { fill: this.onChartFill } }}
            data={this.getChartData()}
            cornerRadius={scale(25)}
            innerRadius={scale(40)}
          />
          <SvgText
            textAnchor="middle"
            verticalAnchor="middle"
            x={scale(this.size / 2)}
            y={scale(this.size / 2)}
            height={scale(this.fontSize)}
            fontSize={scale(this.fontSize)}
            fontFamily={RkTheme.current.fonts.family.regular}
            stroke={RkTheme.current.colors.text.base}
            fill={RkTheme.current.colors.text.base}>
            {`${this.state.percents}%`}
          </SvgText>
        </Svg>
        <View>
          <Text style={[header4,baseColor]}>REACH</Text>
          <Text style={[header2,baseColor]}>1 500 356</Text>
          <Text style={[secondary2,baseColor]}>+6 per day in average</Text>
        </View>
      </View>
    </View>
  )};
}