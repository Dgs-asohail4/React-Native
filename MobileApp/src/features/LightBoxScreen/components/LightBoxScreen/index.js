import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Lightbox from '../../../../components/LightBox';
// import Carousel from 'react-native-looped-carousel';

export const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

import styles from './styles';


export default class LightBoxScreen extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ScrollView style={styles.container}>
      <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
      <Lightbox underlayColor="white">
        <Image
          style={styles.contain}
          resizeMode="contain"
          source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
        />
      </Lightbox>
      <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
      <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
      <Lightbox
        renderHeader={close => (
          <TouchableOpacity onPress={close}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        )}>
        <View style={styles.customHeaderBox}>
          <Text>I have a custom header</Text>
        </View>
      </Lightbox>
      <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
      <View style={styles.row}>
        <Lightbox style={styles.col}>
          <View style={[styles.square, styles.squareFirst]}><Text style={styles.squareText}>I'm a square</Text></View>
        </Lightbox>
        <Lightbox style={styles.col}>
          <View style={[styles.square, styles.squareSecond]}><Text style={styles.squareText}>I'm a square</Text></View>
        </Lightbox>
      </View>
      <View style={styles.text}><Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text></View>
    </ScrollView>
    )
  }
}



