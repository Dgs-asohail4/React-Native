import React, { Component } from 'react';
import { Text, View,ScrollView, FlatList, TouchableOpacity } from 'react-native';
import StyleSheetFactory from './styles';
import MyCardView1 from '../../../../components/CardView/Example1/container';
import Theme from '../../../../global/theme'

import {data} from '../../../../global/data'
const moment = require('moment');
export default class Articles extends Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  extractItemKey = (item) => `${item.id}`;


  onItemPressed = (item) => {
    this.props.navigation.navigate('article.articleview', { id: item.id });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <MyCardView1
        titleText = {item.header}
        subtitleText ={moment().add(item.time, 'seconds').fromNow()}
        likesCount = '18'
        commentsCount = '26'
        sharesCount = '5'
        backgroundColor={Theme[this.props.theme].colors.control.background}
        image = {item.photo}
      />
    </TouchableOpacity>
  );

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.extractItemKey}
        style={styles.container}
    />
    );
  }
}