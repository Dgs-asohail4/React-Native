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
      <Lightbox underlayColor="white">
        <Image
          style={styles.contain}
          resizeMode="contain"
          source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
        />
      </Lightbox>
    </ScrollView>
    )
  }
}



