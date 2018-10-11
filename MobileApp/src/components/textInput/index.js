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
    error : false,
    iconName : null,
    iconPos : 'left'
    
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
          error,
          iconName,
          iconPos,
          ...attributes
          } = this.props;
          console.log(this.props)
    const containerStyle = {...styles.searchSection,
                           borderRadius, 
                           backgroundColor,
                           justifyContent,
                           alignSelf,
                           borderWidth,
                           borderColor,
                          };

    const inputStyle = {flex:1,color:inputColor,paddingRight : 46}

    return (
        <View style={[containerStyle, error ? styles.textInvalid : containerStyle]}>
        {this.props.iconName && this.props.iconPos == 'left' && <Icon style={[styles.searchIcon]} name={iconName} size={20} color = {iconColor} /> }
        {!this.props.iconName && this.props.iconPos == 'left' && <Icon style={[styles.searchSectionWoIcon]} name={iconName} size={30} color = {iconColor} /> }
        
        <TextInput
          {...attributes}
          style={[inputStyle,iconPos == 'right' ? styles.searchSectionLeft : inputStyle]}
          placeholder={placeholder}
          onChangeText={(searchString) => {this.setState({searchString})}}
          underlineColorAndroid="transparent"
          placeholderTextColor={placeholderTextColor}
          
        />

        {this.props.iconName && this.props.iconPos == 'right' && <Icon style={[styles.searchIconRight]} name={iconName} size={20} color = {iconColor} /> }
        {/* {!this.props.iconName && this.props.iconPos == 'right' && <Icon style={[styles.searchSectionWoIcon]} name={iconName} size={30} color = {iconColor} /> } */}

        </View>
      
        

    );
  
  }
}