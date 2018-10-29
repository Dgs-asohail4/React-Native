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
      <Text style={[awesome,styles.icon, secondaryColor]}>
        <Icon color={secondaryColor.color} name={this.state.hidden? 'eye-slash':'eye'} size={24}/>
      </Text>
    </Button>
  )};

  render() {
    const {baseColor}=this.props.globalStyles.textStyle;

    return (
      <TextInput
      autoCapitalize='none'
      style={[{width:300, height:60, backgroundColor:Theme[this.props.theme].colors.control.base, borderWidth:1, borderRadius:20,borderColor:Theme[this.props.theme].colors.border.base, padding:10}]}
      autoCorrect={false}
      placeholder={"Code"}
      placeholderTextColor={baseColor.color}
      label={this.renderInputLabel()}
      secureTextEntry={this.state.hidden}
      {...this.props}
    />
    );
  }
}