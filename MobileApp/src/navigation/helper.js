import { Navigation } from 'react-native-navigation'
import {navigatorStyle, navigatorWithoutNavbar} from '../global/styles/navigator'

export const ChangeDrawerScreen = (props, navigateTo, title, showHeader) => {
    props.changeScene(navigateTo);
    props.navigator.push({
        screen: navigateTo,
        animated: false,
        title:title,
        navigatorStyle : showHeader ? navigatorStyle : navigatorWithoutNavbar,
        leftButtons: [
          {
            id: 'sideMenu'
          }
        ]
    })
};

export const PushNewScreen = (props, navigateTo, title, showHeader) => {
  props.changeScene(navigateTo);
  props.navigator.push({
    screen: navigateTo,
    animated: true,
    title:title,
    navigatorStyle : showHeader ? navigatorStyle : navigatorWithoutNavbar
  });
}

export const ChangeStack = (props, navigateTo,title, showHeader) => {
    props.changeScene(navigateTo);
    props.navigator.resetTo({
        screen: navigateTo,
        animated: false,
        title:title,
        navigatorStyle : showHeader ? navigatorStyle : navigatorWithoutNavbar,
        leftButtons: showHeader ? [
          {
            id: 'sideMenu'
          }
        ] : []
    })
}

export const PopScreen = (props) => {
    props.navigator.pop();
}