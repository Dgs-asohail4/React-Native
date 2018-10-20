import * as Screens from './screen_name';
import {StackNavigator} from 'react-navigation'

const Routes = [
    {
        name:'app.home',
        tilte:'Home',
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
        tilte:'Splash',
        icon:'',
        screen:Screens.Splash,
        childrens: []
    },
    {
        name:'auth.login',
        tilte:'Login',
        icon:'',
        screen:Screens.Login,
        childrens: [{
            name:'auth.signup',
            title:'Signup',
            screen:Screens.Signup,
            children:[]
        }]
    },
    {
        name:'app.buttonlist',
        tilte:'Button Example',
        icon:'md-radio-button-on',
        screen:Screens.buttonScreen,
        childrens: []
    },
    {
        name:'app.swipelist',
        tilte:'Swiper',
        icon:'md-swap',
        screen:Screens.Swiperlist,
        childrens: []
    },
    {
        name:'app.progressbarscreen',
        tilte:'Progress Bar',
        icon:'md-refresh',
        screen:Screens.ProgressBarScreen,
        childrens: []
    },
    {
        name:'app.floatingactionbutton',
        tilte:'Floating Action Button',
        icon:'md-radio-button-off',
        screen:Screens.Floatactionbuttonexample,
        childrens: []
    },
    {
        name:'app.textInput',
        tilte:'Text Input',
        icon:'md-text',
        screen:Screens.textInput,
        childrens: []
    },
    {
        name:'app.modalscreen',
        tilte:'Modal Screen',
        icon:'md-albums',
        screen:Screens.ModalScreenExample,
        childrens: []
    },
    {
        name:'app.lightboxscreen',
        tilte:'Light Box Screen',
        icon:'md-film',
        screen:Screens.LightBoxScreen,
        childrens: []
    },
    {
        name:'app.foldviewscreen',
        tilte:'FoldView Screen',
        icon:'',
        screen:Screens.FoldViewScreen,
        childrens: []
    },
    {
        name:'app.tabviewscreen',
        tilte:'Tab View Screen',
        icon:'md-paper',
        screen:Screens.TabViewScreen,
        childrens: []
    },
    {
        name:'app.timelinescreen',
        tilte:'TimeLine View',
        icon:'md-time',
        screen:Screens.TimeLineScreen,
        childrens: []
    },
    {
        name:'app.dropdown',
        tilte:'Dropdown',
        icon:'',
        screen:Screens.DropDown,
        childrens: []
    },
    {
        name:'app.chartexample',
        tilte:'Chart Example',
        icon:'md-pie',
        screen:Screens.ChartScreen,
        childrens: []
    },
    {
        name:'app.listscreen',
        tilte:'List Example',
        icon:'md-list',
        screen:Screens.ListScreenExample,
        childrens: []
    },
    {
        name:'app.cardView',
        tilte:'Card View',
        icon:'md-card',
        screen:Screens.CardView,
        childrens: []
    },
    {
        name:'app.pushnotification',
        tilte:'Push Notification',
        icon:'md-notifications-outline',
        screen:Screens.PushNotificationScreen,
        childrens: []
    }
];



export {
    Routes
}
