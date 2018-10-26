import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import Icon from '../../global/assets/icon/FontAwesome'

import StyleSheetFactory from './styles';
import Theme from '../../global/theme'
import { DefaultTheme } from '../../global/theme/default';

export default class Avatar extends Component {
  static defaultProps = {
    circle :false,
    small:false,
    big:false
  }

  getBadgeStyle = (badgeProps) => {
    switch (badgeProps) {
      case 'like':
        return {
          symbol: Icon.heart,
          backgroundColor: Theme[DEFUALT_THEME].colors.badge.likeBackground,
          color: Theme[DEFUALT_THEME].colors.badge.likeForeground,
        };
      case 'follow':
        return {
          symbol: FontAwesome.plus,
          backgroundColor: Theme[DEFUALT_THEME].colors.badge.plusBackground,
          color: Theme[DEFUALT_THEME].colors.badge.plusForeground,
        };
      default: return {};
    }
  };

  renderImg = (styles) => (
    <View>
      <Image style={styles.image} source={this.props.img} />
      { this.props.badge && this.renderBadge(styles.badge)}
    </View>
  );

  renderBadge = (style, textStyle) => {
    const badgeStyle = this.getBadgeStyle(this.props.badge);
    const awesome =this.props.globalStyle.textStyle
    return (
      <View style={[style, { backgroundColor: badgeStyle.backgroundColor }]}>
        <Text  style={[textStyle,awesome, { color: badgeStyle.color }]}>
          {badgeStyle.symbol}
        </Text>
      </View>
    );
  };
  render() {
    var {container, ...other} = StyleSheetFactory.getSheet(Theme[this.props.theme], "_base");
    if(this.props.small) other = {...other, ...StyleSheetFactory.getSheet(Theme[this.props.theme],"small")} 
    if(this.props.circle) other = {...other, ...StyleSheetFactory.getSheet(Theme[this.props.theme],"cirlce")} 
    if(this.props.big) other = {...other, ...StyleSheetFactory.getSheet(Theme[this.props.theme],"big")} 
    return (
        <View style={[container, this.props.style]}>
          {this.renderImg(other)}
        </View>
      );
    }
}