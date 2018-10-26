
import Signup from '../components/signup'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'
import {getTheme,getStyles} from '../selectors'
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
    ...getStyles(state),
    ...getTheme(state)
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(actionsNav,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
