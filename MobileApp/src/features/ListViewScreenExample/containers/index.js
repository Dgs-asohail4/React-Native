
import ListViewScreenExample from '../components/ListViewScreenExample'
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
export default connect(mapStateToProps, mapDispatchToProps)(ListViewScreenExample);
