import React, { Component } from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_PRIMARY } from '../../global/theme/default';

export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    borderRadius: 0,
    color: COLOR_PRIMARY,
    borderColor: COLOR_PRIMARY,
  };

  render() {
    const { text, color, borderRadius, borderColor, ...attributes} = this.props;
    const buttonStyle={...styles.buttonStyle,
      backgroundColor:color,
      borderRadius:borderRadius,
      borderColor:borderColor
    }

    return (
		  <TouchableOpacity style={buttonStyle}
          {...attributes}
        >
			  <Text style={styles.textStyle}>{text}</Text>
		  </TouchableOpacity>
		);

    }
}
