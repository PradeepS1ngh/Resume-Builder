
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import * as documentActions from '../reducers/actions/documentAction'

import FinaliZePage from '../components/presentation/finalizePage'

const mapStateToProps = (state) => {
    return {
        document: state.documentSection,
        contactSection: state.contactSection,
        educationSection: state.educationSection
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        documentActionsBind: bindActionCreators(documentActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinaliZePage)