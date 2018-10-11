import React, { Component } from 'react';
import { Text, View} from 'react-native';
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
     <Button  color='brown'style={styles.button1}
     onPress={()=>{}}
     text="Square"
     />
      <Button  color='blue'borderRadius={5}style={styles.button2}
     onPress={()=>{}}
     text="rounded"
     />
     
       <Button  color='green'borderRadius={20}style={styles.button3}
       onPress={()=>{}}
       text="oval"
       />
        <Button  color='red'borderColor='black'style={styles.button4}
        onPress={()=>{
          alert("alert button")
        }}
        text="alert"
       />
       <Button  color='grey'borderRadius={150}style={styles.button4}
        onPress={()=>{
        }}
        text="toast"
       />
        </View>
        )
  }
}