import React,{Component} from 'react';
import { View, Text} from 'react-native';

import { VictoryPie } from 'victory-native';
import { Svg, Text as SvgText } from 'react-native-svg';
import { scale } from '../../utils/scale';

import StyleSheetFactory from './styles';

import Theme from '../../global/theme'

export default class DoughnutChart extends Component {

    constructor(props){
        super(props)
        this.state = {
            selected: 0,
            data: [
              {
                x: 1,
                y: 240,
                title: '24%',
                name: 'Likes',
                color: Theme[this.props.theme].colors.charts.doughnut[0],
              },
              {
                x: 2,
                y: 270,
                title: '27%',
                name: 'Comments',
                color: Theme[this.props.theme].colors.charts.doughnut[1],
              },
              {
                x: 3,
                y: 170,
                title: '17%',
                name: 'Shares',
                color: Theme[this.props.theme].colors.charts.doughnut[2],
              },
              {
                x: 4,
                y: 320,
                title: '32%',
                name: 'People',
                color: Theme[this.props.theme].colors.charts.doughnut[3],
              },
            ],
          };
          size = 300;
          fontSize = 40;

    }

  computeColors = () => this.state.data.map(i => i.color);

  onPeopleChartPressed = (event, props) => {
    this.setState({
      selected: props.index,
    });
  };

  renderMarkdown = () => this.state.data.map(this.renderMarkdownItem);

  renderMarkdownItem = (item) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {primary3,baseColor} = this.props.globalStyles.textStyle;
    return(
    <View key={item.name} style={styles.legendItem}>
      <View style={[styles.itemBadge, { backgroundColor: item.color }]} />
      <Text style={[primary3, baseColor]}>{item.name}</Text>
    </View>
  )};

  render = () => {
    const {header4, baseColor, primary3} = this.props.globalStyles.textStyle;
    var RkTheme = {};
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    RkTheme.current = Theme[this.props.theme];
    return (
    <View>
      <Text style={[header4,baseColor]}>AUDIENCE OVERVIEW</Text>
      <View style={{ alignSelf: 'center' }}>
        <Svg width={scale(this.size)} height={scale(this.size)}>
          <VictoryPie
            labels={[]}
            width={scale(this.size)}
            height={scale(this.size)}
            colorScale={this.computeColors()}
            data={this.state.data}
            standalone={false}
            padding={scale(25)}
            innerRadius={scale(70)}
            events={[{
              target: 'data',
              eventHandlers: {
                onPressIn: this.onPeopleChartPressed,
              },
            }]}
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
            {this.state.data[this.state.selected].title}
          </SvgText>
        </Svg>
      </View>
      <View style={styles.legendContainer}>
        {this.renderMarkdown()}
      </View>
    </View>
  )};
}
