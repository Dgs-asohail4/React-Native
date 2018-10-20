import React, { Component } from 'react';
import { Text, View, ToastAndroid} from 'react-native';
import Button from '../../../../components/button'
import styles from './styles';
export default class ButtonScreen extends Component {
  constructor(props) {
    super(props);
    this.state ={}

  }

  render() {
    return (
      <View >
     <Button
     color='brown'
     onPress={()=>{}}
     text="Square"
     />
      <Button
      color='blue'
      borderRadius={5}
      onPress={()=>{}}
      text="rounded"
      textColor={'red'}
     />

       <Button
       color='green'
       borderRadius={20}
       onPress={()=>{}}
       text="oval"
       />
        <Button
        color='red'
        borderColor='black'
        onPress={()=>{
          alert("alert button")
        }}
        text="alert"
       />
       <Button
        color='grey'
        borderRadius={150}
        onPress={()=>{
          ToastAndroid.show('Toast', ToastAndroid.LONG)
        }}
        text="toast"
       />
        </View>
        )
  }
}