import {navigatorStyle} from '../global/styles/navigator'

export const children = [
    {name:'app.home', childrens: ['app.screen2' , 'app.home']},
    {name:'app.splash', childrens: ['app.splash']},
    {name:'auth.login', childrens: ['auth.login']},
    {name:'app.buttonlist',childrens: ['app.buttonlist']},
    {name:'app.swipelist', childrens: ['app.swipelist']},
    {name:'app.progressbarscreen', childrens: ['app.progressbarscreen']},
    {name:'app.floatingactionbutton', childrens: ['app.floatingactionbutton']},
    {name:'app.textInput', childrens:['app.textInput']},
    {name:'app.modalscreen', childrens:['app.modalscreen']},
    {name:'app.lightboxscreen', childrens:['app.lightboxscreen']},
    {name:'app.foldviewscreen',  childrens:['app.foldviewscreen']},
    {name:'app.tabviewscreen',  childrens:['app.tabviewscreen']},
    {name:'app.timelinescreen',  childrens:['app.timelinescreen']},
    {name:'app.dropdown', childrens:['app.dropdown']},
    {name:'app.chartexample', childrens:['app.chartexample']},
    {name:'app.listscreen',childrens:['app.listscreen']},
    {name:'app.cardView', childrens:['app.cardView']},
    {name:'app.pushnotification', childrens:['app.pushnotification']}
];

export const generateStack = (routeName, title, showHeader = true, showDrawer = true) => {
    const route = children.find( (x) => x.name == routeName);
    const root = {
		root:{
			sideMenu : {
				left: {
					visible: showDrawer,
					component: { id: 'sideDrawer', name: 'global.drawer', visible: true},
				},
				center:{
					stack:  {
						children: route.childrens.map((child)=>{
                            return {
                                component:
                                    {
                                        name:child,
                                        options: {
                                            topBar: navigatorStyle(title, showHeader)

                                        }
                                    }
                                }
                        }),
                        // children: [{
                        //     component: {
                        //         name: route.childrens[0]
                        //     }
                        // }
                        // ],

					},
				}
			}
		}
    }

    return root;
}