import { Navigation } from 'react-native-navigation';
import Drawer from '../components/drawer/container';
import Home from '../features/home/containers';
import HomeNew from '../features/home2/containers';
import Splash from '../features/splash/containers';
import Login from '../features/login/containers';
import Signup from '../features/signup/containers';
import ScreenNew from '../features/screen2/containers';
import buttonScreen from '../features/buttonScreen/containers'
import Swiperlist from '../features/swiperlist/containers';
import ProgressBarScreen from '../features/progressbarexample/containers';

const screens = [
    {name:'global.drawer', component: Drawer},
    {name:'app.splash', component: Splash},
    {name:'app.home', component: Home},
    {name:'app.home2', component: HomeNew},
    {name:'auth.login', component: Login},
    {name:'auth.signup', component: Signup},
    {name:'app.screen2', component: ScreenNew},
    {name:'app.buttonlist',component: buttonScreen},
    {name:'app.swipelist', component: Swiperlist},
    {name:'app.progressbarscreen', component: ProgressBarScreen},
]

export const registerScreens = (store, provider) => screens.map(screen => Navigation.registerComponent(screen.name, () => screen.component, store, provider))
