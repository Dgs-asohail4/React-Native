
import Social from '../components/Social'
import Contacts from '../components/Contacts'
import Feed from '../components/Feed'
import Notifications from '../components/Notifications'
import ProfileSettings from '../components/ProfileSettings'
import UserProfileV1 from '../components/UserProfileV1'
import UserProfileV2 from '../components/UserProfileV2'
import UserProfileV3 from '../components/UserProfileV3'

import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'
import { bindActionCreators } from 'redux';
import { getTheme, getStyles } from '../selectors';

const mapStateToProps = (state) => ({
    ...getTheme(state),
    ...getStyles(state)
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(actionsNav,dispatch)
});
export const _Social = connect(mapStateToProps, mapDispatchToProps)(Social);
export const _Contacts = connect(mapStateToProps, mapDispatchToProps)(Contacts);
export const _Feed = connect(mapStateToProps, mapDispatchToProps)(Feed);
export const _Notifications = connect(mapStateToProps, mapDispatchToProps)(Notifications);
export const _ProfileSettings = connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
export const _UserProfileV1 = connect(mapStateToProps, mapDispatchToProps)(UserProfileV1);
export const _UserProfileV2 = connect(mapStateToProps, mapDispatchToProps)(UserProfileV2);
export const _UserProfileV3 = connect(mapStateToProps, mapDispatchToProps)(UserProfileV3);

