import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/navigation/screen_name';
import configureStore from './src/store/configureStore';
import {navigatorStyle} from './src/global/styles/navigator';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'app.splash',
//		title: 'Home',
//		navigatorStyle
	},
	drawer: {
		left: {
			screen: 'global.drawer'
		}
	}
});