
import AreaChart from './areaChart'
import AreaSmoothedChart from './areaSmoothedChart'
import DoughnutChart from './doughnutChart'
import ProgressChart from './progressChart'

import {connect} from 'react-redux'
import * as actionsNav from '../../navigation/actions'
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
    theme : state.nav.theme,
    globalStyles : state.splash.globalTheme
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionsNav,dispatch)
});



export const _AreaChart = connect(mapStateToProps, mapDispatchToProps)(AreaChart);
export const _AreaSmoothedChart = connect(mapStateToProps, mapDispatchToProps)(AreaSmoothedChart);
export const _DoughnutChart = connect(mapStateToProps, mapDispatchToProps)(DoughnutChart);
export const _ProgressChart = connect(mapStateToProps, mapDispatchToProps)(ProgressChart);

