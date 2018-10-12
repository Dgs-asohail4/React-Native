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
import Floatactionbuttonexample from '../features/floatingactionbuttonexample/containers';
import textInput from '../features/textInput/containers';
import ModalScreenExample from '../features/ModalScreenExample/containers';
import LightBoxScreen from '../features/LightBoxScreen/containers';
import CardView from '../features/CardView/components/CardView';

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
    {name:'app.floatingactionbutton', component: Floatactionbuttonexample},
    {name:'app.textInput', component:textInput},
    {name:'app.modalscreen', component:ModalScreenExample},
    {name:'app.lightboxscreen', component:LightBoxScreen},
    {name:'app.cardView', component:CardView},

    
]

export const registerScreens = (store, provider) => screens.map(screen => Navigation.registerComponent(screen.name, () => screen.component, store, provider))
