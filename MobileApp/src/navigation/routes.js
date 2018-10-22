import * as Screens from './screen_name';
import {StackNavigator} from 'react-navigation'

const Routes = [
    {
        name:'app.home',
        title:'Home',
        icon:'md-home',
        screen:Screens.Home,
        childrens: [
            {
                name:'app.screen2',
                title: 'Screen 2',
                screen: Screens.ScreenNew,
                children: []
            }
        ]
    },
    {
        name:'app.splash',
        title:'Splash',
        icon:'',
        screen:Screens.Splash,
        childrens: []
    },
    {
        name:'auth.loginMenu',
        title:'Login Menu',
        icon:'',
        screen:Screens._menuLoginV1,
        childrens: [
            {
                name:'auth.login',
                title:'Login V1',
                screen:Screens._Login,
                children:[]
            },     
            {
            name:'auth.signup',
            title:'Signup',
            screen:Screens.Signup,
            children:[]
        },{
            name:'auth.loginv2',
            title:'Login V2',
            screen:Screens._LoginV2,
            children:[]
        }]
    },
    {
        name:'app.buttonlist',
        title:'Button Example',
        icon:'md-radio-button-on',
        screen:Screens.buttonScreen,
        childrens: []
    },
    {
        name:'app.swipelist',
        title:'Swiper',
        icon:'md-swap',
        screen:Screens.Swiperlist,
        childrens: []
    },
    {
        name:'app.progressbarscreen',
        title:'Progress Bar',
        icon:'md-refresh',
        screen:Screens.ProgressBarScreen,
        childrens: []
    },
    {
        name:'app.floatingactionbutton',
        title:'Floating Action Button',
        icon:'md-radio-button-off',
        screen:Screens.Floatactionbuttonexample,
        childrens: []
    },
    {
        name:'app.textInput',
        title:'Text Input',
        icon:'md-text',
        screen:Screens.textInput,
        childrens: []
    },
    {
        name:'app.modalscreen',
        title:'Modal Screen',
        icon:'md-albums',
        screen:Screens.ModalScreenExample,
        childrens: []
    },
    {
        name:'app.lightboxscreen',
        title:'Light Box Screen',
        icon:'md-film',
        screen:Screens.LightBoxScreen,
        childrens: []
    },
    {
        name:'app.foldviewscreen',
        title:'FoldView Screen',
        icon:'',
        screen:Screens.FoldViewScreen,
        childrens: []
    },
    {
        name:'app.tabviewscreen',
        title:'Tab View Screen',
        icon:'md-paper',
        screen:Screens.TabViewScreen,
        childrens: []
    },
    {
        name:'app.timelinescreen',
        title:'TimeLine View',
        icon:'md-time',
        screen:Screens.TimeLineScreen,
        childrens: []
    },
    {
        name:'app.dropdown',
        title:'Dropdown',
        icon:'',
        screen:Screens.DropDown,
        childrens: []
    },
    {
        name:'app.chartexample',
        title:'Chart Example',
        icon:'md-pie',
        screen:Screens.ChartScreen,
        childrens: []
    },
    {
        name:'app.listscreen',
        title:'List Example',
        icon:'md-list',
        screen:Screens.ListScreenExample,
        childrens: []
    },
    {
        name:'app.cardView',
        title:'Card View',
        icon:'md-card',
        screen:Screens.CardView,
        childrens: []
    },
    {
        name:'app.pushnotification',
        title:'Push Notification',
        icon:'md-notifications-outline',
        screen:Screens.PushNotificationScreen,
        childrens: []
    }
];



export {
    Routes
}
