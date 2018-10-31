import React, { Component } from 'react';
import { Text, View,ScrollView,TouchableOpacity } from 'react-native';
import formatNumber from '../../../../utils/textUtils';
import Gallery from '../../../../components/Gallery/container'
import StyleSheetFactory from './styles';
import Avatar from '../../../../components/avatar/container'
import {data} from '../../../../global/data'
import Theme from '../../../../global/theme'
import Button from '../../../../components/button'
export default class Social extends Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase(),
  };

  state = {
    data:undefined
  }

  constructor(props) {
    super(props);
    const id = this.props.navigation.getParam('id', props.user.contains('chad') ? 1 : 2);
    this.state.data = data.getUser(id);
  }

  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {header2,header4,baseColor,header3,hintColor,secondary1}=this.props.globalStyles.textStyle;
    return (
      <ScrollView style={styles.root}>
      <View style={[styles.header, styles.bordered]}>
        <Avatar img={this.state.data.photo} big />
        <Text style={[header2,baseColor]}>{`${this.state.data.firstName} ${this.state.data.lastName}`}</Text>
        <Button
          text='FOLLOW'
          style={{width:150, borderRadius:20,marginBottom:0}}
          color={Theme[this.props.theme].colors.gradients.base[0]}
        />
      </View>

      <View style={styles.userInfo}>
        <View style={styles.section}>
          <Text style={[styles.space,header3,baseColor]}>{this.state.data.postCount}</Text>
          <Text style={[secondary1,hintColor]}>Posts</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.space,header3,baseColor]}>{formatNumber(this.state.data.followersCount)}</Text>
          <Text style={[secondary1,hintColor]}>Followers</Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.space,header3,baseColor]}>{this.state.data.followingCount}</Text>
          <Text style={[secondary1,hintColor]}>Following</Text>
        </View>
      </View>
      <Gallery items={this.state.data.images} />
    </ScrollView>
    );
  }
}