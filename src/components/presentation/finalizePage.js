import React from 'react';
import ResumePreview from './resumePreview';

import { skinCodes } from '../../constants/typeCodes';



class FinaliZePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      size: 0,
      opa: 1,
        educationSection: this.props.educationSection,
        contactSection: this.props.contactSection,
        document: this.props.document,
        fontColor: ""
    };
  }


   componentWillReceiveProps(nextProps) {
     this.setState({ document: nextProps.document });

   }

   onChange = (value) => {
     this.props.documentActionsBind.updateDocument(this.state.document.id, value);
   }


   changesize = () => {
     this.setState({
       size: (this.state.size === 0) ? 1 : 0,
       opa: (this.state.opa === 1) ? 0.3 : 1  
     })
   }

   changeStyle = (event) => { 
     var type = event.target.dataset.type;
     var value = event.target.dataset.value;
      if (type == "color") {
        this.setState({
          fontColor : value
        })
      }
   }

  
  
  render() {
    let { contactSection, educationSection, document ,fontColor} = this.state;
    if (fontColor == undefined || fontColor == "") {
      switch (document.skinCd) {
        case "skin1":
          fontColor = "rgb(0, 163, 228)"
          break;
        case "skin2":
          fontColor = "orange"
          break;

        default:
          fontColor = "red"
          break;
      }
    }
      return (    
          <div className="container med finalize-page">
          <div className="funnel-section">
            
            
            <div className="finalize-preview-card" style={{ borderColor: fontColor ,  opacity: `${this.state.opa}` }}>        
              <ResumePreview document={ document } contactSection={contactSection} educationSection={educationSection} fontColor={ fontColor }></ResumePreview>
            </div>   
            
            <div style={{ opacity: `${this.state.opa}` }}className="finalize-settings">        
              <div className="customize">
                <div className="download">
                  <h3 style={{ margin: "10px 0px" }}>Download Resume As PDF</h3>
                  <button> Download </button>
                </div>
                <br />
                <hr style={{ margin: "1rem 2rem", borderTop: "1px solid skyblue" }} />
                <div className="change_fontfamily ">
                  <h3>Change Font Family</h3>
                  <div className='all_font'>
                    <h5>Josefin</h5>
                    <h5>Roboto</h5>
                    <h5>Monstserrat</h5>
                  </div>
                </div>
                <br />
                <hr style={{ margin: "1rem 2rem", borderTop: "1px solid skyblue" }} />
                <div className="change_fontSize">
                  <h3>Change Font Size</h3>
                  <div className='all_Size'>
                    <h5>Small</h5>
                    <h5>Medium</h5>
                    <h5>Large</h5>
                  </div>
                </div>
                <br />
                <hr style={{ margin: "1rem 2rem", borderTop: "1px solid skyblue" }} />
                <div className="change_color">
                  <h3>Change Color</h3>
                  <div className='all_color'>
                    <div className="circle" onClick={this.changeStyle} style={{ backgroundColor: "red" }} data-type="color" data-value="red"></div>
                    <div className="circle" onClick={this.changeStyle} style={{ backgroundColor: "orange" }} data-type="color" data-value="orange"></div>
                    <div className="circle" onClick={this.changeStyle} style={{ backgroundColor: "blue" }} data-type="color" data-value="blue"></div>
                    <div className="circle" onClick={this.changeStyle} style={{ backgroundColor: "green" }} data-type="color" data-value="green"></div>
                    <div className="circle" onClick={this.changeStyle} style={{ backgroundColor: "violet" }} data-type="color" data-value="violet"></div>

                  </div>
                </div>
                <br />
                <hr style={{ margin: "1rem 2rem", borderTop: "1px solid skyblue" }} />
                <div className="change_Template">
                  <h3 style={{ margin: "10px 0px" }}>Change Template</h3>
                  <button onClick={this.changesize}>Change</button>
                </div>
              </div>
            </div> 

            <div style={{ transform: `scale(${this.state.size})` }} className="template_previews">
              <button className="crossbutton" onClick={this.changesize}><i className="fas fa-times-circle" ></i></button>
              <div className="container med gettingStarted styleTemplate ">
                {
                  skinCodes.map((value, index) => {
                    return (<div key={index} className={(value == this.state.document.skinCd ? "selected-skin " : "") + "template-card rounded-border"}>
                      <img className='' src={'/images/' + value + '.svg'} />
                      <button type="button" onClick={() => this.onChange(value)}
                        className='btn-select-theme'>{(value == this.state.document.skinCd ? "SELECTED" : "USE TEMPLATE")}</button>
                    </div>);

                  })
                }
              </div>
            </div>
          
          </div>
        </div>

      );
  }

}


export default FinaliZePage;

// const mapStateToProps = (state) => {
//   return {   
//     document: state.documentSection,
//     contactSection: state.contactSection,
//     educationSection: state.educationSection
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     documentActionsBind: bindActionCreators(documentActions, dispatch),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FinaliZePage)