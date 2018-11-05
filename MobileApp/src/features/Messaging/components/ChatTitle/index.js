import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

export default class ChatTitle extends Component {

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header5,secondar3,secondaryColor,baseColor} = this.props.globalStyles.textStyle;
    const {user, navigation } = this.props
    return(
    <TouchableOpacity onPress={() => this.props.onNavigationTitlePressed(navigation, user)}>
      <View style={styles.header}>
        <Text style={[header5,baseColor]}>{`${user.firstName} ${user.lastName}`}</Text>
        <Text style={[secondar3,secondaryColor]}>Online</Text>
      </View>
    </TouchableOpacity>
    )
  }
}