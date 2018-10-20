import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { pushNotifications } from './src/global/services';
import { registerScreens } from './src/navigation/screen_name';
import configureStore from './src/store/configureStore';
import {navigatorStyle, navigatorWithoutNavbar} from './src/global/styles/navigator';

const store = configureStore();

registerScreens(store, Provider);

pushNotifications.configure();

// Navigation.startSingleScreenApp({
// 	screen: {
// 		screen: 'app.splash',
// 		navigatorStyle: navigatorWithoutNavbar
// 	},
// 	drawer: {
// 		left: {
// 			screen: 'global.drawer'
// 		},
// 		style: {
// 			leftDrawerWidth: 40,
// 		}
// 	}
// });


Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root:{
			sideMenu : {
				id: "sideMenu",
				left: {
					visible: true,
					component: { id: 'sideDrawer', name: 'global.drawer', visible: true},
				},
				center:{
					stack:  {
						children: [{
								component: {
									name: 'app.splash',
									options: {
										topBar: navigatorStyle('', false)
									}
								}
							}
						],

					},
				}
			}
		}
	});
});