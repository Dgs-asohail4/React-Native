import React, { Component } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

import StyleSheetFactory, {getBase,getLeftAligned,getSpace} from './styles';
import Theme from '../../global/theme'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class SocialBar extends Component {
  static data = {
    likes: 18,
    comments: 26,
    shares: 5,
  };

  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || SocialBar.data.likes,
      comments: this.props.comments || SocialBar.data.comments,
      shares: this.props.shares || SocialBar.data.shares,
    };
  }

  onLikeButtonPressed = () => {
    const defaultCount = SocialBar.data.likes;
    this.setState({
      likes: this.state.likes === defaultCount ? this.state.likes + 1 : defaultCount,
    });
  };

  onCommentButtonPressed = () => {
    const defaultCount = SocialBar.data.comments;
    this.setState({
      comments: this.state.comments === defaultCount ? this.state.comments + 1 : defaultCount,
    });
  };

  onShareButtonPressed = () => {
    const defaultCount = SocialBar.data.shares;
    this.setState({
      shares: this.state.shares === defaultCount ? this.state.shares + 1 : defaultCount,
    });
  };


  render() {
     var styles = {
        container, section, icon, label,
      } = getBase(Theme[this.props.theme]).base;

    if(this.props.leftAligned){
      styles = {...styles, ...getLeftAligned(Theme[this.props.theme]).leftAligned};
    }

    if(this.props.space){
      styles = {...styles,
      ...getSpace(Theme[this.props.theme]).space};
    }



    const likes = this.state.likes + (this.props.showLabel ? ' Likes' : '');
    const comments = this.state.comments + (this.props.showLabel ? ' Comments' : '');
    const shares = this.state.shares + (this.props.showLabel ? ' Shares' : '');

    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme])
    const {clear} = this.props.globalStyles.buttonStyle
    const {awesome,primary,baseColor,primary4,hintColor} = this.props.globalStyles.textStyle;
    return (
      <View style={[styles.container,{flex:1,flexDirection:'row',justifyContent:'space-around'}]}>
        <View style={styles.section}>
          <TouchableOpacity style={[clear]} onPress={this.onLikeButtonPressed}>
            <Text style={[awesome,primary, baseColor,styles.icon]}>
              <Icon name={'heart'} size={20} color={baseColor.color} />
            </Text>
            <Text style={[awesome,primary, baseColor,label]}>{likes}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.section]}>
          <TouchableOpacity style={[clear]} onPress={this.onCommentButtonPressed}>
            <Text style={[awesome,hintColor,styles.icon]}>
              <Icon name={'comment'} size={20} color={hintColor.color} />
            </Text>
            <Text style={[primary4, hintColor,label]}>{comments}</Text>
          </TouchableOpacity>
         </View>
        <View style={styles.section}>
          <TouchableOpacity style={[clear]} onPress={this.onShareButtonPressed}>
            <Text style={[awesome,hintColor, styles.icon]} >
              <Icon name={'share'} size={20} color={hintColor.color} />
            </Text>
            <Text style={[primary4, hintColor,label]}>{shares}</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}