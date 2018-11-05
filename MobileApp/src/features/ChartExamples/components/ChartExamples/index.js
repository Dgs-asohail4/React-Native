import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import styles from './styles';
import Theme from '../../../../global/theme'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width
const chartConfig = (theme) => ({
  backgroundColor:Theme[theme].colors.control.background,
  backgroundGradientFrom: Theme[theme].colors.gradients.axp[0],
  backgroundGradientTo: Theme[theme].colors.gradients.axp[1],
//  color: (theme) => Theme[theme].colors.text.base
})


export default class ChartExamples extends Component {


  render() {
    const {baseColor} = this.props.globalStyles.textStyle;

    return (
      <ScrollView style={{backgroundColor:Theme[this.props.theme].colors.screen.scroll}}>
      <Text style={[baseColor]}>
        Bezier Line Chart
      </Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }]
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            chartConfig={chartConfig(this.props.theme)}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        <Text style={[baseColor]}>
          Bezier Line Chart 2
        </Text>
          <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [ 20, 45, 28, 80, 99, 43 ]
            }]
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig(this.props.theme)}
        />
        <Text style={[baseColor]}>
          Bezier Progress Chart
        </Text>
        <ProgressChart
          data={[0.4, 0.6, 0.8]}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig(this.props.theme)}
        />
        <Text style={[baseColor]}>
            Bezier Bar Chart
          </Text>
        <BarChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [ 20, 45, 28, 80, 99, 43 ]
            }]
          }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig(this.props.theme)}
        />

        <Text style={[baseColor]}>
         Bezier Pie Chart
        </Text>
        <PieChart
          data={[
            { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'New York', population: 8538000, color: '#000', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
          ]}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig(this.props.theme)}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
        <Text style={[baseColor]}>
        Bezier Commit Map
       </Text>

        <ContributionGraph
          values={[
            { date: '2017-01-02', count: 1 },
            { date: '2017-01-03', count: 2 },
            { date: '2017-01-04', count: 3 },
            { date: '2017-01-05', count: 4 },
            { date: '2017-01-06', count: 5 },
            { date: '2017-01-30', count: 2 },
            { date: '2017-01-31', count: 3 },
            { date: '2017-03-01', count: 2 },
            { date: '2017-04-02', count: 4 },
            { date: '2017-03-05', count: 2 },
            { date: '2017-02-30', count: 4 }
          ]}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig(this.props.theme)}
        />
    </ScrollView>
    );
  }
}