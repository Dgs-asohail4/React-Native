import React, { Component } from 'react';
import { Text, View,FlatList,Image,TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/avatar/container'
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import {data} from '../../../../global/data'
const moment = require('moment');
export default class Articles extends Component {

  static navigationOptions = {
    title: 'Blogposts'.toUpperCase(),
  };

  state = {
    data: data.getArticles('post'),
  };

  extractItemKey = (item) => `${item.id}`;

  onItemPressed = (item) => {
    this.props.navigation.navigate('article.articleview', { id: item.id });
  };
 
  renderItem = ({item}) => {
    console.log(item);
    const {primary3, mediumLine,header6,secondary2,hintColor, baseColor} =this.props.globalStyles.textStyle;
    var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const blog = this.props.globalStyles.modalStyle.blog;
    styles = {...styles, ...blog}
    return(
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.onItemPressed(item)}>
        <View style={[styles.card, {backgroundColor:Theme[this.props.theme].colors.control.background,borderColor:Theme[this.props.theme].colors.control.background}]}>
          <View key={item.key}>
              <Image source={item.photo} style={{width:null,height:140}}/>
              <View style={styles.content}>
                <View>
                  <Text style={[mediumLine,primary3, baseColor, {paddingHorizontal:10}]} numberOfLines={2}>{item.text}</Text>
                </View>
              </View>
              <View style={styles.footer}>
                  <View style={[styles.userInfo]}>
                    <View style={{flex: 1,flexDirection: 'row'}}>
                      <Avatar styles={[styles.avatar]} small circle img={item.user.photo} />
                      <Text style={[header6,baseColor,{textAlignVertical:'center', paddingHorizontal:10}]}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
                    </View>
                    <View style={{justifyContent:'space-evenly'}}>
                      <Text style={[secondary2,hintColor]}>{moment().add(item.time, 'seconds').fromNow()}</Text>
                    </View> 
                    </View>
              </View>
            
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const blog = this.props.globalStyles.modalStyle.blog;
    styles = {...styles, ...blog}
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