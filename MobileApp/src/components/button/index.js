import React, { Component } from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }}
  
  render() {
    const { text, onPress,color,borderRadius,borderColor} = this.props;
    const buttonStyle={...styles.buttonStyle,backgroundColor:color,borderRadius:borderRadius,borderColor:borderColor}
    return (
		  <TouchableOpacity style={buttonStyle}
			onPress={() => onPress(
      )}
		  >
			 <Text style={styles.textStyle}>{text}</Text>
		  </TouchableOpacity>
		);
     
    } 
}
