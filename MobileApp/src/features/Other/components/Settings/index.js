import React, { Component } from 'react';
import { Text, View,TouchableOpacity,ScrollView } from 'react-native';
import StyleSheetFactory from './styles';
import FindFriends from '../../../../components/findFriends/container'
import Theme from '../../../../global/theme'
import Icon from '../../../../global/assets/icon/FontAwesome'
import Switch from '../../../../components/Switch/container'

export default class Setting extends Component {
  static navigationOptions = {
    title: 'Settings'.toUpperCase(),
  };

  state = {
    sendPush: true,
    shouldRefresh: false,
    twitterEnabled: true,
    googleEnabled: false,
    facebookEnabled: true,
  };

  onPushNotificationsSettingChanged = (value) => {
    this.setState({ sendPush: value });
  };

  onRefreshAutomaticallySettingChanged = (value) => {
    this.setState({ shouldRefresh: value });
  };

  onFindFriendsTwitterButtonPressed = () => {
    this.setState({ twitterEnabled: !this.state.twitterEnabled });
  };

  onFindFriendsGoogleButtonPressed = () => {
    this.setState({ googleEnabled: !this.state.googleEnabled });
  };

  onFindFriendsFacebookButtonPressed = () => {
    this.setState({ facebookEnabled: !this.state.facebookEnabled });
  };
  
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {primary,header6, accentColor, baseColor}=this.props.globalStyles.textStyle;
    return(
    <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <Text style={[primary, header6, accentColor]}>PROFILE SETTINGS</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <Text style={[header6,baseColor]}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <Text style={[header6,baseColor]}>Change Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <Text style={[header6,baseColor]}>Send Push Notifications</Text>
            </TouchableOpacity>
            <Switch theme={this.props.theme} value={this.state.sendPush} onValueChange={this.onPushNotificationsSettingChanged} />
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <Text style={[header6,baseColor]}>Refresh Automatically</Text>
            </TouchableOpacity>
            <Switch theme={this.props.theme} value={this.state.shouldRefresh} onValueChange={this.onRefreshAutomaticallySettingChanged} />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <Text style={[primary, header6, accentColor]}>FIND FRIENDS</Text>
          </View>
          <View style={styles.row}>
            <FindFriends
              color={Theme[this.props.theme].colors.twitter}
              text='Twitter'
              icon={'twitter'}
              selected={this.state.twitterEnabled}
              onPress={this.onFindFriendsTwitterButtonPressed}
            />
          </View>
          <View style={styles.row}>
            <FindFriends
              color={Theme[this.props.theme].colors.google}
              text='Google'
              icon={'google'}
              selected={this.state.googleEnabled}
              onPress={this.onFindFriendsGoogleButtonPressed}
            />
          </View>
          <View style={styles.row}>
            <FindFriends
              color={Theme[this.props.theme].colors.facebook}
              text='Facebook'
              icon={'facebook'}
              selected={this.state.facebookEnabled}
              onPress={this.onFindFriendsFacebookButtonPressed}
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <Text style={[primary, header6,accentColor]}>SUPPORT</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <Text style={[header6,baseColor]}>Help</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <Text style={[header6,baseColor]}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <Text style={[header6,baseColor]}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.rowButton}>
              <Text style={[header6,baseColor]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
  
  }
