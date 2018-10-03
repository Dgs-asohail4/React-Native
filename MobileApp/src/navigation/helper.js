import { Navigation } from 'react-native-navigation'
import {navigatorStyle} from '../global/styles/navigator'

export const ChangeDrawerScreen = (props, navigateTo, title) => {
    props.changeScene(navigateTo);
    props.navigator.push({
        screen: navigateTo,
        animated: false,
        title:title,
        navigatorStyle,
        leftButtons: [
          {
            id: 'sideMenu'
          }
        ]
    })
};

export const PushNewScreen = (props, navigateTo, title) => {
  props.changeScene(navigateTo);
  props.navigator.push({
    screen: navigateTo,
    animated: true,
    title:title,
    navigatorStyle
  });
}

export const ChangeStack = (props, navigateTo,title) => {
    props.changeScene(navigateTo);
    props.navigator.resetTo({
        screen: navigateTo,
        animated: false,
        title:title,
        navigatorStyle,
        leftButtons: [
          {
            id: 'sideMenu'
          }
        ]
    })
}

export const PopScreen = (props) => {
    props.navigator.pop();
}