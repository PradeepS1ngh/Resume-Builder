
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as educationAction from '../reducers/actions/educationAction'

import Education from '../components/presentation/education'

const mapStateToProps = (state, ownProps) => {
    return {
        document: state.documentSection,
        contactSection: state.contactSection,
        educationSection: state.educationSection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        educationActionBind: bindActionCreators(educationAction, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Education);