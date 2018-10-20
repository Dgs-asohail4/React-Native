import {Routes} from './routes';
import {StackNavigator} from 'react-navigation'
import { COLOR_PRIMARY } from '../global/theme/default';

const generateStack = (routeName, title, showHeader = true, showDrawer = true) => {
    const route = Routes.find( (x) => x.name == routeName);
    let flatRoutes = {};
    let wrapToRoute = (route) => {
        return {
          screen: route.screen,
          title: route.title,
          navigationOptions: showHeader? { title:route.title, headerStyle:{backgroundColor:COLOR_PRIMARY}} : {
              header:null
          }
        }
    };

    flatRoutes[route.name] = wrapToRoute(route);
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
