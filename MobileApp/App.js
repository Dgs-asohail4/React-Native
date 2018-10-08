import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/navigation/screen_name';
import configureStore from './src/store/configureStore';
import {navigatorStyle, navigatorWithoutNavbar} from './src/global/styles/navigator';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'app.splash',
		navigatorStyle: navigatorWithoutNavbar
	},
	drawer: {
		left: {
			screen: 'global.drawer'
		}
	}
});