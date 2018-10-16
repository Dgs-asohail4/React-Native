import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './styles';
import MyCardView1 from '../../../../components/CardView/Example1';
import MyCardView2 from '../../../../components/CardView/Example2';
import MyCardView3 from '../../../../components/CardView/Example3';
export default class CardView extends Component {
  render() {
    return (
      <ScrollView>
        
        <MyCardView3 
          titleText = 'Hello World'
          subtitleText = 'Kia Haal Hain'
          likesCount = '2000'
          commentsCount = '230'
          sharesCount = '15'
        />
        <MyCardView1/>
        <MyCardView2/>
        
        
        
        
      </ScrollView>
    );
  }
}