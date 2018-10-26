import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import StyleSheetFactory from './styles';
import Theme from '../../../../global/theme'

import SocialSetting from '../../../../components/SocialSetting/container'

export default class Social extends Component {
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const {primary,header6,accentColor} = this.props.globalStyles.textStyle
    return (
      <ScrollView style={styles.root}>
        <View style={styles.section}>
          <View style={[styles.row, styles.heading]}>
            <Text style={[primary, header6,accentColor]}>CONNECT YOUR ACCOUNT</Text>
          </View>
          <View style={styles.row}>
            <SocialSetting name='Twitter' icon={'twitter'} tintColor={Theme[this.props.theme].colors.twitter} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Google' icon={'google'} tintColor={Theme[this.props.theme].colors.google} />
          </View>
          <View style={styles.row}>
            <SocialSetting name='Facebook' icon={'facebook'} tintColor={Theme[this.props.theme].colors.facebook} />
          </View>
        </View>
      </ScrollView>
    );
  }
}