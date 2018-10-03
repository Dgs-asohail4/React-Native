import Drawer from './index.js'
import {connect} from 'react-redux'
import * as actions from './action.js'
import * as actionsNav from '../../navigation/actions'
import { bindActionCreators } from 'redux';
import {getScene} from '../../navigation/selectors'

const mapStateToProps = (state) => ({
    ...getScene(state)
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(actionsNav,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Drawer);