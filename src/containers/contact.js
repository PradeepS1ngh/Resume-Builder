
import { connect } from 'react-redux';

import { bindActionCreators } from "redux";
import * as contactAction from '../reducers/actions/contactAction';

import Contact from '../components/presentation/contact'


const mapStateToProps = (state) => {
    return {
        // document: state.documentSection,
        document: state.documentSection,
        contactSection: state.contactSection,
        educationSection: state.educationSection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        contactActionBind: bindActionCreators(contactAction, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Contact);