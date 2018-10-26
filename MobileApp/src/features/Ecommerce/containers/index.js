
import Ecommerce from '../components/Ecommerce'
import Card from '../components/Card'
import AddCardToForm from '../components/AddCardToForm'

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
export const _Card = connect(mapStateToProps, mapDispatchToProps)(Card);
export const _AddCardToForm = connect(mapStateToProps, mapDispatchToProps)(AddCardToForm);
