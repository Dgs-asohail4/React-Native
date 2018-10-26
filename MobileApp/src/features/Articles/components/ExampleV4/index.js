import React, { Component } from 'react';
import { Text, View,Image,FlatList,TouchableOpacity } from 'react-native';
import StyleSheetFactory from './styles';
import styles from './styles'
import Theme from '../../../../global/theme'

import {data} from '../../../../global/data'

export default class Articles extends Component {

  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  extractItemKey = (item) => `${item.id}`;

  renderItem = (item) => {
     item = item.item;
     const {header6,baseColor,secondary1,hintColor,secondary6} =this.props.globalStyles.textStyle;
     var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
     const horizontal = this.props.globalStyles.modalStyle.horizontal;
     styles = {...styles, ...horizontal}
     return(
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('article.articleview', { id: item.id })}
      >
        <View style={[styles.card,{backgroundColor:Theme[this.props.theme].colors.control.background, borderColor:Theme[this.props.theme].colors.control.background},]}>
          <View key={item.key} style={ styles.container2}>
            <Image source={item.photo} style={[styles.img]}/>
            <View style={[styles.content,{paddingHorizontal:20,justifyContent:'center'}]}>
              <Text numberOfLines={1} style={[header6, baseColor]} >{item.header}</Text>
              <Text style={[styles.post, secondary1,baseColor]} numberOfLines={2}>{item.text}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
     
    )
  }
  render() {
    const {header6} =this.props.globalStyles.textStyle;
    var styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
    const horizontal = this.props.globalStyles.modalStyle.horizontal;
    styles = {...styles, ...horizontal}
    return (
       <FlatList
          style={styles.container}
          data={this.state.data}  
          renderItem={this.renderItem}
          keyExtractor={this.extractItemKey}
        />
    );
  }
}