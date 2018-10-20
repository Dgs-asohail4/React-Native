import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { TEXT_COLOR_PRIMARY, COLOR_PRIMARY } from '../../global/theme/default';
import { Navigation } from 'react-native-navigation';


export default class DrawerIcon extends Component {
  constructor(props){
      super(props)

  }
  render() {
    return (
        <TouchableHighlight
         onPress={this.props._onPress}
        >
            <Icon name={'md-menu'} size={40} color = {COLOR_PRIMARY} />
        </TouchableHighlight>

    )
  }
}
