import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

import Bar from '../../../../components/progress/Bar'
import Pie from '../../../../components/progress/Pie'
import Circle from '../../../../components/progress/Circle'
import CircleSnail from '../../../../components/progress/CircleSnail'


export default class Progressbarexample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 0;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Progress Example</Text>
        <Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
        <View style={styles.circles}>
        <Circle
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
        <Pie
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
        <Circle
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
          direction="counter-clockwise"
        />
        <View style={styles.circles}>
        <CircleSnail style={styles.progress} />
        <CircleSnail
          style={styles.progress}
          color={['#F44336', '#2196F3', '#009688']}
        />
      </View>
      </View>
      </View>
    );
  }
}