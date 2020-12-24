
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { NavLink } from "react-router-dom";

import * as authAction from '../../reducers/actions/authAction'

class signin extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            auth: {
                email: "",
                password: ""
            },
            firebaseauth : this.props.fireBaseAuth,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ firebaseauth: nextProps.fireBaseAuth });
    } 

    onChange = (event) => {  
        this.setState({
            auth: { ...this.state.auth, [event.target.name]: event.target.value}
        })
    }

    onSubmit = () => { 
        this.props.authActionbind.userSignIn(this.state.auth)
        this.setState({
            auth: { ...this.state.auth, password: "" }
        })
    }

    render() {

        if (this.state.firebaseauth.uid !== undefined) {
            console.log(this.state.firebaseauth.uid);
            return <Redirect to="/getting-started" /> 
        }

        return (
            <div className="container med contact">
                <div className="section funnel-section">
                    <div className="loginContainer">
                        <div className="resumeheading">
                            <h2>Resume</h2>
                            <h3>Builder</h3>
                        </div>
                        <div className="logobox" style={{position:"absolute" ,top:"10%", left:"5%"}}>
                            <img src="/images/loginlogo.svg" alt="logo" style={{ width: "300px", height: "300px" }} />
                        </div>
                        <div className="form-card " >
                            <div className="loginheading" ><h2 >LOG-IN</h2></div>
                            <div className="form-section" style={{ marginTop: "30px" }}>

                                <div className="input-group full"><label>User-ID</label>
                                    <div className="effect"><input type="text" name="email" onChange={this.onChange} value={this.state.auth.email} /><span></span>
                                    </div>
                                    <div className="error"></div>
                                </div>

                                <div className="input-group full"><label>PassworD</label>
                                    <div className="effect"><input type="password" name="password" onChange={this.onChange} value={this.state.auth.password} /><span></span>
                                    </div>
                                    <div className="error"></div>
                                </div>

                                <div className="form-buttons">
                                    <button style={{ outline: "none" }} onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                                </div>

                                <div className="form-buttons">
                                    <NavLink to="/register" className=" " style={{ marginTop: "0%", marginBottom: "10px", textAlign: 'center' }}>
                                        Create a Account
                                </NavLink>
                                </div>
                            </div>

                        </div>
                    </div >
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.authSection,
        fireBaseAuth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        authActionbind: bindActionCreators(authAction, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(signin);