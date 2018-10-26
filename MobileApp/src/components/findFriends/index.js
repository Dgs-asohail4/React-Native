import React, { Component } from 'react';
import { Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes, } from 'react-native';

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DEFUALT_THEME } from '../../global/config';

export default class FindFriends extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    color: PropTypes.string,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    style: ViewPropTypes.style,
  };
  static defaultProps= {
    selected: false,
    color: Theme[DEFUALT_THEME].colors.text.base,
    onPress: (() => null),
    style: {},
  };
  render() {
    const color = this.props.selected ? this.props.color : Theme[this.props.theme].colors.disabled
    const {header6,awesome,small}=this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
      <TouchableOpacity style={[styles.wrapper, this.props.style]} onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.text}>
            <Icon style={[awesome,styles.icon]} name={this.props.icon} color={color} size={25} />
            <Text style={[header6,color ]}>{`Find Friends With ${this.props.text}`}</Text>
          </View>
          <Icon style={[small,awesome]} name={'md-chevron-right'} color={color} size={25} />
        </View>
      </TouchableOpacity>
    );
  }
}