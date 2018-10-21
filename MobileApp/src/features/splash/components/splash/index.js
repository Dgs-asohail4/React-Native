import React from 'react'
import {
  View,
  Text,
  AsyncStorage,
  StatusBar,
  Dimensions,
  Image
} from 'react-native'

import StyleSheetFactory from './styles'
import { ChangeStack } from '../../../../navigation/helper'
import { USER_KEY } from '../../../../global/config'
import ProgressBar from '../../../../components/progress/ProgressBar2'
import {scale} from '../../../../utils/scale';
import Theme from '../../../../global/theme'

let timeFrame = 500;
export default class Splash extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(true, 'none');

    this.timer = setInterval(() => {
      if (this.state.progress == 1) {
        clearInterval(this.timer);
        setTimeout(() => {
          StatusBar.setHidden(false, 'slide');
          ChangeStack(this.props, "Home", "Home", true);
        }, timeFrame);
      } else {
        let random = Math.random() * 0.5;
        let progress = this.state.progress + random;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({progress});
      }
    }, timeFrame)
  }

  render() {
    let width = Dimensions.get('window').width;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <View style={styles.container}>
        <View>
          <Image style={[styles.image, {width}]} source={require('../../../../global/assets/img/splashBack.png')}/>
          <View style={styles.text}>
            <Text style={styles.hero}>React Native</Text>
            <Text style={styles.appName}>DGS-ISKY UIKIT</Text>
          </View>
        </View>
        <ProgressBar
          color={Theme[this.props.theme].colors.accent}
          style={styles.progress}
          progress={this.state.progress} width={scale(320)}/>
      </View>
    )
  }
}
