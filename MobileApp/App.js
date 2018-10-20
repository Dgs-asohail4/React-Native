import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { pushNotifications } from './src/global/services';
import configureStore from './src/store/configureStore';
import {navigatorStyle, navigatorWithoutNavbar} from './src/global/styles/navigator';
import {StackNavigator, createDrawerNavigator } from 'react-navigation'
const store = configureStore();
import { generateStack, generateDrawerRoutes } from './src/navigation/routesBuilder'
import Drawer from './src/components/drawer/container'
import {items} from './src/components/drawer/draweritems';
import { COLOR_PRIMARY, TEXT_COLOR_PRIMARY } from './src/global/theme/default';
import DrawerIcon from './src/components/navIcons/drawerIcon'


pushNotifications.configure();


const drawerRoutes = {}
for(var i=0; i<items.length; i++){
	drawerRoutes[items[i].navigateTo] = {
		screen : generateStack(items[i].navigateTo, items[i].title, true, true),

	}
}


console.log(drawerRoutes);

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
		screen : createDrawerNavigator({
			...drawerRoutes
		},
		{
			drawerOpenRoute: 'DrawerOpen',
			drawerCloseRoute: 'DrawerClose',
			drawerToggleRoute: 'DrawerToggle',
			drawerPosition:'left',
			drawerWidth:270,
			drawerIcon : (<DrawerIcon />),
			contentComponent: (props) => <Drawer {...props}/>
		}),

	}
}, {
	headerMode:
	'none'
});


console.log(RootStack);

export default class App extends React.Component {
	render() {

	  return(
		<Provider store={store}>
			<RootStack />
		</Provider>
	  )
	}
}