
import { connect } from 'react-redux';

import * as documentActions from '../reducers/actions/documentAction';
import { bindActionCreators } from 'redux';

import GettingStarted from '../components/presentation/gettingStarted'

const mapStateToProps = (state) => {
    return {
        document: state.documentSection,
        fireBaseAuth: state.firebase.auth  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        documentActionsBind: bindActionCreators(documentActions, dispatch),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted);