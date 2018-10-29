import React, { Component } from 'react';
import { Text, View,Button,TextInput } from 'react-native';


import StyleSheetFactory from './styles';
import Theme from '../../global/theme'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class PasswordTextInput extends Component {

  state = {
    hidden: true,
  };

  onInputLabelPressed = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  renderInputLabel = () => {
    const {awesome,secondaryColor}=this.props.globalStyles.textStyle;
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
    <Button
      style={styles.button}
      title=''
      onPress={this.onInputLabelPressed}>

      <Text style={[awesome,styles.icon, secondaryColor]}> <Icon color={secondaryColor.color} name={'slashEye'} size={20}/></Text>
    </Button>
  )};

  render() {
    
    return (
      <TextInput
      autoCapitalize='none'
      style={[]}
      autoCorrect={false}
      label={this.renderInputLabel()}
      secureTextEntry={this.state.hidden}
      {...this.props}
    />
    );
  }
}