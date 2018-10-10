import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View>
        <View style={[styles.searchSection,styles.Background]}>
          <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          <TextInput 
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={[styles.searchSection,styles.Background]}>
          <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          <TextInput 
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={[styles.searchSection,styles.Background]}>
          <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/>
          <TextInput 
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
          />
        </View>

      </View>
    );
  }
}