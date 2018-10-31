import React, { Component } from 'react';
import { Text, View,FlatList,Image } from 'react-native';
import Avatar from '../../../../components/avatar/container'
import {data} from '../../../../global/data'
import SocialBar from '../../../../components/SocialBar/container'
const moment = require('moment');
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

export default class Social extends Component {
  static navigationOptions = {
    title: 'Feed'.toUpperCase(),
  };

  state = {
    data: data.getArticles('post'),
  };

  extractItemKey = (item) => `${item.id}`;

  renderItem = ({ item }) => {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const{header4,hintColor,secondary2,baseColor,primary3}=this.props.globalStyles.textStyle
    return(
    <View style={styles.card}>
      <View style={{flex:1,flexDirection:'row'}}>
        <Avatar
          small
          style={styles.avatar}
          img={item.user.photo}
        />
        <View style={{marginVertical:10}}>
          <Text style={[header4,baseColor]}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
          <Text style={[secondary2,hintColor]}>{moment().add(item.time, 'seconds').fromNow()}</Text>
        </View>
      </View>
      <Image style={[{width:null,height:200}]}source={item.photo} />
      <View>
        <Text style={[primary3,baseColor,{margin:10}]}>{item.text}</Text>
      </View>
      <View style={[{marginVertical:20}]}>
        <SocialBar />
      </View >
    </View>
  );
    }
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