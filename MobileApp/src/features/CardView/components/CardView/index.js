import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './styles';
import img from '../../../../global/assets/img/special.jpg'
import MyCardView1 from '../../../../components/CardView/Example1';
import MyCardView2 from '../../../../components/CardView/Example2';
import MyCardView3 from '../../../../components/CardView/Example3';
export default class CardView extends Component {
  render() {
    return (
      <ScrollView>
        <MyCardView1
          titleText = 'Hello World'
          subtitleText = 'Hello Universe'
          likesCount = '2000'
          commentsCount = '230'
          sharesCount = '15'
          image = {img}
        />
        <MyCardView2
          titleText = 'Hello World'
          subtitleText = 'Hello Universe'
          likesCount = '2000'
          commentsCount = '230'
          sharesCount = '15'
          image = {img}
        />
        <MyCardView3
          titleText = 'Hello World'
          subtitleText = 'Hello Universe'
          likesCount = '2000'
          commentsCount = '230'
          sharesCount = '15'

        />






      </ScrollView>
    );
  }
}