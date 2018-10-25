import React, { Component } from 'react';
import { Text, View } from 'react-native';

import PropTypes from 'prop-types'
import StyleSheetFactory from './styles';
import Theme from '../../global/theme'
import Icon from 'react-native-vector-icons/FontAwesome'
import { DEFUALT_THEME } from '../../global/config';

import Switch from '../Switch/container'

export default class SocialSetting extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    selected: PropTypes.bool,
    tintColor: PropTypes.string,
  };

  static defaultProps = {
    selected: false,
    tintColor: Theme[DEFUALT_THEME].colors.accent,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  }

  onSwitchValueChanged = (value) => {
    this.setState({ selected: value });
  };

  render() {
    const color = this.state.selected ? this.props.tintColor : Theme[this.props.theme].colors.disabled;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    const {awesome,large,small,baseColor} = this.props.globalStyles.textStyle;
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={[awesome,large, styles.icon]}>
            <Icon name={this.props.icon} size={20} color={color} />
          </Text>
          <Text style={[small,{color}]}>{this.props.name}</Text>
        </View>


        <Switch theme={this.props.theme} value={this.state.selected} onValueChange={this.onSwitchValueChanged} />
      </View>
    );
  }
}