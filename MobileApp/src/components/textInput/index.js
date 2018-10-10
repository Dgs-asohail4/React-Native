import React, { Component } from 'react';
import { Text, View,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';



export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  static defaultProps = {
    
    borderRadius: 0,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignSelf : 'center',
    borderRadius:0,
    borderWidth: 1,
    borderColor: '#000',
    iconColor:'#424242',
    inputColor:'#424242',
    placeholderTextColor : '#424242',
    placeholder: 'Type your Input Address',
    
  };


  render() {
    const {
          borderRadius,
          backgroundColor,
          justifyContent,
          alignSelf,
          borderWidth,
          borderColor,
          iconColor, 
          inputColor,
          placeholderTextColor,
          placeholder,
          
          } = this.props;
    const containerStyle = {...styles.searchSection,
                           borderRadius, 
                           backgroundColor,
                           justifyContent,
                           alignSelf,
                           borderWidth,
                           borderColor,
                          };

    const inputStyle = {flex:1,color:inputColor}

    return (
        <View style={[containerStyle]}>
          <Icon style={[styles.searchIcon]} name="ios-search" size={20} color = {iconColor} />
          <TextInput
            style={[inputStyle]}
            placeholder={placeholder}
            onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
            placeholderTextColor={placeholderTextColor}
            
          />
        </View>

    );
  
  }
}