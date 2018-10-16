import React, { Component } from 'react';
import { Text, View ,TouchableOpacity, ScrollView} from 'react-native';

import styles from './styles';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    containerStyle : styles.container,
    data : []
  };

  render() {
    const {containerStyle, ...restProps} =  this.props
    return (
      <ScrollView contentContainerStyle={containerStyle} {...restProps} >
        {
            this.props.data.map( (item, index) =>
              this.props.renderRow(item)
            )
        }
      </ScrollView>
    );
  }
}