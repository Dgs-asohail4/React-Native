import * as Screens from './screen_name';
const Routes = [
    {
        name:'app.home',
        title:'Grid Menu',
        icon:'md-home',
        screen:Screens.GridV1,
        childrens: []
    },
    {
        name:'app.splash',
        title:'Splash',
        icon:'',
        screen:Screens.Splash,
        childrens: []
    },
    {
        name:'menu.auth',
        title:'Auth',
        icon:'',
        screen:Screens._menuLogin,
        childrens: [
            {
                name:'auth.login',
                title:'Login V1',
                screen:Screens._Login,
                children:[]
            },
            {
                name:'auth.loginv2',
                title:'Login V2',
                screen:Screens._LoginV2,
                children:[]
            },
            {
                name:'auth.signup',
                title:'Signup',
                screen:Screens.Signup,
                children:[]
            },
            {
                name:'auth.passwordrecovery',
                title:'Password Recovery',
                screen:Screens.PasswordRecovery,
                children:[]
            },
        ]
    },
    {
        name:'menu.navigation',
        title:'Navigation',
        icon:'',
        screen:Screens._menuNavigation,
        childrens: [
            {
                name:'nav.gridv1',
                title:'Grid Menu V1',
                screen:Screens.GridV1,
                children:[]
            },
            {
                name:'nav.gridv2',
                title:'Grid Menu V2',
                screen:Screens.Home,
                children:[]
            },
            {
                name:'nav.list',
                title:'List Menu',
                screen:Screens._listExample, // toDo
                children:[]
            },
            {
                name:'nav.sidemenu',
                title:'Side Menu',
                screen:Screens._LoginV2, // not required
                children:[]
            }
        ]
    },
    {
        name:'menu.social',
        title:'Social',
        icon:'',
        screen:Screens._menuSocial,
        childrens: [
            {
                name:'social.userprofilev1',
                title:'User Profile V1',
                screen:Screens._UserProfileV1,
                children:[]
            },
            {
                name:'social.userprofilev2',
                title:'User Profile V2',
                screen:Screens._UserProfileV2,
                children:[]
            },
            {
                name:'social.userprofilev3',
                title:'User Profile V3',
                screen:Screens._UserProfileV3,
                children:[]
            },
            {
                name:'social.profilesetting',
                title:'Profile Settings',
                screen:Screens._ProfileSettings,
                children:[]
            },
            {
                name:'social.notifications',
                title:'Notifications',
                screen:Screens._Notifications,
                children:[]
            },
            {
                name:'social.contacts',
                title:'Contacts',
                screen:Screens._Contacts,
                children:[]
            },
            {
                name:'social.feed',
                title:'Feed',
                screen:Screens._Feed,
                children:[]
            }
        ]
    },
    {
        name:'menu.article',
        title:'Articles',
        icon:'',
        screen:Screens._menuArticles,
        childrens: [
            {
                name:'article.example1',
                title:'Article V1',
                screen:Screens._ExampleV1,
                children:[]
            },
            {
                name:'article.example2',
                title:'Article V2',
                screen:Screens._ExampleV2,
                children:[]
            },
            {
                name:'article.example3',
                title:'Article V3',
                screen:Screens._ExampleV3,
                children:[]
            },
            {
                name:'article.example4',
                title:'Article V4',
                screen:Screens._ExampleV4,
                children:[]
            },
            {
                name:'article.blogpost',
                title:'Blogposts',
                screen:Screens._Blogpost,
                children:[]
            },
            {
                name:'article.articleview',
                title:'Article View',
                screen:Screens._ArticleView,
                children:[]
            }
        ]
    },
    {
        name:'menu.messaging',
        title:'Messaging',
        icon:'',
        screen:Screens._menuMessaging,
        childrens: [
            {
                name:'msg.chat',
                title:'Chat',
                screen:Screens._Chat,
                children:[]
            },
            {
                name:'msg.chatlist',
                title:'Chat List',
                screen:Screens._ChatList,
                children:[]
            },
            {
                name:'msg.comments',
                title:'Comments',
                screen:Screens._Comments,
                children:[]
            }
        ]
    },
    {
        name:'menu.dashboard',
        title:'Dashboards',
        icon:'',
        screen:Screens._menuDashboard,
        childrens: [
            {
                name:'dashboard.dashboard',
                title:'Dashboard',
                screen:Screens.ChartScreen,
                children:[]
            }
        ]
    },
    {
        name:'app.walkthrough',
        title:'Walkthrough',
        icon:'',
        screen:Screens.Walkthrogh,
        childrens: []
    },
    {
        name:'menu.ecommerce',
        title:'Ecommerce',
        icon:'',
        screen:Screens._menuEcommerce,
        childrens: [
            {
                name:'ecommerce.cards',
                title:'Cards',
                screen:Screens._Card,
                children:[]
            },
            // {
            //     name:'ecommerce.addtocardform',
            //     title:'Add Card Form',
            //     screen:Screens._AddCardtoForm,
            //     children:[]
            // }
        ]
    },
    {
        name:'menu.other',
        title:'Other',
        icon:'',
        screen:Screens._menuOthers,
        childrens: [
            {
                name:'other.settings',
                title:'Settings',
                screen:Screens.Settings,
                children:[]
            }
        ]
    },
    {
        name:'app.theme',
        title:'Themes',
        icon:'',
        screen:Screens.Themes,
        childrens: []
    }
    // {
    //     name:'app.buttonlist',
    //     title:'Button Example',
    //     icon:'md-radio-button-on',
    //     screen:Screens.buttonScreen,
    //     childrens: []
    // },
    // {
    //     name:'app.swipelist',
    //     title:'Swiper',
    //     icon:'md-swap',
    //     screen:Screens.Swiperlist,
    //     childrens: []
    // },
    // {
    //     name:'app.progressbarscreen',
    //     title:'Progress Bar',
    //     icon:'md-refresh',
    //     screen:Screens.ProgressBarScreen,
    //     childrens: []
    // },
    // {
    //     name:'app.floatingactionbutton',
    //     title:'Floating Action Button',
    //     icon:'md-radio-button-off',
    //     screen:Screens.Floatactionbuttonexample,
    //     childrens: []
    // },
    // {
    //     name:'app.textInput',
    //     title:'Text Input',
    //     icon:'md-text',
    //     screen:Screens.textInput,
    //     childrens: []
    // },
    // {
    //     name:'app.modalscreen',
    //     title:'Modal Screen',
    //     icon:'md-albums',
    //     screen:Screens.ModalScreenExample,
    //     childrens: []
    // },
    // {
    //     name:'app.lightboxscreen',
    //     title:'Light Box Screen',
    //     icon:'md-film',
    //     screen:Screens.LightBoxScreen,
    //     childrens: []
    // },
    // {
    //     name:'app.foldviewscreen',
    //     title:'FoldView Screen',
    //     icon:'',
    //     screen:Screens.FoldViewScreen,
    //     childrens: []
    // },
    // {
    //     name:'app.tabviewscreen',
    //     title:'Tab View Screen',
    //     icon:'md-paper',
    //     screen:Screens.TabViewScreen,
    //     childrens: []
    // },
    // {
    //     name:'app.timelinescreen',
    //     title:'TimeLine View',
    //     icon:'md-time',
    //     screen:Screens.TimeLineScreen,
    //     childrens: []
    // },
    // {
    //     name:'app.dropdown',
    //     title:'Dropdown',
    //     icon:'',
    //     screen:Screens.DropDown,
    //     childrens: []
    // },
    // {
    //     name:'app.chartexample',
    //     title:'Chart Example',
    //     icon:'md-pie',
    //     screen:Screens.ChartScreen,
    //     childrens: []
    // },
    // {
    //     name:'app.listscreen',
    //     title:'List Example',
    //     icon:'md-list',
    //     screen:Screens.ListScreenExample,
    //     childrens: []
    // },
    // {
    //     name:'app.cardView',
    //     title:'Card View',
    //     icon:'md-card',
    //     screen:Screens.CardView,
    //     childrens: []
    // },
    // {
    //     name:'app.pushnotification',
    //     title:'Push Notification',
    //     icon:'md-notifications-outline',
    //     screen:Screens.PushNotificationScreen,
    //     childrens: []
    // }
];

const AuthMenuRoutes = Routes.find((x)=>x.name=="menu.auth").childrens
const NavigationRoutes = Routes.find((x)=>x.name=="menu.navigation").childrens;
const SocialRoutes = Routes.find((x)=>x.name=="menu.social").childrens;
const ArticleRoutes = Routes.find((x)=>x.name=="menu.article").childrens;
const MessagingRoutes =Routes.find((x)=>x.name=="menu.messaging").childrens;
const DashboardRoutes = Routes.find((x)=>x.name=="menu.dashboard").childrens;
//const WalkthroughRoutes = Routes.find((x)=>x.name=="menu.walkthrough").childrens;
const EcommerceRoutes = Routes.find((x)=>x.name=="menu.ecommerce").childrens;
const OtherRoutes = Routes.find((x)=>x.name=="menu.other").childrens;
export {
    Routes,
    AuthMenuRoutes,
    NavigationRoutes,
    SocialRoutes,
    ArticleRoutes,
    MessagingRoutes,
    DashboardRoutes,
   // WalkthroughRoutes,
    EcommerceRoutes,
    OtherRoutes
}
