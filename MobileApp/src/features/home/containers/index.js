import Home from '../components/home'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'
import * as actionsSplash from '../../splash/actions'

import { getTheme, getStyles } from '../selectors';
import { bindActionCreators } from 'redux';
const mapStateToProps = (state) => ({
    ...getTheme(state),
    ...getStyles(state)
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actions, dispatch),
    ...bindActionCreators(actionsNav,dispatch),
    ...bindActionCreators(actionsSplash,dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
