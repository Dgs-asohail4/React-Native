import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class MyCardView extends Component {
  render() {
    return (
      <View>
        <View style={[styles.viewStyle]}>
        <Image
          style={[styles.imageStyle]}
          source={require('./image.jpeg')}
          // {{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        <View style={[styles.textStyle]}>
          <Text style={[styles.titleStyle]}>{'Plants Of Our Nature'}</Text>
          <Text style={[styles.subtitleStyle]}>{'5 minutes ago'}</Text>
          <View style={[styles.buttonStyle]}>
           <View style={{flex:1, flexDirection:'row'}}>
              <Icon name = 'heart-o' size = {16} />
              <Text style={[styles.buttonTextStyle, {color : 'red'}] } >18 Likes</Text>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
              <Icon name = 'comment-o' size = {16} />
              <Text style={[styles.buttonTextStyle]}>18 Likes</Text>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
              <Icon name = 'user-o' size = {16} />
              <Text style={[styles.buttonTextStyle]}>18 Likes</Text>
            </View>
            
          </View>
        </View>
      </View>

      
      {/* <View style={[styles.viewStyle]}>
        <Image
          style={[styles.imageStyle]}
          source={require('./image.jpeg')}
          // {{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        <View style={[styles.textStyle]}>
          <Text style={[styles.titleStyle]}>{'Plants Of Our Nature'}</Text>
          <Text style={[styles.subtitleStyle]}>{'5 minutes ago'}</Text>
        </View>
      </View>

      <View style={[styles.buttonStyle]}>
        <Icon name = 'heart-o' size = {20} />
        <Text style={[styles.buttonTextStyle, {color : 'red'}] } >{'18 Likes'}</Text>

        <Icon name = 'comment-o' size = {20} />
        <Text style={[styles.buttonTextStyle]}>{'30 Comments'}</Text>

        <Icon name = 'user-o' size = {20} />
        <Text style={[styles.buttonTextStyle]}>{'5 Shares'}</Text>
        
      </View> */}

      </View>
    );
  }
}