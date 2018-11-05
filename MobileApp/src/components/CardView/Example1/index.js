import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Theme from '../../../global/theme'
// import img from '../../../global/assets/img/photo1.png'
import SocialBar from '../../SocialBar/container'
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
      const {baseColor, header4, inverseColor,secondary2, hintColor,awesome,primary, primary4} = this.props.globalStyles.textStyle
    if(blog){
      const style = this.props.globalStyles.modalStyle.getBlog(this.props.theme)

      styles = {...styles, ...style}
    }

    return (

      // =================================01====================================
      <View style = {[styles.container,{backgroundColor:backgroundColor, borderColor:backgroundColor}]}>

        <View style={[styles.header]}>
          <Image
            style={[styles.img]}
            resizeMode='cover'
            source = {this.props.image}
            // {{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
          />
          <View style={[styles.content]}>
            <Text style={[styles.titleStyleGrey,header4,inverseColor]}>{this.props.titleText}</Text>
            <Text style={[styles.subtitleStyleGrey,secondary2, inverseColor]}>{this.props.subtitleText}</Text>
          </View>
        </View>

        <View style={[styles.footer]}>
          <SocialBar showLabel />
        </View>
      </View>


    );
  }
}