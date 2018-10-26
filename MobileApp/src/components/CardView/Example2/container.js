
import CardView from './index.js'
import {connect} from 'react-redux'
import * as actionsNav from '../../../navigation/actions'
import { bindActionCreators } from 'redux';
import { getTheme, getStyles } from '../../../features/Other/selectors/index.js';

const mapStateToProps = (state) => ({
    ...getTheme(state),
    ...getStyles(state)
});


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionsNav,dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CardView);

