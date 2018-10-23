import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { TEXT_COLOR_PRIMARY, COLOR_PRIMARY } from '../../global/theme/default';
import Theme from '../../global/theme'

export default class BackButton extends Component {
  constructor(props){
      super(props)

  }
  render() {
    const {awesome,baseColor} = this.props.globalStyles.textStyle;
    return (
        <TouchableHighlight
         underlayColor={Theme[this.props.theme].colors.button.underlay}
         style={this.props.styles.menu}
         onPress={()=>this.props.navigation.goBack()}
        >
        <Text style={[awesome,baseColor]}>
            <Icon name={'md-arrow-round-back'} style={{margin:10}} size={30} color={Theme[this.props.theme].colors.text.base} />
        </Text>
        </TouchableHighlight>

    )
  }
}
