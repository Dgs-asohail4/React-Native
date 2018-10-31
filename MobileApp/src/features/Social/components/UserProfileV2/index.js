import React, { Component } from 'react';
import { Text, View,Button,ScrollView,TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/avatar/container'
import StyleSheetFactory from './styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import Theme from '../../../../global/theme'
import formatNumber from '../../../../utils/textUtils';
import Gallery from '../../../../components/Gallery/container'
import {data} from '../../../../global/data'

export default class Social extends Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase(),
  };

  state = {
    data: data.getUser(),
  };
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {primary,header2,baseColor,header3,hintColor,secondary1,moon,large}=this.props.globalStyles.textStyle;
    return (
      <ScrollView style={styles.root}>
      <View style={[styles.header, styles.bordered]}>
        <View style={styles.row}>
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.button]}>
              <Text style={[ primary,moon,large,  {borderRadius:80, padding:15,borderWidth:1,backgroundColor:Theme[this.props.theme].colors.control.background, borderColor:Theme[this.props.theme].colors.border.base}]}>
                <Icon name={'user-circle'} size={24} color={Theme[this.props.theme].colors.primary}/>
              </Text>
            </TouchableOpacity>
          </View>
          <Avatar img={this.state.data.photo} big />
          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.button]}>
              <Text style={[ primary,moon , {borderRadius:80, padding:15,borderWidth:1,backgroundColor:Theme[this.props.theme].colors.control.background, borderColor:Theme[this.props.theme].colors.border.base}]}>
                <Icon name={'envelope'} size={24} color={Theme[this.props.theme].colors.primary}/>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={[header2,baseColor]}>{`${this.state.data.firstName} ${this.state.data.lastName}`}</Text>
        </View>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.section}>
          <Text style={[header3,styles.space,baseColor]}>{this.state.data.postCount}</Text>
          <Text style={[secondary1, hintColor]}>Posts</Text>
        </View>
        <View style={styles.section}>
          <Text style={[header3,styles.space,baseColor]}>{formatNumber(this.state.data.followersCount)}</Text>
          <Text style={[secondary1, hintColor]}>Followers</Text>
        </View>
        <View style={styles.section}>
          <Text style={[header3,styles.space,baseColor]}>{this.state.data.followingCount}</Text>
          <Text style={[secondary1, hintColor]}>Following</Text>
        </View>
      </View>
      <Gallery items={this.state.data.images} />
    </ScrollView>
    );
  }
}