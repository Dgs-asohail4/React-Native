import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

import Gallery from '../../../../components/Gallery/container'
import {data} from '../../../../global/data'

export default class Social extends Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase(),
  };

  state = {
    data:undefined
  }

  constructor(props) {
    super(props);
    const id = this.props.navigation.getParam('id', 1);
    this.state.data = data.getUser(id);
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <ScrollView style={styles.root}>
       <Gallery items={this.state.data.images} />
      </ScrollView>
    );
  }
}