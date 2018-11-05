
import Dashboard from '../components/Dashboard'
import Saad from '../components/SaadDashBoard'
import Ahsan from '../components/AhsanDashBoard'

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
export const _Dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export const _Dashboard2 = connect(mapStateToProps, mapDispatchToProps)(Saad);
export const _Dashboard3 = connect(mapStateToProps, mapDispatchToProps)(Ahsan);
