import React, { Component } from 'react';
import { Text, View } from 'react-native';

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'

import PropTypes from 'prop-types';

export default class PaginationIndicator extends React.Component {
  static propTypes = {
    current: PropTypes.number,
    length: PropTypes.number.isRequired,
  };
  static defaultProps = {
    current: 0,
  };

  renderIndicatorItem = (index, selected, styles) => (
    <View style={selected ? [styles.base, styles.selected] : styles.base} key={index} />
  );

  renderIndicators = (styles) => {
    const indicators = [];
    for (let i = 0; i < this.props.length; i += 1) {
      indicators.push(this.renderIndicatorItem(i, i === this.props.current, styles));
    }
    return indicators;
  };

  render = () => {
   const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
    <View style={styles.container}>
      {this.renderIndicators(styles)}
    </View>
  )};
}
