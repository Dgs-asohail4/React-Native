import React, { Component } from 'react';
import { Text,TouchableOpacity, View, AsyncStorage, Dimensions, ScrollView } from 'react-native';
import StyleSheetFactory from './styles';
//import Button from '../../../../components/button'

import {items} from '../../../../components/drawer/draweritems'

const paddingValue = 8;
import Theme from '../../../../global/theme'
import TextStyleFactory from '../../../../global/styles/textStyle'
import ButtonStyleFactory from '../../../../global/styles/buttonStyle'

import Icon from 'react-native-vector-icons/Ionicons'

export default class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Grid Menu'.toUpperCase(),
  });

    constructor(props){
      super(props);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.theme !== this.props.theme) {
          const style = {
            textStyle : TextStyleFactory.getSheet(Theme[this.props.theme]),
            buttonStyle: ButtonStyleFactory.getSheet(Theme[this.props.theme])
          }
          this.props.UpdateGlobalTheme(style);
      }
    }

    _calculateItemSize() {
      let {height, width} = Dimensions.get('window');
      return (width - paddingValue * 6) / 2;
    }

    render() {
      let size = this._calculateItemSize();
      let navigate = this.props.navigation.navigate;
      const {primary, moon, menuIcon, center, regular, baseColor} = this.props.globalStyles.textStyle;
      const {square} = this.props.globalStyles.buttonStyle;

      const styles = StyleSheetFactory.getSheet(Theme[this.props.theme]);
      let menuItems = items.map(function (route, index) {
        return (
          <View style={{margin:8,flexDirection:'column'}}>
          <TouchableOpacity
          style={[square,{width: size, height: size}]}
          key={index}
          onPress={() => {
            navigate(route.navigateTo)
          }}>

          <Text style={[primary, moon, menuIcon,center]} >
            <Icon name={route.icon} size={25} style={styles.icon} />
          </Text>
          <Text style={[center, regular, primary, baseColor]}>{route.name}</Text>

        </TouchableOpacity>

          </View>
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