import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import {
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import items from './draweritems';
import {ChangeDrawerScreen} from '../../navigation/helper';
import { DRAWER_GRADIENT, TEXT_COLOR_PRIMARY } from '../../global/theme/default';

class Drawer extends Component {
	constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
  }

  _onPress(navigateTo, isRoot, title) {
    this._toggleDrawer();
    if(this.props.scene == navigateTo) return;
    ChangeDrawerScreen(this.props, navigateTo, title, true);

    // if(isRoot){
    //   this.props.navigator.popToRoot({
    //     screen: navigateTo
    //   });
    // } else {
    //   this.props.navigator.resetTo({
    //     screen: navigateTo,
    //     title: title
    //   });
    // }
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

	render() {
    return (
      <LinearGradient colors={[TEXT_COLOR_PRIMARY, DRAWER_GRADIENT, TEXT_COLOR_PRIMARY]} style={styles.linearGradient}>
				<View style={styles.container}>
          <View style={styles.drawerList}>
            {items.map(item => (
              <TouchableOpacity key={item.id} onPress={() => this._onPress(item.navigateTo, false, item.name)}>
                <View style={styles.drawerListItem}>
                  <Icon name={item.icon} size={26} color="#9F9F9F" style={[styles.drawerListIcon]} />
                  <Text style={styles.drawerListItemText}>
                    {item.name}
                  </Text>
                </View>
						</TouchableOpacity>
            ))}
					</View>
					<Text style={styles._version}>
						v1.0.0
					</Text>
        </View>
			</LinearGradient>
		);
	}
}

export default Drawer;