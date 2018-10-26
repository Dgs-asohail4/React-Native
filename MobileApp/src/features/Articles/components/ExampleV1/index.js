import React, { Component } from 'react';
import { Text, View ,ScrollView, FlatList, TouchableOpacity} from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import {data} from '../../../../global/data'
const moment = require('moment');
import MyCardView2 from '../../../../components/CardView/Example2/container';
export default class Articles extends Component {

  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = ({ item }) => {
    this.props.navigation.navigate('article.articleview', { id: item.id });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
       
       <MyCardView2
          titleText = {item.header}
          subtitleText = {moment().add(item.time, 'seconds').fromNow()}
          likesCount = '18'
          commentsCount = '26'
          sharesCount = '5'
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
        style={styles.root}
    />
    );
  }
}