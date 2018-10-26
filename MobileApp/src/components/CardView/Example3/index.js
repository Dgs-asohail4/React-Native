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
      backgroundColor,
      ...attributes
      } = this.props;

      const {header4,secondary2,hintColor, baseColor, awesome,primary,primary4}  = this.props.globalStyles.textStyle;


    return (
      <View style = {[styles.viewStyle,{backgroundColor:backgroundColor,borderColor:backgroundColor}]}>
        <View>
          <Text style={[styles.titleStyle, header4,baseColor,]}>{this.props.titleText}</Text>
          <Text style={[styles.headerSubtitleStyle, secondary2,hintColor]}>{this.props.subtitleText}</Text>
        </View>
        
          <Image
      //      style={[styles.imageStyle]}
            style={styles.imageWithHeader}
            //source={require(this.props.imageName)}
            resizeMode='cover'
            source = {this.props.image}
          />
      
        <View style = {[styles.footerStyle]}>
        <View style={styles.row}>
            <Icon name = 'heart' size = {20} color={baseColor.color}/>
            <Text style={[styles.buttonTextStyleFooter,awesome,primary,baseColor] } >{this.props.likesCount}</Text>
          </View>
          <View style={styles.row}>
            <Icon name = 'comment-o' size = {20} color={hintColor.color}/>
            <Text style={[styles.buttonTextStyleFooter,primary4, hintColor]}>{this.props.commentsCount}</Text>
          </View>
            <View style={styles.row}>
              <Icon name = 'user-o' size = {20} color={hintColor.color} />
              <Text style={[styles.buttonTextStyleFooter,primary4, hintColor]}>{this.props.sharesCount}</Text>
          </View>    
        </View>
      </View>
  
    );
  }
}