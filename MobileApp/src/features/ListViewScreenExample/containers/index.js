
import * as menus from '../components/ListViewScreenExample'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'
import { bindActionCreators } from 'redux';
import { getStyles, getTheme } from '../selectors';
const mapStateToProps = (state) => ({
    ...getStyles(state),
    ...getTheme(state)

});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(actionsNav,dispatch)
});
export const _menuLogin = connect(mapStateToProps, mapDispatchToProps)(menus.AuthScreenMenu);
export const _menuNavigation = connect(mapStateToProps, mapDispatchToProps)(menus.NavigationScreenMenu);
export const _menuArticles = connect(mapStateToProps, mapDispatchToProps)(menus.ArticlesScreenMenu);
export const _menuDashboard = connect(mapStateToProps, mapDispatchToProps)(menus.DasboardScreenMenu);
export const _menuEcommerce = connect(mapStateToProps, mapDispatchToProps)(menus.EcommerceScreenMenu);
export const _menuMessaging = connect(mapStateToProps, mapDispatchToProps)(menus.MessagingScreenMenu);
export const _menuOthers = connect(mapStateToProps, mapDispatchToProps)(menus.OthersScreenMenu);
export const _menuSocial = connect(mapStateToProps, mapDispatchToProps)(menus.SocailScreenMenu);
//export const _menuWalkthrough = connect(mapStateToProps, mapDispatchToProps)(menus.WalkthroughScreenMenu);
export const _listExample = connect(mapStateToProps, mapDispatchToProps)(menus.ListViewScreenExample);