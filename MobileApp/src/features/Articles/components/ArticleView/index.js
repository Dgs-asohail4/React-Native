import React, { Component } from 'react';
import { Text, View,TouchableOpacity,ScrollView,Image } from 'react-native';

import StyleSheetFactory from './styles';
import {data} from '../../../../global/data'
import Theme from '../../../../global/theme'
const moment = require('moment');
import SocialBar from '../../../../components/SocialBar/container'
import Avatar from '../../../../components/avatar/container'
export default class Articles extends Component {
  static navigationOptions = {
    title: 'Article View'.toUpperCase(),
  };
  constructor(props) {
    super(props);
    const articleId = this.props.navigation.getParam('id', 1);
    this.data = data.getArticle(articleId);
  }

  onAvatarPressed = () => {
    this.props.navigation.navigate('social.userprofile1', { id: this.data.user.id });
  };
  render() {
    var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header4,secondary2,hintColor,primary3,bigLine,baseColor}=this.props.globalStyles.textStyle;
    var article = this.props.globalStyles.modalStyle.article;
    styles = {...styles, ...article}
    return (
      <ScrollView style={styles.root}>
      <View>
        <Image source={this.data.photo} style={[styles.img,{width:null,height:200}]} />
        <View style={[styles.header,{flexDirection:'row', marginHorizontal:10}]}>
          <View>
            <Text style={[styles.title,header4,baseColor]} >{this.data.header}</Text>
            <Text style={[secondary2, hintColor]}>
              {moment().add(this.data.time, 'seconds').fromNow()}
            </Text>
          </View>
          <TouchableOpacity onPress={this.onAvatarPressed} style={{justifyContent:'center'}}>
            <Avatar circle small img={this.data.user.photo} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View>
            <Text style={[primary3, bigLine,baseColor]}>{this.data.text}</Text>
          </View>
        </View>
        <View style={[styles.footer,{flexDirection:'row'}]}>
          <SocialBar space />
        </View>
      </View>
    </ScrollView>
    );
  }
}