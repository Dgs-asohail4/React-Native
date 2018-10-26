
import Articles from '../components/Articles'
import ExampleV1 from '../components/ExampleV1'
import ExampleV2 from '../components/ExampleV2'
import ExampleV3 from '../components/ExampleV3'
import ExampleV4 from '../components/ExampleV4'
import Blogpost from '../components/Blogposts'
import ArticleView from '../components/ArticleView'

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
export const _Articles =  connect(mapStateToProps, mapDispatchToProps)(Articles);
export const _ExampleV1 =  connect(mapStateToProps, mapDispatchToProps)(ExampleV1);
export const _ExampleV2 =  connect(mapStateToProps, mapDispatchToProps)(ExampleV2);
export const _ExampleV3 =  connect(mapStateToProps, mapDispatchToProps)(ExampleV3);
export const _ExampleV4 =  connect(mapStateToProps, mapDispatchToProps)(ExampleV4);
export const _Blogpost =  connect(mapStateToProps, mapDispatchToProps)(Blogpost);
export const _ArticleView =  connect(mapStateToProps, mapDispatchToProps)(ArticleView);
