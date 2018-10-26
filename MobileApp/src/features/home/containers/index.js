import Home from '../components/home'
import {connect} from 'react-redux'
import * as actions from '../actions'
import * as actionsNav from '../../../navigation/actions'

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = () => ({
    ...actions,
    ...actionsNav
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
