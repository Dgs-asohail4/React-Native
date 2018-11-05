import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import Tabs from '../../../../components/Tab';

import {_Login as Login,_LoginV2 as Login2} from '../../containers'


class LoginChadJson extends Component {
  constructor(props){
    super(props);
    this.state = {page:'first'};
  }
  render() {
      const styles =StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <View style={styles.container}>
        <Login navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default LoginChadJson