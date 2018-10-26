
import Login from '../components/login'
import LoginV2 from '../components/login2'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'
import { bindActionCreators } from 'redux';
import {getPayload, getStyles, getTheme} from '../selectors'

const mapStateToProps = (state) => ({
    ...getPayload(state),
    ...getStyles(state),
    ...getTheme(state)
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(actionsNav,dispatch)
});
export const _Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export const _LoginV2 = connect(mapStateToProps, mapDispatchToProps)(LoginV2);