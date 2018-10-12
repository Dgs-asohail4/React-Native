
import {COLOR_PRIMARY, TEXT_COLOR_PRIMARY, NAVBAR_FONT_SIZE} from '../theme/default';

export const navigatorStyle = {
	statusBarColor: COLOR_PRIMARY,
	statusBarTextColorScheme: 'light',
	navigationBarColor: COLOR_PRIMARY,
	navBarBackgroundColor: COLOR_PRIMARY,
	navBarTextColor: TEXT_COLOR_PRIMARY,
	navBarButtonColor: TEXT_COLOR_PRIMARY,
	tabBarButtonColor: 'red',
	navBarComponentAlignment:'center',
	navBarTitleTextCentered:true,
	navBarTextFontSize: NAVBAR_FONT_SIZE,
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: TEXT_COLOR_PRIMARY,
	topBarElevationShadowEnabled: false,
	tabBarHidden: true,
	drawUnderTabBar: true
};

export const navigatorWithoutNavbar = {
	statusBarColor: COLOR_PRIMARY,
	statusBarTextColorScheme: 'light',
	navigationBarColor: COLOR_PRIMARY,
	navBarBackgroundColor: COLOR_PRIMARY,
	navBarTextColor: TEXT_COLOR_PRIMARY,
	navBarButtonColor: TEXT_COLOR_PRIMARY,
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: TEXT_COLOR_PRIMARY,
	topBarElevationShadowEnabled: false,
	tabBarHidden: true,
	navBarHidden: true,
	drawUnderTabBar: true
}