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
      console.log(this.props)
    return (
        <TouchableHighlight
         underlayColor={COLOR_PRIMARY}
         onPress={()=>this.props.navigation.toggleDrawer()}
        >
            <Icon name={'md-menu'} style={{margin:10}} size={30} color = {TEXT_COLOR_PRIMARY} />
        </TouchableHighlight>

    )
  }
}
