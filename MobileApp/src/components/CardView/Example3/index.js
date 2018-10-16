import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import img from '../../../global/assets/img/image.jpeg'

export default class MyCardView3 extends Component {
  constructor(props) {
    super(props);
  }
  
  static defaultProps = {
    
      titleText : 'Hello World',
      subtitleText : '5 Minutes Ago',
      image : img,
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
      <View style = {styles.viewStyle}>
        <View>
          <Text style={[styles.titleStyle]}>{this.props.titleText}</Text>
          <Text style={[styles.headerSubtitleStyle]}>{this.props.subtitleText}</Text>
        </View>
        
          <Image
      //      style={[styles.imageStyle]}
            style={styles.imageWithHeader}
            //source={require(this.props.imageName)}
            resizeMode='cover'
            source = {this.props.image}
          />
      
        <View style = {[styles.footerStyle]}>
            <View style = {styles.row}>
              <Icon name = 'heart' size = {16} style = {styles.iconStyle}/>
              <Text style={[styles.buttonTextStyleFooter, {color : 'red'}] } >{this.props.likesCount}</Text>
            </View>
            <View style = {styles.row}> 
              <Icon name = 'comment-o' size = {16} />
              <Text style={[styles.buttonTextStyleFooter] } >{this.props.commentsCount}</Text>
            </View>
            <View style = {styles.row}>
              <Icon name = 'user-o' size = {16}/>
              <Text style={[styles.buttonTextStyleFooter]} >{this.props.sharesCount}</Text>
            </View>
        </View>
      </View>
  
    );
  }
}