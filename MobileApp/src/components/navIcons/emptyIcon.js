import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { TEXT_COLOR_PRIMARY, COLOR_PRIMARY } from '../../global/theme/default';
import { Navigation } from 'react-native-navigation';


export default class EmptyIcon extends Component {
  constructor(props){
      super(props)

  }
  render() {
    return (
        <View>
        </View>

    )
  }
}
