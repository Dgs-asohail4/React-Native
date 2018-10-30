import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
 } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import Avatar from '../../../../components/avatar/container'
import {data} from '../../../../global/data'


const moment = require('moment');
export default class Messaging extends Component {

  static navigationOptions = {
    title: 'Comments'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    const postId = this.props.navigation.getParam('postId', undefined);
    this.state = {
      data: data.getComments(postId),
    };
  }

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = (item) => {
    const navigationParams = { id: item.user.id };
    this.props.navigation.navigate('social.userprofilev1', navigationParams);
  };

  renderSeparator = () => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
    <View style={styles.separator} />
  )};

  renderItem = ({ item }) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header5,secondary4,hintColor,baseColor,mediumLine,primary3} = this.props.globalStyles.textStyle;

    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => this.onItemPressed(item)}>
        <Avatar  img={item.user.photo} small />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={[header5,baseColor]}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
          <Text style={[secondary4,hintColor]}>
            {moment().add(item.time, 'seconds').format('LT')}
          </Text>
        </View>
        <Text style={[primary3,mediumLine,baseColor]}>{item.text}</Text>
      </View>
    </View>
  )};

  render = () => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    return (
    <FlatList
      style={styles.root}
      data={this.state.data}
      extraData={this.state}
      ItemSeparatorComponent={this.renderSeparator}
      keyExtractor={this.extractItemKey}
      renderItem={this.renderItem}
    />
  )};
}