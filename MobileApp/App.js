import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { pushNotifications } from './src/global/services';
import configureStore from './src/store/configureStore';
import {StackNavigator, createDrawerNavigator } from 'react-navigation'
import { generateStack } from './src/navigation/routesBuilder'
import Drawer from './src/components/drawer/container'
import {items} from './src/components/drawer/draweritems';
import DrawerIcon from './src/components/navIcons/drawerIcon'
import {data} from './src/global/data'
import {scale} from './src/utils/scale'

const store = configureStore();
pushNotifications.configure();
data.populateData();
const drawerRoutes = {"app.home":{
	screen:generateStack("app.home", "Home", true,true)
}}
for(var i=0; i<items.length; i++){
	drawerRoutes[items[i].navigateTo] = {
		screen : generateStack(items[i].navigateTo, items[i].title, true, true),
	}
}

const RootStack = StackNavigator({
	Splash: {
		screen: generateStack('app.splash', '', false, false),
		navigationOptions:{
			header: null
		}
	},
	// Auth: {
	// 	screen : generateStack('auth.login', '', false, false),
	// 	navigationOptions:{
	// 		header: null
	// 	}
	// },
	Home:{
		screen : createDrawerNavigator({
			...drawerRoutes
		},
		{
			drawerOpenRoute: 'DrawerOpen',
			drawerCloseRoute: 'DrawerClose',
			drawerToggleRoute: 'DrawerToggle',
			drawerPosition:'left',
			drawerWidth:scale(300),
			drawerIcon : (<DrawerIcon />),
			contentComponent: (props) => <Drawer {...props}/>
		}),

	}
}, {
	headerMode:
	'none'
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