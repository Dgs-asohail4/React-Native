import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  _AreaChart as AreaChart,
  _AreaSmoothedChart as AreaSmoothedChart,
  // _DoughnutChart as DoughnutChart,
  // _ProgressChart as ProgressChart
} from '../../../../components/Charts/container';

export default class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard'.toUpperCase(),
  };

  constructor(props){
    super(props)
    this.state = {
      data: {
        statItems: [
          {
            name: 'Stars',
            value: '4,512',
            icon: 'github',
            background: (theme)=> theme.colors.dashboard.stars,
          },
          {
            name: 'Tweets',
            value: '2,256',
            icon: 'twitter',
            background: (theme)=> theme.colors.dashboard.tweets,
          },
          {
            name: 'Likes',
            value: '1,124',
            icon: 'facebook',
            background:  (theme)=> theme.colors.dashboard.likes,
          },
        ],
      },
    }
  }

  renderStatItem = (item) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header6, secondary7, awesome,hero,baseColor} = this.props.globalStyles.textStyle;

    return (
    <View style={[styles.statItemContainer, { backgroundColor: item.background(Theme[this.props.theme]) }]} key={item.name}>
      <View>
        <Text  style={[header6, baseColor,styles.statItemValue]}>{item.value}</Text>
        <Text  style={[secondary7, baseColor, styles.statItemName]}>{item.name}</Text>
      </View>
      <Text style={[awesome,hero,baseColor,styles.statItemIcon]}>
        <Icon size={30} style={styles.statItemIcon} name={item.icon} />
      </Text>
    </View>
  )};

  render = () => {
    var RkTheme = {}
    RkTheme.current =Theme[this.props.theme];
    const styles = StyleSheetFactory.getSheet(RkTheme.current)
    const chartBackgroundStyle = { backgroundColor: RkTheme.current.colors.control.background };
    return (
      <ScrollView style={styles.screen}>
        <View style={styles.statItems}>
          {this.state.data.statItems.map(this.renderStatItem)}
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <AreaChart />
        </View>
        <View style={[styles.chartBlock, chartBackgroundStyle]}>
          <AreaSmoothedChart />
        </View>
      </ScrollView>
    );
  };
}

