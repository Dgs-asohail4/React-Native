import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';
import MyTextInput from '../../../../components/textInput';
export default class TextInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this._onClick = this._onClick.bind(this);
  }

  _onClick = () => {
    this.setState({text:'Ahsan'})
  }
  render(){
    return (
            <View style={{flex:1, justifyContent:'center'}}>
            
              <MyTextInput 
                backgroundColor = 'brown' 
                alignSelf = 'center' 
                // borderRadius = {30} 
                iconColor = 'black'
                inputColor = 'black'
                placeholderTextColor = 'black' />
              
              <MyTextInput 
                backgroundColor = 'green' 
                alignSelf = 'center' 
                borderRadius = {10} 
                iconColor = 'black'
                inputColor = 'black'
                placeholderTextColor = 'black' />

                <MyTextInput 
                backgroundColor = 'green' 
                alignSelf = 'center' 
                borderRadius = {20} 
                iconColor = 'black'
                inputColor = 'black'
                placeholderTextColor = 'black' />

                <MyTextInput 
                backgroundColor = 'blue' 
                alignSelf = 'center' 
                borderRadius = {30} 
                iconColor = 'black'
                inputColor = 'black'
                placeholderTextColor = 'black' />


            
            </View>
          )
  }
}