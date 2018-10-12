import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

import styles from './styles';
import MyTextInput from '../../../../components/textInput';
export default class TextInputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text1: '',text2:'',text3:'',text4:''};
    this._onClick = this._onClick.bind(this);
  }

  _onClick = (key, value) => {
    this.setState({[key]: value })
  }
  
  render(){
    return (
            <View style={{flex:1, justifyContent:'center'}}>
            
              <MyTextInput 
                // onFocus={() => this._onClick("text1", "Zubair") }
                // value = {this.state.text1}
                backgroundColor = 'transparent' 
                alignSelf = 'center'
                error = {true}
                // borderRadius = {30} 
                iconColor = 'black'
                inputColor = 'black'
                placeholderTextColor = 'black' 
                iconName = 'ios-search'
                iconPos = 'right'/>
              
              <MyTextInput 
                // onFocus={() => this._onClick("text2", "Ahsan") }
                // value = {this.state.text2}
                backgroundColor = 'green' 
                alignSelf = 'center' 
                borderRadius = {10} 
                iconColor = 'black'
                inputColor = 'black'
                iconName = 'ios-search'

                placeholderTextColor = 'black' />

              <MyTextInput 
                // onFocus={() => this._onClick("text3", "Zubair1") }
                // value = {this.state.text3}
                backgroundColor = 'green' 
                alignSelf = 'center' 
                borderRadius = {20} 
                iconColor = 'black'
                inputColor = 'black'
                placeholderTextColor = 'black' />

              <MyTextInput 
                // onFocus={() => this._onClick("text4", "Ahsan1") }
                // value = {this.state.text4}
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