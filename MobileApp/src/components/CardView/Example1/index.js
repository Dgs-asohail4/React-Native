import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Theme from '../../../global/theme'
// import img from '../../../global/assets/img/photo1.png'

export default class MyCardView1 extends Component {
  constructor(props) {
    super(props);
  }
  
  static defaultProps = {
    
      titleText : 'Hello World',
      subtitleText : '5 Minutes Ago',
      //image : img,
      likesCount : '18',
      commentsCount : '50',
      sharesCount : '800',
      blog : false 
  };

  render() {
    const {
      titleText,
      subtitleText,
      image,
      blog,
      likesCount,
      commentsCount,
      sharesCount,
      backgroundColor,
      ...attributes
      } = this.props;
      const {baseColor} = this.props.globalStyles.textStyle
    if(blog){
      const style = this.props.globalStyles.modalStyle.getBlog(this.props.theme)
     
      styles = {...styles, style}
    }

    return (
      
      // =================================01====================================
      <View style = {[styles.container,{backgroundColor:backgroundColor}]}>

        <View style={[styles.header]}>
          <Image
            style={[styles.img]}
            resizeMode='cover'
            source = {this.props.image}
            // {{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
          />
          <View style={[styles.content]}>
            <Text style={[styles.titleStyleGrey,baseColor]}>{this.props.titleText}</Text>
            <Text style={[styles.subtitleStyleGrey,baseColor]}>{this.props.subtitleText}</Text>
          </View>
        </View>

        <View style={[styles.footer]}>
          <View style={styles.rowGrey}>
            <Icon name = 'heart' size = {20} color={Theme[this.props.theme].colors.base}/>
            <Text style={[styles.buttonTextStyleGrey, baseColor] } >{this.props.likesCount} Likes</Text>
          </View>
          <View style={styles.rowGrey}>
            <Icon name = 'comment-o' size = {20} color={Theme[this.props.theme].colors.base}/>
            <Text style={[styles.buttonTextStyleGrey,baseColor]}>{this.props.commentsCount} Comments</Text>
          </View>
            <View style={styles.rowGrey}>
              <Icon name = 'user-o' size = {20} color={Theme[this.props.theme].colors.base} />
              <Text style={[styles.buttonTextStyleGrey,baseColor]}>{this.props.sharesCount} Shares</Text>
          </View>    
        </View> 
      </View>

  
    );
  }
}