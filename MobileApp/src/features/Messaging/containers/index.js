
import Messaging from '../components/Messaging'
import Chat from '../components/Chat'
import ChatList from '../components/ChatList'
import Comments from '../components/Comments'

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
export const _Chat = connect(mapStateToProps, mapDispatchToProps)(Chat);
export const _ChatList = connect(mapStateToProps, mapDispatchToProps)(ChatList);
export const _Comments = connect(mapStateToProps, mapDispatchToProps)(Comments);
