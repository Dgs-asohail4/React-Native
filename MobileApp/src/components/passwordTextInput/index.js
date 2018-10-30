import React, { Component } from 'react';
import { Text, View,Button,TextInput,TouchableOpacity } from 'react-native';


import StyleSheetFactory from './styles';
import Theme from '../../global/theme'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class PasswordTextInput extends Component {


  constructor(props){
    super(props)
    this.state = {
      hidden: true,
    };
    this.focusInput = this._focusInput.bind(this);
  }


  onInputLabelPressed = () => {
    this.setState({ hidden: !this.state.hidden });
  };


  _focusInput() {
    this.refs.input.focus();
  }

  _displayLabel(label, labelStyle) {
    if (typeof label === 'string') {
      return (
        <Text style={labelStyle} onPress={this.focusInput}>{label}</Text>
      )
    } else {
      return React.cloneElement(label, {
        onPress: (e) => {
          this.refs.input.focus();
          label.props.onPress && label.props.onPress(e)
        },
        style: [labelStyle, label.props.style]
      });
    }
  }

  renderInputLabel = () => {
    const {awesome,secondaryColor}=this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
    <TouchableOpacity
      style={styles.button}
      onPress={this.onInputLabelPressed}>
      <Icon style={[awesome,styles.icon, secondaryColor]} color={secondaryColor.color} name={this.state.hidden? 'eye-slash':'eye'} size={24}/>
    </TouchableOpacity>
  )};

  render() {
    const {baseColor}=this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])

    return (

    <View activeOpacity={1} onPress={this.focusInput} style={styles.container}>
      {this._displayLabel(this.renderInputLabel(), styles.label)}
      <TextInput
      autoCapitalize='none'
      style={[styles.input]}
      autoCorrect={false}
      placeholder={"Code"}
      ref={'input'}
      underlineColorAndroid='transparent'
      placeholderTextColor={baseColor.color}
      secureTextEntry={this.state.hidden}
      {...this.props}
    />
    </View>

    );
  }
}