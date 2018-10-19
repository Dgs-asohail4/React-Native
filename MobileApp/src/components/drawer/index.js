import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
	Text,
	View,
	TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import items from './draweritems';
import {ChangeDrawerScreen} from '../../navigation/helper';
import Header from './header'
import List from '../list'
import { DRAWER_GRADIENT, TEXT_COLOR_PRIMARY, DRAWER_GRADIENT_2 } from '../../global/theme/default';
class Drawer extends Component {
	constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress(navigateTo, isRoot, title) {
    if(this.props.scene == navigateTo) return;
    ChangeDrawerScreen(this.props, navigateTo, title, true);
	}

	render() {
    return (
      <LinearGradient colors={[DRAWER_GRADIENT_2, DRAWER_GRADIENT, DRAWER_GRADIENT_2]} style={styles.linearGradient}>
        <View style={styles.container}>
           <Header/>
           <List data={items} containerStyle={{paddingLeft:15,marginTop:20, marginBottom:20}} renderRow={(item) => (
            <TouchableOpacity key={item.id} onPress={() => this._onPress(item.navigateTo, false, item.name)}>
              <View style={styles.drawerListItem}>
                <Icon name={item.icon} size={26} color="white" style={[styles.drawerListIcon]} />
                <Text style={styles.drawerListItemText}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
           )} />
            <View style={{height:30}}>
              <Text style={styles._version}>
                v1.0.0
              </Text>
            </View>

        </View>
			</LinearGradient>
		);
	}
}

export default Drawer;