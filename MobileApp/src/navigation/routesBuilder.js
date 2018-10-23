import {Routes} from './routes';
import React from 'react'
import {StackNavigator} from 'react-navigation'
import { COLOR_PRIMARY, TEXT_COLOR_PRIMARY } from '../global/theme/default';
import DrawerIcon from '../components/navIcons/drawerIcon';
import BackButton from '../components/navIcons/backbutton';
import EmptyIcon from '../components/navIcons/emptyIcon';
import NavBar  from '../components/Navbar/container';


const renderHeader = (navigation, props,title, drawer) => {
    return (
      <NavBar title={title} navigation={navigation} headerProps={props} drawer={drawer}/>
    );
};

const generateStack = (routeName, title, showHeader = true, showDrawer = true) => {
    const route = Routes.find( (x) => x.name == routeName);
    let flatRoutes = {};
    let wrapToRoute = (route, drawer = false) => {
        return {
          screen: route.screen,
          title: route.title,
          navigationOptions: ({ navigation }) => showHeader ? ({
            gesturesEnabled: false,
            headerTitle:route.title,
            header: (props) => renderHeader(navigation, props, route.title, drawer),
          }) : ({header:null})
          //{
            //   headerTitle:route.title,
            //   headerStyle:
            //     {
            //         color:TEXT_COLOR_PRIMARY,
            //         backgroundColor:COLOR_PRIMARY
            //     },
            //    headerTitleStyle:{
            //        flex:1,
            //        color:TEXT_COLOR_PRIMARY,
            //        textAlign:'center',
            //        fontSize:28
            //    },
            //    headerLeft: drawer ? (<DrawerIcon {...props}/>) : (<BackButton {...props}/>),
            //    headerRight: (<EmptyIcon />),
            //    headerTintColor:TEXT_COLOR_PRIMARY
            // }

        }
    };

    flatRoutes[route.name] = wrapToRoute(route, route.name.contains("menu") ? false : true );
    for (let child of route.childrens) {
        flatRoutes[child.name] = wrapToRoute(child);
    }
    const stack =  StackNavigator(flatRoutes, {
        initialRouteName: route.name,
    })
    return stack;
}

export {
    generateStack
}
