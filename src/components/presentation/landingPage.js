import React from 'react';
import logo from "../../static/images/resume.png";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class Lp extends React.Component { 
  constructor(props) { 
    super(props);
    this.state = { 
      fireAuth: this.props.firebaseAuth
    }
  }
  render() { 
    
    return (
      <>
        <div className="lpContainer" style={{ position: "relative" }}>
          <div className="resumeBuild">
            <h2>Resume</h2>
            <h3>Builder...</h3>
          </div>
        <div className="lpBox">
          <div className="lpContain">
            <h1 ><span style={{fontSize:"7rem"}}>Create a resume</span> that stands out</h1>
            <p >Create a Resume that perfectally describes your skills and match job profile.</p>
          </div>
          <div className="lpbtnbox">
            <NavLink to="/getting-started" className=" lpbtn" style={{ padding: "10px 30px" }}><span>Get Started for Free </span>
            </NavLink>
            <NavLink to="/login" className=" lpbtn" style={{padding:"10px 68px"}}><span> Log-in</span>
            </NavLink>
          </div>
          <div className="sociallogo">
              <img src="/images/logo1.svg" alt="logo" style={{ width: "35px"}} />
              <img src="/images/logo2.svg" alt="logo" style={{ width: "35px"}} />
              <img src="/images/logo3.svg" alt="logo" style={{ width: "35px"}} />
              <img src="/images/logo4.svg" alt="logo" style={{ width: "35px"}} />
              <img src="/images/logo5.svg" alt="logo" style={{ width: "35px"}} />
          </div>
        </div>
        <div className="logobox">
          {/* <img src="/images/icon1.svg" alt="logo" style={{ width: "50px",height:"50px" , marginTop:"80%" , marginRight:"10%"}} /> */}
          {/* <img src="/images/icon1.svg" alt="logo" style={{ width: "50px",height:"50px" , marginTop:"80%" , marginRight:"10%"}} /> */}
          {/* <img src="/images/icon3.svg" alt="logo" style={{ width: "100px",height:"100px", margin:"0% 2%", marginTop: "60%" }} /> */}
          <img src="/images/ResumeIcon.svg" alt="logo" style={{ width: "500px" , height:"500px"}} />
        </div>
      </div>


        <div class="custom-shape-divider-bottom-1606655620">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
          </svg>
        </div>
      </>



    );

  }
}


const mapStateToProps = (state) => { 
  return { 
    firebaseAuth: state.firebase.auth
  }
}

 
export default connect(mapStateToProps,null)(Lp);