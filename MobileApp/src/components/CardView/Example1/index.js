import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
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
      
      // =================================01====================================
      <View style = {styles.parentGrey}>

        <View style={[styles.viewStyleGrey]}>
          <Image
            style={[styles.imageStyleGrey]}
            resizeMode='cover'
            source = {this.props.image}
            // {{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
          />
          <View style={[styles.textStyleGrey]}>
            <Text style={[styles.titleStyleGrey]}>{this.props.titleText}</Text>
            <Text style={[styles.subtitleStyleGrey]}>{this.props.subtitleText}</Text>
          </View>
        </View>

        <View style={[styles.buttonStyleGrey]}>
          <View style={styles.rowGrey}>
            <Icon name = 'heart-o' size = {20} />
            <Text style={[styles.buttonTextStyleGrey, {color : 'red'}] } >{this.props.likesCount} Likes</Text>
          </View>
          <View style={styles.rowGrey}>
            <Icon name = 'comment-o' size = {20} />
            <Text style={[styles.buttonTextStyleGrey]}>{this.props.commentsCount} Comments</Text>
          </View>
            <View style={styles.rowGrey}>
              <Icon name = 'user-o' size = {20} />
              <Text style={[styles.buttonTextStyleGrey]}>{this.props.sharesCount} Shares</Text>
          </View>    
        </View> 
      </View>

  
    );
  }
}