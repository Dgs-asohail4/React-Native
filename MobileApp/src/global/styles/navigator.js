
import {COLOR_PRIMARY, TEXT_COLOR_PRIMARY, NAVBAR_FONT_SIZE} from '../theme/default';

export const navigatorStyle = (text, visible = true) => ({
	title:{
		color : TEXT_COLOR_PRIMARY,
		fontSize : NAVBAR_FONT_SIZE,
		text:text,
		visible:true
	},
	background:{
		color:COLOR_PRIMARY,
	},
	rightButtons: [
		{

			color: TEXT_COLOR_PRIMARY,
			visible:true
		}
	],
	leftButtons: [
		{
			id:'sideDrawer',
			color: TEXT_COLOR_PRIMARY,
			visible:true
		}
	],
	backButton: {
		color: TEXT_COLOR_PRIMARY,
		visible:true
	},
	bottomTabs: {
		visible: false
	},
	statusBar: {
		style: 'light',
		color:COLOR_PRIMARY
	},
	subtitle:{
		color:TEXT_COLOR_PRIMARY
	},
	visible
});
