import React, { Component } from 'react';
import { Text, View,FlatList,Image } from 'react-native';
import Avatar from '../../../../components/avatar/container'
import {data} from '../../../../global/data'
const moment = require('moment');
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

export default class Social extends Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  state = {
    data: data.getNotifications(),
  };

  extractItemKey = (item) => `${item.id}`;

  renderAttachment = (item) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    const hasAttachment = item.attach !== undefined;
    return hasAttachment ? <View /> : <Image style={styles.attachment} source={item.attach} />;
  };

  renderItem = ({ item }) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    const{header6,primary2,secondary5,hintColor,baseColor}=this.props.globalStyles.textStyle
    return(
    <View style={styles.container}>
      <Avatar
        img={item.user.photo}
        circle
        style={styles.avatar}
        //badge={item.type}
      />
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.text}>
            <Text>
              <Text style={[header6,baseColor]}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
              <Text style={[primary2,baseColor]}> {item.description}</Text>
            </Text>
          </View>
          <Text
            style={[secondary5,hintColor]}>{moment().add(item.time, 'seconds').fromNow()}
          </Text>
        </View>
        {this.renderAttachment(item)}
      </View>
    </View>
  
  )}

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <FlatList
      style={styles.root}
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
    />
    );
  }
}