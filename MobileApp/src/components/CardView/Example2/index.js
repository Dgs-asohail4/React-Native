import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import img from '../../../global/assets/img/image.jpeg'
import SocialBar from '../../SocialBar/container'

export default class MyCardView2 extends Component {
  constructor(props) {
    super(props);
  }
  
  static defaultProps = {
    
      titleText : 'Hello World',
      subtitleText : '5 Minutes Ago',
      image : null,
      likesCount : '18',
      commentsCount : '50',
      sharesCount : '800',
    
  };

  render() {
    const {
      titleText,
      subtitleText,
      image,
      likesCount,
      commentsCount,
      sharesCount,
      ...attributes
      } = this.props;

    return (
      
      <View style={[styles.viewStyleOverLay]}>
        <Image
          style={[styles.imageStyle]}
          resizeMode='cover'
          source = {this.props.image}
        />

        <View style={[styles.textStyle]}>
          <Text style={[styles.overlayTitleStyle]}>{this.props.titleText}</Text>
          <Text style={[styles.overlaySubtitleStyle]}>{this.props.subtitleText}</Text>
          
          <View style = {[styles.overlayIconViewStyle]}>
            <View style = {styles.row}>
              <Icon name = 'heart' size = {16} style = {[styles.overlayIconStyle]}/>
              <Text style={[styles.buttonTextStyle] } >{this.props.likesCount}</Text>
            </View>
            <View style = {styles.row}> 
              <Icon name = 'comment-o' size = {16} style = {[styles.overlayIconStyle]} />
              <Text style={[styles.buttonTextStyle] } >{this.props.commentsCount}</Text>
            </View>
            <View style = {styles.row}>
              <Icon name = 'user-o' size = {16} style = {[styles.overlayIconStyle]}/>
              <Text style={[styles.buttonTextStyle]} >{this.props.sharesCount}</Text>
            </View>

          </View>
        </View>
        
      </View>

      
    );
  }
}