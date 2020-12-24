import React from "react";
import { Link, Redirect } from "react-router-dom";
import { fieldCd } from '../../constants/typeCodes';
import ResumePreview from './resumePreview'


class Contact extends React.Component {
    constructor(props, context) {
            super(props, context);
        this.state = {
                document : this.props.document,
                educationSection: this.props.educationSection,
                contactSection: this.props.contactSection
           };      
    }
    
    onChange=(event)=>{
        this.setState({contactSection:{...this.state.contactSection, [event.target.name]: event.target.value}})
    }

    onSubmit = () => {

        // if (contactSection[fieldCd.FirstName] || )

        if (this.state.contactSection && this.state.contactSection.CreatedDate) {
            this.props.contactActionBind.updateContactSection(this.state.document.id, this.state.contactSection)
        } else {
            this.props.contactActionBind.setContactSection(this.state.document.id, this.state.contactSection);     
        }
            
        this.props.history.push('/education');

    }

    render() { 
      const { contactSection ,educationSection , document} = this.state
        return (
          <>
                { document.id == undefined ? <Redirect to='/login'></Redirect> :
                    <div className="container med contact">
                        <div className="section funnel-section">
                            {/* form Fill */}
                            <div className="form-card">
                                <h2 className="form-heading center">Personal Details</h2>
                                <div className="form-section">
                                    <div className="input-group"><label>First Name</label>
                                        <div className="effect"><input type="text" name={fieldCd.FirstName}
                                            onChange={this.onChange} value={contactSection[fieldCd.FirstName]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>

                                    <div className="input-group"><label>Last Name</label>
                                        <div className="effect"><input type="text" name={fieldCd.LastName} onChange={this.onChange} value={contactSection[fieldCd.LastName]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>

                                    <div className="input-group full"><label>Professional Summary</label>
                                        <div className="effect"><input type="text" name={fieldCd.ProfSummary} onChange={this.onChange} value={contactSection[fieldCd.ProfSummary]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>

                                    <div className="input-group"><label>Email</label>
                                        <div className="effect"><input type="email" name={fieldCd.Email} onChange={this.onChange} value={contactSection[fieldCd.Email]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>

                                    <div className="input-group"><label>Phone</label>
                                        <div className="effect"><input type="number" name={fieldCd.Phone} onChange={this.onChange} value={contactSection[fieldCd.Phone]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>

                                    <div className="input-group"><label>Profession</label>
                                        <div className="effect"><input type="text" name={fieldCd.Profession} onChange={this.onChange} value={contactSection[fieldCd.Profession]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>
                                    <div className="input-group"><label>Street</label>
                                        <div className="effect"><input type="number" name={fieldCd.Street} onChange={this.onChange} value={contactSection[fieldCd.Street]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>

                                    <div className="input-group"><label>City</label>
                                        <div className="effect"><input type="text" name={fieldCd.City} onChange={this.onChange} value={contactSection[fieldCd.City]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>

                                    <div className="input-group"><label>State</label>
                                        <div className="effect"><input type="text" name={fieldCd.State} onChange={this.onChange} value={contactSection[fieldCd.State]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>


                                    <div className="input-group"><label>Country</label>
                                        <div className="effect"><input type="text" name={fieldCd.Country} onChange={this.onChange} value={contactSection[fieldCd.Country]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>
                                    <div className="input-group"><label>Pin Code</label>
                                        <div className="effect"><input type="number" name={fieldCd.ZipCode} onChange={this.onChange} value={contactSection[fieldCd.ZipCode]} required /><span></span>
                                        </div>
                                        <div className="error"></div>
                                    </div>
                                    <div className="form-buttons">
                                        <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                       
                                    </div>
                                </div>

                            </div>

                            {/* preview Card */}
                            <div className="preview-card">
                                <ResumePreview document={document} contactSection={contactSection} educationSection={educationSection}></ResumePreview>
                            </div>
                        </div>
                    </div>
                }
          </>
      );
    }
}
 


export default Contact;





















// const mapStateToProps = (state) => {
//     return {
//         document : state.documentSection,
//         contactSection: state.contactSection,
//         educationSection : state.educationSection
//     }
// }

// const mapDispatchToProps = (dispatch) => { 
//     return {
//         contactActionBind:bindActionCreators( contactAction ,dispatch)
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Contact);