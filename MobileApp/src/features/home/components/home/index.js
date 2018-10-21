import React, { Component } from 'react';
import { Text,TouchableOpacity, View, AsyncStorage, Dimensions, ScrollView } from 'react-native';
import StyleSheetFactory from './styles';
//import Button from '../../../../components/button'

import {items} from '../../../../components/drawer/draweritems'
import {FontIcons} from './icons'

const paddingValue = 8;
import Theme from '../../../../global/theme'

export default class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Grid Menu'.toUpperCase(),
  });

    constructor(props){
      super(props);
    }


    _calculateItemSize() {
      let {height, width} = Dimensions.get('window');
      return (width - paddingValue * 6) / 2;
    }

    render() {
      let size = this._calculateItemSize();
      let navigate = this.props.navigation.navigate;
      const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
      let menuItems = items.map(function (route, index) {
        return (
          <TouchableOpacity
            style={{width: size, height: size}}
            key={index}
            onPress={() => {
              navigate(route.navigateTo)
            }}>

            <Text style={styles.icon}>
              {FontIcons[route.name]}
            </Text>
            <Text>{route.name}</Text>

          </TouchableOpacity>
        )
      });
      return (
        <ScrollView style={styles.root}
                    contentContainerStyle={styles.rootContainer}>
          {menuItems}
        </ScrollView>
      )
    }
}