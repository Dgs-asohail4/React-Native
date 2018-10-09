import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Swiper from '../../../../components/swiper';



export default class Swiperlist extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} autoplay>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}