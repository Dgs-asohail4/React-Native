import React from 'react'
import {
  View,
  Text,
  AsyncStorage
} from 'react-native'

import styles from './styles'
import { ChangeStack } from '../../../../navigation/helper'
import { USER_KEY } from '../../../../global/config'
import Bar from '../../../../components/progress/Bar'
export default class Splash extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }


  async animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout( () => {
      this.setState({ indeterminate: false });
      var interval = setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1000000;
          clearInterval(interval);
          try {
            AsyncStorage.getItem(USER_KEY).then((user)=>{
              console.log('user: ', user)
              if (user) {
                ChangeStack(this.props, "Home", "Home", true);
              } else {
                ChangeStack(this.props, "Auth", "", false);
              }
            })

          } catch (err) {
            console.log('error: ', err)
            ChangeStack(this.props, "Auth", "", false);
          }
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  componentDidMount() {
    this.animate();


  //  ChangeStack(this.props, "app.home", "Home");

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
        <Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
      </View>
    )
  }
}
