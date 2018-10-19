import { Navigation } from 'react-native-navigation'
import {navigatorStyle} from '../global/styles/navigator'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { TEXT_COLOR_PRIMARY } from '../global/theme/default';
import { generateStack } from './children';

export const ChangeDrawerScreen = (props, navigateTo, title, showHeader) => {
    props.changeScene(navigateTo);
    // props.navigator.push({
    //     screen: navigateTo,
    //     animated: false,
    //     title:title,
    //     navigatorStyle : showHeader ? navigatorStyle : navigatorWithoutNavbar,
    //     leftButtons: [
    //       {
    //         id: 'sideMenu',
    //         buttonFontSize:100,
    //         buttonColor: TEXT_COLOR_PRIMARY
    //       }
    //     ]
    // })

    Navigation.mergeOptions(props.componentId, {
      sideMenu: { 'left': { visible: false } }
    });


    Navigation.setRoot(generateStack(navigateTo, title, showHeader))
};

export const PushNewScreen = (props, navigateTo, title, showHeader) => {
  props.changeScene(navigateTo);
  // props.navigator.push({
  //   screen: navigateTo,
  //   animated: true,
  //   title:title,
  //   navigatorStyle : showHeader ? navigatorStyle : navigatorWithoutNavbar
  // });


  // V2

  Navigation.push(props.componentId, {
    component: {
      name: navigateTo,
      options: {
        topBar: navigatorStyle(title, showHeader)
      }
    }
  });
}

export const ChangeStack = (props, navigateTo,title, showHeader) => {
    props.changeScene(navigateTo);
    // props.navigator.resetTo({
    //     screen: navigateTo,
    //     animated: false,
    //     title:title,
    //     navigatorStyle : showHeader ? navigatorStyle : navigatorWithoutNavbar,
    //     leftButtons: showHeader ? [
    //       {
    //         id: 'sideMenu',
    //         buttonFontSize:100,
    //         buttonColor:TEXT_COLOR_PRIMARY
    //       }
    //     ] : []
    // })

    Navigation.setRoot(generateStack(navigateTo,title, showHeader, showHeader))
}

export const PopScreen = (props) => {
  Navigation.pop(props.componentId);
}