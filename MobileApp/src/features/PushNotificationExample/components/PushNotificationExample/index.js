import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Button from '../../../../components/button'
import { pushNotifications } from '../../../../global/services'

export default class PushNotificationExample extends Component {

  handleOnPress = () => {
    pushNotifications.localNotification();
  };


  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          Press the button to see push Notification
        </Text>
        <Button
          text={'Press Me'}
          onPress={this.handleOnPress}/>
      </View>
    );
  }
}