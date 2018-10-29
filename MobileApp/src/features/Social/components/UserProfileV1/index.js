import React, { Component } from 'react';
import { Text, View, ScrollView,Button,TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/avatar/container'
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'
import formatNumber from '../../../../utils/textUtils';

import Gallery from '../../../../components/Gallery/container'
import {data} from '../../../../global/data'

export default class Social extends Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase(),
  };

  state = {
    data:undefined
  }

  constructor(props) {
    super(props);
    const id = this.props.navigation.getParam('id', 1);
    this.state.data = data.getUser(id);
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header2,header3,secondary1,hintColor,baseColor,clear, accentColor}=this.props.globalStyles.textStyle;
    const link=this.props.globalStyles.inputStyle;
    return (
      <ScrollView style={styles.root}>
        <View style={[styles.header, styles.bordered]}>
        <Avatar big img={this.state.data.photo} />
        <Text style={[header2,baseColor]}>{`${this.state.data.firstName} ${this.state.data.lastName}`}</Text>
      </View>
      <View style={[styles.userInfo, styles.bordered]}>
        <View style={styles.section}>
          <Text style={[header3,styles.space,baseColor]}>{this.state.data.postCount}</Text>
          <Text style={[secondary1,hintColor]}>Posts</Text>
        </View>
        <View style={styles.section}>
          <Text style={[header3,styles.space,baseColor]}>{formatNumber(this.state.data.followersCount)}</Text>
          <Text style={[secondary1,hintColor]}>Followers</Text>
        </View>
        <View style={styles.section}>
          <Text style={[header3,styles.space,baseColor]}>{this.state.data.followingCount}</Text>
          <Text style={[secondary1,hintColor]}>Following</Text>
        </View>
      </View>
      <View style={[styles.buttons,{justifyContent:'space-evenly'}]}>
        <TouchableOpacity style={[styles.button]}>
          <Text style={[accentColor,{textAlign:'center'}]}>FOLLOW</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={[styles.button]}>
          <Text style={[accentColor,{textAlign:'center'}]}>MESSAGE</Text>
        </TouchableOpacity>
      </View>
       <Gallery items={this.state.data.images} />
      </ScrollView>
    );
  }
}