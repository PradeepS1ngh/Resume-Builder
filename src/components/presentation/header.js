import React from "react";
import { connect } from "react-redux";
import { NavLink, useHistory} from "react-router-dom";
import { bindActionCreators } from "redux";
import logo from "../../static/images/logo.png";

import * as authAction from '../../reducers/actions/authAction'



class header extends React.Component { 

  
  constructor(props, context) {
    super(props, context);
    this.state = {
      auth: this.props.auth
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ auth: nextProps.auth });
  }

  logOUTfunction = () => { 
    this.props.authActionBind.userSignOUT();
  }

  render() { 

    const LogOUT = () => {
      return (
        <ul  >
          <li className="signup btnv-1">
            <NavLink  to="/register">
              <span style={{color:"#6604d0"}}>Register</span>
            </NavLink>
          </li>
          <li className="signin">
            <NavLink className="btnv-3" to="/login">
              Sign In
          </NavLink>
          </li>
        </ul>
      );
    }

    function getName(str) { 
      let name = str.split('@');
      return name[0];
    }

    
    const LogIN = () => {
      return (
        <ul  >
          <li >
            {/* <NavLink id="signupID" className=" btnv-1" > */}
            <span style={{ color: "white" }}>WelComE, <span className="userName">{getName(this.state.auth.email).toUpperCase()}</span></span>
            {/* </NavLink> */}
          </li>
          <li className="signup btnv-1" onClick={ this.logOUTfunction}>
            {/* <NavLink className="text-blue btnv-3" > */}
              <a style={{color:"#6604d0"}}>Sign OUT</a>
          {/* </NavLink> */}
          </li>
        </ul>
      );
    }

    return (
      <header className="header">
        <nav className="nav">
          <a href="/" className="holder-logo">
            {/* <img className='logo' src={logo}></img> */}
            <div className="logo" >
              <h2 style={{ marginTop: "3px", textShadow:"-3px -3px 0 rgba(255,255,255,0.5)"}}>R.B</h2>
              {/* <div className="logoName">
                <h3>Resume</h3>
                <h4>Builder</h4>
              </div> */}
            </div>
          </a>
          <div className="header-links full-height">

            {this.state.auth.uid === undefined ? <LogOUT /> : <LogIN />}
            
            <ul id="nav-mid">
              <li>
                <NavLink className="btn-nvt-gm" to="/resume-templates" style={{ borderBottom: "2px solid white"}}>
                    Resume Templates
                 </NavLink>
              </li>
              <li>
                <NavLink className="btn-nvt-gm" to="/about">
                  About-Us
                 </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
const mapStateToProps = (state) => { 
  return {
       auth : state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    authActionBind: bindActionCreators(authAction, dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(header); 
