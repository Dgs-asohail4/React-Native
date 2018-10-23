import React, { Component } from 'react';
import { Text, View,ScrollView } from 'react-native';
import StyleSheetFactory from './styles';
import MyCardView3 from '../../../../components/CardView/Example3';
import img from '../../../../global/assets/img/photo1.png'
import img2 from '../../../../global/assets/img/photo2.png'
import img3 from '../../../../global/assets/img/photo3.png'
import img4 from '../../../../global/assets/img/photo4.png'
import img5 from '../../../../global/assets/img/photo5.png'
import img6 from '../../../../global/assets/img/photo6.png'
import Theme from '../../../../global/theme'

export default class Articles extends Component {
  render() {
    const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    return (
      <ScrollView>
        
      <MyCardView3
     titleText = 'Plants of our Nature'
     subtitleText = '5 minutes ago'
       likesCount = '18'
       commentsCount = '26'
       sharesCount = '5'
       image = {img}
     />
     <MyCardView3
     titleText = 'Balloon Trip'
     subtitleText = '23 minutes ago'
       likesCount = '18'
       commentsCount = '26'
       sharesCount = '5'
       image = {img2}
     />
     <MyCardView3
     titleText = 'Sea World'
     subtitleText = '41 minutes ago'
       likesCount = '18'
       commentsCount = '26'
       sharesCount = '5'
       image = {img3}
     />
     <MyCardView3
     titleText = 'Flowers'
     subtitleText = 'an hour ago'
       likesCount = '18'
       commentsCount = '26'
       sharesCount = '5'
       image = {img4}
     />
     <MyCardView3
     titleText = 'Birds of our Planet'
     subtitleText = 'an hour ago'
       likesCount = '18'
       commentsCount = '26'
       sharesCount = '5'
       image = {img5}
     />
     <MyCardView3
     titleText = 'Mountains'
     subtitleText = '2 hours ago'
       likesCount = '18'
       commentsCount = '26'
       sharesCount = '5'
       image = {img6}
     />
   </ScrollView>
    );
  }
}