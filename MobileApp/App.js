import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { pushNotifications } from './src/global/services';
import configureStore from './src/store/configureStore';
import {navigatorStyle, navigatorWithoutNavbar} from './src/global/styles/navigator';
import {StackNavigator, DrawerNavigator} from 'react-navigation'
const store = configureStore();
import { generateStack, generateDrawerRoutes } from './src/navigation/routesBuilder'
import Drawer from './src/components/drawer/container'
import {items} from './src/components/drawer/draweritems';
import { COLOR_PRIMARY } from './src/global/theme/default';


pushNotifications.configure();


const drawerRoutes = {}
for(var i=0; i<items.length; i++){
	drawerRoutes[items[i].navigateTo] = {
		screen : generateStack(items[i].navigateTo, items[i].title, false, false),
		navigationOptions : {
			drawerLabel: items[i].title,
			title:items[i].title,
			headerStyle:
				{
					backgroundColor:COLOR_PRIMARY
				}
		}
	}
}


const RootStack = StackNavigator({
	Splash: {
		screen: generateStack('app.splash', '', false, false),
		navigationOptions:{
			header: null
		}
	},
	Auth: {
		screen : generateStack('auth.login', '', false, false),
		navigationOptions:{
			header: null
		}
	},
	Home:{
		screen : DrawerNavigator({
			...drawerRoutes
		},
		{
			drawerOpenRoute: 'DrawerOpen',
			drawerCloseRoute: 'DrawerClose',
			drawerToggleRoute: 'DrawerToggle',
			drawerPosition:'left',
			contentComponent: (props) => <Drawer {...props}/>
		})
	}
});

export default class App extends React.Component {
	render() {

	  return(
		<Provider store={store}>
			<RootStack />
		</Provider>
	  )
	}
}